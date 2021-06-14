import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Buttons.module.css';

export class Buttons extends Component {
  render() {
    const { onClickGood, onClickNeutral, onClickBad } = this.props;
    return (
      <div className={styles.btnConteiner}>
        <button
          className={styles.btnG}
          type="button"
          onClick={() => {
            onClickGood();
          }}
        >
          Good
        </button>
        <button
          className={styles.btnN}
          type="button"
          onClick={() => {
            onClickNeutral();
          }}
        >
          Neutral
        </button>
        <button
          className={styles.btnB}
          type="button"
          onClick={() => {
            onClickBad();
          }}
        >
          Bad
        </button>
      </div>
    );
  }
}

Buttons.propTypes = {
  onClickGood: PropTypes.func.isRequired,
  onClickNeutral: PropTypes.func.isRequired,
  onClickBad: PropTypes.func.isRequired,
};
