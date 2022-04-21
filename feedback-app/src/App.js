import Header from './components/Header'
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'

function App() {
  const [feedback,setFeedback]=useState(FeedbackData)

  function deleteFeedback(id){
    if(window.confirm('Are you sure?')){
      setFeedback(feedback.filter(function(item){
        return item.id!==id;
      }))
    }
  }

  return  (
    <>
      <Header/>
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App