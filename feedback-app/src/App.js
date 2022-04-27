import Header from './components/Header'
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import {v4 as uuidv4} from 'uuid'

function App() {
  const [feedback,setFeedback]=useState(FeedbackData)

  function deleteFeedback(id){
    if(window.confirm('Are you sure?')){
      setFeedback(feedback.filter(function(item){
        return item.id!==id;
      }))
    }
  }

  function addFeedback(newFeedback){
    newFeedback.id=uuidv4();
    setFeedback([newFeedback,...feedback])
  }

  return  (
    <>
      <Header/>
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App