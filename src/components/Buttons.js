import React from "react";

const Buttons = ({
  onHandleIncrementGood,
  onHandleIncrementNeutral,
  onHandleIncrementBad,
}) => (
  <>
    <ul>
      <li>
        <button type="button" onClick={onHandleIncrementGood}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={onHandleIncrementNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={onHandleIncrementBad}>
          Bad
        </button>
      </li>
    </ul>
  </>
);

export default Buttons;
