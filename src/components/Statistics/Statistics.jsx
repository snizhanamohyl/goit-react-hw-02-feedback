import { Component } from "react";
import css from './Statistics.module.css';

export default class Statistics extends Component {

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        
        return <div className="stats">
                <h3>Statistics</h3>
                <ul className="stats-list">
                    <li className={css.item}>Good: <span className={css.value}>{ good}</span></li>
                    <li className={css.item}>Neutral: <span className={css.value}>{ neutral}</span></li>
                    <li className={css.item}>Bad: <span className={css.value}>{ bad}</span></li>
                    <li className={css.item}>Total: <span className={css.value}>{total()}</span></li>
                    <li className={css.item}>Positive feedback: <span className={css.value}>{positivePercentage()}%</span></li>
                </ul>
            </div>
    }
}