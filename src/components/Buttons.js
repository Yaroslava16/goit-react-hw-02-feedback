import React from "react";
import { Component } from "react";

export class Buttons extends Component {
  render() {
    const { onClickGood, onClickNeutral, onClickBad } = this.props;
    return (
      <>
        <button
          type="button"
          onClick={() => {
            onClickGood();
          }}
        >
          Good
        </button>
        <button
          type="button"
          onClick={() => {
            onClickNeutral();
          }}
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={() => {
            onClickBad();
          }}
        >
          Bad
        </button>
      </>
    );
  }
}
