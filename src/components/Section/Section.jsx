import { Component } from "react";

export default class Section extends Component {
    
    render() {
        const { title, children } = this.props;
        
        return <div className="feedback">< h2 className="feedback-title">{title}</h2>{ children}</div>;
    }
}