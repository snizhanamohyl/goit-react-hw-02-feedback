import { Component } from "react";
import PropTypes from 'prop-types';

export default class Notification extends Component{
    render() {
        const { message } = this.props;

        return <h2>{ message}</h2>
    }
}

Notification.propTypes = {
    message: PropTypes.string,
}