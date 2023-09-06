import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const { good } = this.state;
    return Math.round((good / total) * 100);
  }

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleFeedback}
        />
        {total === 0 ? (
          <p>There is no feedback</p>
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </div>
    );
  }
}

export default App;
