import React from 'react';

const Statistics = ({ good, neutral, bad, totalFeedback, positivePersent }) => {
  return (
    <ul>
      <li>
        <span>Good:</span>
        <span>{good}</span>
      </li>
      <li>
        <span>Neutral:</span>
        <span>{neutral}</span>
      </li>
      <li>
        <span>Bad:</span>
        <span>{bad}</span>
      </li>
      <li>
        <span>Total:</span>
        <span>{totalFeedback}</span>
      </li>
      <li>
        <span>Positive feedback:</span>
        <span>{positivePersent}%</span>
      </li>
    </ul>
  );
};

export default Statistics;
