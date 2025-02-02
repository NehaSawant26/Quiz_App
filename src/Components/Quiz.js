import React, { useState } from 'react';
import { Link } from "react-router-dom"

const Quiz = ({ quizData, onAnswerSelect, selectedAnswers, onSubmit, isSubmitted }) => {

  const handleClick = (questionId, optionId) => {
    onAnswerSelect(questionId, optionId);
  }

  const handleSubmit = () => {
    onSubmit();
  }
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4  h-20 shadow-md fixed top-0 z-50 bg-teal-50">
        <img className="h-10 w-40 m-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdr7RUDD3acOkmlfFWGnkz7xOEbJbleJlMA&s" />
      </div>
      <div className="bg-gradient-to-l from-indigo-400 from-10% via-indigo-300 via-40% to-teal-100 to-70% ">
        <div className="mt-16 ml-80 w-3/5">
          <div className="p-5">
            <div className="text-2xl font-semibold p-5 shadow-md shadow-black">
              <p >Title : {quizData.title}</p>
              <p >Topic : {quizData.topic}</p>
            </div>
            {
              quizData?.questions?.map((question) => {
                return (
                  <div key={question.id} className="mt-9 text-xl font-medium">
                    <h2>{question.description}</h2>
                    {
                      question?.options?.map((option) => {
                        return (
                          <ul key={option.id} className="mt-5 ml-14 text-lg font-normal">
                            {!option || !option.id ? (
                              <div>Loading option...</div>
                            ) : (
                              <li className={`h-14 border-2 border-black rounded-md w-72 text-center content-center cursor-pointer ${selectedAnswers?.[question.id] === option.id ? 'bg-green-500 text-white' : 'hover:bg-gray-100'} ${isSubmitted ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => handleClick(question.id, option.id)}>{option.description}</li>
                            )
                            }
                          </ul>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>

          <div className="flex justify-center mt-8">
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                className="bg-indigo-600 mb-5 text-white text-lg font-semibold px-10 py-4 rounded-lg hover:bg-indigo-800 transition-colors duration-200">Submit Quiz</button>
            ) : (
              <Link
                to="/result"
                className="bg-green-600 mb-5 text-white text-lg font-semibold px-10 py-4 rounded-lg hover:bg-green-800 transition-colors duration-200">View Results
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
