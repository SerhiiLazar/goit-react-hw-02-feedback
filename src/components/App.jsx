import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state.good;
    const { totalFeedback } = this.countTotalFeedback();
    return Math.round((good / totalFeedback) * 100);
  };

  onFeadback = feedbackType => {
    this.setState(prev => ({
      [feedbackType]: prev[feedbackType] + 1}));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const options = this.state;
    const onFeadback = this.onFeadback;
    const total = this.countTotalFeedback();
    const positiv = this.countTotalFeedback();

    
    return (
      <div>
        <Section title="Please leave Feedback">
          <FeedbackOptions 
            options={options} 
            onFeadback={onFeadback} />
        </Section>

        <Section title="Statistics">
          {!totalFeedback 
           ? <Notification messege='There is no feedback'/>
           : <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={total}
            positivePersent={positiv}
          />}
        </Section>
      </div>
    );
  }
}

export default App;
