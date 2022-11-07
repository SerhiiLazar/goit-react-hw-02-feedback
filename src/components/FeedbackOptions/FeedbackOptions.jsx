import React from 'react';


const FeedbackOptions = ({options, onFeadback}) => {
  const onClickButton  = (feedbackType) => () => {
    onFeadback(feedbackType);
  };

  return (
    <ul>
    {Object.keys(options).map(feedbackType => {
      return (
        <li 
        key={feedbackType}>
        <button
        onClick={onClickButton(feedbackType)}
        >
        {feedbackType}
        </button>
        </li>
      )
    })}
    </ul>
  )
}

export default FeedbackOptions;
