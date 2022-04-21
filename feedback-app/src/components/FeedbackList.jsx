import React from "react";
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback}){
  if(!feedback || feedback.length===0){
    return (<p>No Feedback Yet!</p>)
  }
  return (
    <div className="feedback-list">
      {feedback.map(function(item){
        return (
          <FeedbackItem key={item.id} item={item}/>
        )
      })}
    </div>
  )
}

FeedbackList.propTypes={
  feedback: PropTypes.array,
}

export default FeedbackList