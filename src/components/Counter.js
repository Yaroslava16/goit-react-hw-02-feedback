import React from "react";
import Data from "./DataStatistics";

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
    return this.state.good + this.state.neutral + this.state.bad;
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

        <Data
          good="good"
          countGood={good}
          neutral="neutral"
          countNeutral={neutral}
          bad="bad"
          countBad={bad}
          onButtonGood={this.handleIncrement("good")}
          onButtonNeutral={this.handleIncrement("neutral")}
          onButtonBad={this.handleIncrement("bad")}
          total={this.countTotalFeedback()}
          positiveFeedback={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Counter;
