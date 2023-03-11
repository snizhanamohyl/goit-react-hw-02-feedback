import { Component } from "react";
import Notification from './Notification/Notification';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {

    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }

      countTotalFeedback = () => {
        const options = Object.values(this.state);
        return options.reduce((acc, option) => acc += option, 0);
    }

    countPositiveFeedbackPercentage = () => {
      const positiveOption = 'good';
        
        if (!this.countTotalFeedback()) return 0;
        
        return  Math.round(this.state[positiveOption] / this.countTotalFeedback() * 100);
  } 
  
    onLeaveFeedback = (e) => { 
        const chosenOption = e.target.attributes.option.value;

        this.setState((prevState) => {
            const newValue = prevState[chosenOption] + 1;

            return ({ ...prevState, ...{[chosenOption]: newValue}})
        })
        
        this.countTotalFeedback();
    } 

  
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
        
        {!this.countTotalFeedback() ? <Notification message="There is no feedback"></Notification> :
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}></Statistics>}
      </Section>
      )
  }
};
