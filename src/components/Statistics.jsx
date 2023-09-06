import { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, positivePercentage, total } = this.props;
    return (
      <div>
        <p>Statistics</p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Rercentage: {positivePercentage}</p>
      </div>
    );
  }
}

export default Statistics;
