import React, { Component } from 'react'
import { action } from 'mobx'
import { observer, inject } from 'mobx-react'

@inject("store")
@observer
class Paging extends Component {
    mainStore = this.props.store

    @action.bound
    renderPaging() {
        const { totalPage } = this.mainStore
        const numbersPages = []
        for(let i = 1; i <= totalPage; i++) {
            numbersPages.push(<div className="page" data-page={i} key={i+3} onClick={this.onClickChangePage}>{i}</div>)
        }
        return numbersPages
    }

    @action.bound
    onClickChangePage(event){
        const { changePage } = this.mainStore;
        const number = event.target.dataset.page;
        changePage(number)
    }

    @action.bound
    onClickForward(){
        const { forwardPage, currentPage, totalPage } = this.mainStore;
        if(currentPage >= totalPage){
            return
        }
        forwardPage()
    }
    @action.bound
    onClickBack() {
        const { backPage } = this.mainStore;
        backPage()
    }

    render() {
        const { totalPage, currentPage } = this.mainStore
        const isBackVisible = currentPage > 1;
        const isForwardVisible = currentPage < totalPage;

        return (
            <div className="paging_container">
                {isBackVisible && <div className="back" onClick={this.onClickBack}>Назад</div>}
                {totalPage > 1 && this.renderPaging()}
                {isForwardVisible && <div className="forward" onClick={this.onClickForward}>Далее</div>}
            </div>
        )
    }
}
export default Paging
