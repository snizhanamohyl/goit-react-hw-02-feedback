import { Component } from "react";


export default class Notification extends Component{
    render() {
        const { message } = this.props;

        return <h2>{ message}</h2>
    }
}