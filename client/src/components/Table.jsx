import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { action, observable, reaction } from "mobx";

@inject("store")
@observer
class Table extends Component {
  mainStore = this.props.store;

  @observable
  table = undefined;

  @observable
  tableBottom = 0;

  @observable
  loadingCounter = 0;

  @observable
  isLoading = false;

  @action.bound
  infinityLoad() {
    if (!this.isLoading) {
      const { loadPage } = this.mainStore;
      // const rects = document.body.getClientRects()[0]
      // const { y: clientScroll } = rects
      const { innerHeight, scrollY } = window;
      // console.log(innerHeight + scrollY, this.tableBottom);
      if (innerHeight + scrollY >= this.tableBottom) {
        loadPage();
        this.isLoading = true;
      }
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.infinityLoad);
  }

  componentDidUpdate() {
    const tableRects = this.table.current.getClientRects()[0];
    const { height } = tableRects;
    
    this.tableBottom = height;          
    this.isLoading = false;
  }

  constructor(props) {
    super(props);
    this.table = React.createRef();    
  }

  @action.bound
  renderRows(data) {
    console.log(1);
    return data.map((item, i) => {
      return (
        <tr className="row" key={item.customerName + item.phoneNumber}>
          <td className="content">{i + 1}</td>
          <td className="content">{item.customerName}</td>
          <td className="content">{item.products}</td>
          <td className="content">{item.phoneNumber}</td>
          <td className="content">{item.orders}</td>
        </tr>
      );
    });
  }

  render() {
    const { data } = this.mainStore;
    return (
      <React.Fragment>
        <table className="table" ref={this.table}>
          <tbody>
            <tr className="titles">
              <th className="column title">Number</th>
              <th className="column title">Customer Name</th>
              <th className="column title">Products</th>
              <th className="column title">Phone Number</th>
              <th className="column title">Orders</th>
            </tr>
            {data.length && this.renderRows(data)}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default Table;
