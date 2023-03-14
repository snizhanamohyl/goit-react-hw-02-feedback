import { Component } from "react";
import css from './FeedbackOptions.module.css';
import {EmojiFrown, EmojiNeutral, EmojiSmile } from 'react-bootstrap-icons';

export default class FeedbackOptions extends Component {
    
    render() {
        const { options, onLeaveFeedback } = this.props;

        return <ul className={css["btn-list"]}>{options.map(option => {
            let iconComponent;

            switch (option) {
                case "good":
                    iconComponent = <EmojiSmile  className={ css.icon}/>;
                    break;
                case "neutral":
                    iconComponent = <EmojiNeutral  className={ css.icon}/>;
                    break; 
                case "bad":
                    iconComponent = <EmojiFrown className={ css.icon}/>;
                    break;
            }

            return <li key={option} className={css["btn-item"]}><button className={css.btn} onClick={onLeaveFeedback} option={option}><span className="value">{option}</span>{iconComponent}</button></li>
        })}</ul>;
    }
}