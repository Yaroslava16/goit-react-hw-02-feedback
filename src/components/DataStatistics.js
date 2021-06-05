import React from "react";

const Data = ({ onStateGood, onStateNeutral, onStateBad }) => (
  <>
    <ul>
      <li>
        <p>
          Good: <span>{onStateGood}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral: <span>{onStateNeutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad: <span>{onStateBad}</span>
        </p>
      </li>
    </ul>
  </>
);

export default Data;
