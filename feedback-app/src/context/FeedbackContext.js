import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This feedback is number 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This feedback is number 2",
      rating: 9,
    },
    {
      id: 3,
      text: "This feedback is number 3",
      rating: 8,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  function deleteFeedback(id) {
    if (window.confirm("Are you sure?")) {
      setFeedback(
        feedback.filter(function (item) {
          return item.id !== id;
        })
      );
    }
  }

  function updateFeedback(id, updItem) {
    setFeedback(
      feedback.map((item) => {
        return item.id === id ? { ...item, ...updItem } : item;
      })
    );
  }

  function editFeedback(item) {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  }

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
