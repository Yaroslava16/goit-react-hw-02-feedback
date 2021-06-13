import React from "react";
import { Component } from "react";

export class Statistics extends Component {
  render() {
    const { total, positiveFeedback, countGood, countNeutral, countBad } =
      this.props;
    return (
      <>
        <ul>
          <li>
            <p>Good: {countGood}</p>
          </li>
          <li>
            <p>Neutral: {countNeutral}</p>
          </li>
          <li>
            <p>Bad: {countBad}</p>
          </li>

          <li>
            <p>
              Total: <span>{total}</span>
            </p>
          </li>
          <li>
            <p>
              Positive feedback: <span>{positiveFeedback} %</span>
            </p>
          </li>
        </ul>
      </>
    );
  }
}
