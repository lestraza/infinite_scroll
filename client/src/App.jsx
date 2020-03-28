import React, { Component } from 'react';
import { getData } from './actions/requests'
import Table from './components/Table';

class App extends Component {
    
    componentDidMount() {
        getData(3, 7)
    }
    
       
    render() {
        return (
            <div className="wrapper">
                <Table />
            </div>
        );
    }
    
}

export default App;
