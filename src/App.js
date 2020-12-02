import React, { Component } from 'react';
import './App.css';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics/Statistics'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleFeedback = (option) => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }))
  }

  countTotalFeedback = () => {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return Math.round(good / (good + neutral + bad) * 100);
  }

    
  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
  
    return (
      <div className="App">
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedback}>
        </FeedbackOptions>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        >
        </Statistics>
      </div>
    );
  }
  
}

export default App;
