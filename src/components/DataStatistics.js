import React from "react";
import { Buttons } from "./Buttons";

const Data = ({
  total,
  positiveFeedback,
  onButtonGood,
  onButtonNeutral,
  onButtonBad,
  good,
  countGood,
  neutral,
  countNeutral,
  bad,
  countBad,
}) => (
  <>
    <Buttons
      onClickGood={onButtonGood}
      onClickNeutral={onButtonNeutral}
      onClickBad={onButtonBad}
    />

    <h1>Statistics</h1>
    <ul>
      <li>
        <p>
          {good}: {countGood}
        </p>
      </li>
      <li>
        <p>
          {neutral}: {countNeutral}
        </p>
      </li>
      <li>
        <p>
          {bad}: {countBad}
        </p>
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

export default Data;
