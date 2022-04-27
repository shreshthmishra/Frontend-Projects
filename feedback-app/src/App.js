import Header from './components/Header'
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
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
    <Router>
      <Header/>
      <div className="container">
        <Routes>
          <Route exact path ="/" element={
            <>
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats feedback={feedback}/>
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </>
          }>
          </Route>
          <Route path='/about' element={<AboutPage/>} />
        </Routes>
      </div>
      <AboutIconLink/>
    </Router>
  )
}

export default App