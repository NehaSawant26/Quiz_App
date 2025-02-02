import React, {useState, useEffect} from "react";
import { Routes, Route } from 'react-router-dom';
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import Dashboard from "./Components/Dashboard";
import axios from "axios";

const App = () => {
  const [quizData, setQuizData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/quiz')
      .then(response => {
        setQuizData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  const handleAnswerSelect = (questionId, optionId) =>{
    setSelectedAnswers(prev =>({
      ...prev,
      [questionId] : optionId
    }));
  };

  const handleSubmit = ()=>{
    setIsSubmitted(true);
  }

  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Dashboard  />}  />
          <Route exact path="/quiz" element={<Quiz quizData={quizData} selectedAnswers={selectedAnswers} onAnswerSelect={handleAnswerSelect} onSubmit={handleSubmit} isSubmitted={isSubmitted}/>} />
          <Route exact path="/result" element={<Result quizData={quizData} selectedAnswers={selectedAnswers}/>} />
        </Routes>  
    </div>
  );
};

export default App;
