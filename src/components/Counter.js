import React from "react";
import Buttons from "./Buttons";
import Data from "./DataStatistics";

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleIncrementNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleIncrementBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {};
  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div className="Conteiner">
        <p>Please leave feedback</p>
        <Buttons
          onHandleIncrementGood={this.handleIncrementGood}
          onHandleIncrementNeutral={this.handleIncrementNeutral}
          onHandleIncrementBad={this.handleIncrementBad}
        />

        <h1>Statistics</h1>
        <Data
          onStateGood={this.state.good}
          onStateNeutral={this.state.neutral}
          onStateBad={this.state.bad}
        />
      </div>
    );
  }
}

export default Counter;
