import React from "react";
import { Buttons } from "./Buttons";
import { Statistics } from "./Statistics";
import Notification from "./NotificationMessage";

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (review) => () => {
    this.setState({ [review]: this.state[review] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return Math.round((good * 100) / (good + neutral + bad)) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="Conteiner">
        <p>Please leave feedback</p>

        <Buttons
          onClickGood={this.handleIncrement("good")}
          onClickNeutral={this.handleIncrement("neutral")}
          onClickBad={this.handleIncrement("bad")}
        />
        <h1>Statistics</h1>
        {good || neutral || bad >= 1 ? (
          <Statistics
            countGood={good}
            countBad={bad}
            countNeutral={neutral}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification />
        )}
      </div>
    );
  }
}

export default Counter;
