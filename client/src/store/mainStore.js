import { observable, action, runInAction } from 'mobx';
import { getData } from '../actions/requests';

class MainStore {

    @observable
    data = []

    @observable
    totalPage = 0

    @observable
    skip = 0

    @observable
    take = 25

    @observable
    currentPage = 1

    constructor() {
        this.loadData()
    }

    @action.bound
    loadData() {
        getData(this.skip, this.take)
            .then(res => {
                runInAction(() => {
                    this.data = [...res.data]
                    this.totalPage = Math.ceil(res.total / this.take)
                })
            })
    }


    @action.bound
    loadPage() {
        if( (this.currentPage + 1) <= this.totalPage) {
            this.currentPage += 1
            this.skip = (this.take * this.currentPage) - this.take
            return getData(this.skip, this.take)
                .then(res => {
                    runInAction(() => {
                        this.data = [...this.data, ...res.data]
                    })
                })
        }
        return Promise.resolve()
    }
}


export default MainStore;