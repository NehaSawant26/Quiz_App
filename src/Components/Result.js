import React from 'react';

const Result = ({ quizData, selectedAnswers }) => {    
const calculateScore = () => {
  let score = 0;
  if (!quizData?.questions || !selectedAnswers) return 0;
  quizData?.questions?.forEach((question) => {
    const selectedAnswerId = selectedAnswers[question.id];
    const correctOption = question.options.find(opt => opt.is_correct);
    if (selectedAnswerId === correctOption?.id) {
        score += 1;
    }
});
  return score;
};

const getTotalQuestions = () => {
  return quizData?.questions?.length || 0;
};

const getCorrectAnswer = (question) => {
  const correctOption = question.options.find(option => option.is_correct);
  return correctOption ? correctOption.description : '';
};

const getselectedAnswers = (question) => {
  if (!selectedAnswers || !question || !question.options) return 'Not answered';
  const selectedAnswerId = selectedAnswers[question.id];
  if (!selectedAnswerId) return 'Not answered';
  const selectedOption = question.options.find(opt => opt.id === selectedAnswerId);
  return selectedOption ? selectedOption.description : 'Not answered';
};

return (
  <div className="bg-gradient-to-l from-indigo-400 from-10% via-indigo-300 via-40% to-teal-100 to-70%">
      <div className="max-w-screen-2xl container mx-auto px-4 h-20 shadow-md fixed top-0 z-50 bg-teal-50">
          <img className="h-10 w-40 m-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdr7RUDD3acOkmlfFWGnkz7xOEbJbleJlMA&s" alt="logo" />
      </div>
      
      <div className="w-3/5 mx-auto pt-24 pb-10">
          <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-4xl font-bold text-center text-indigo-800 mb-8">Quiz Result</h2>
              <div className="text-2xl font-semibold text-center mb-8">
                  <p>Your Score: {calculateScore()} out of {getTotalQuestions()}</p>
                  <p className="text-lg mt-2">
                      ({((calculateScore() / getTotalQuestions()) * 100).toFixed(1)}%)
                  </p>
              </div>

              <div className="space-y-6">
                  {quizData?.questions?.map((question) => (
                      <div key={question.id} className="border-b pb-4">
                          <p className="font-semibold text-lg mb-2">
                             {question.description}
                          </p>
                          <p className="text-gray-700">
                              Your Answer: <span className={`font-medium ${selectedAnswers?.[question.id] === question.options.find(opt => opt.isCorrect)?.id ? 'text-red-600' : 'text-gray-700'} `}>
                                  {getselectedAnswers(question)}
                              </span>
                          </p>
                          <p className="text-gray-700">
                              Correct Answer: <span className="font-medium text-green-600">{getCorrectAnswer(question)}</span>
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  </div>

);
};
export default Result;