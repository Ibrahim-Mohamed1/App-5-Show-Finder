import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor(){
        super()
        this.state={
            show: []
        }
    }

    getShow = (show)=> {
        axios.get(`https://vschool-cors.herokuapp.com?url=https://tastedive.com/api/similar?q=${show}&k=334753-IbrahimM-B36QZN4K`).then(res => {
            this.setState({
                show: res.data
            })
        })
    }

    render() {
        return (
            <Provider value={{
                getShow: this.getShow,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}