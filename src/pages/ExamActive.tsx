import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { exams } from '../data/exams';
import { useAuth } from '../context/AuthContext';
import { Clock, ChevronLeft, ChevronRight, Check, AlertCircle, Flag } from 'lucide-react';

const ExamActive = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const exam = exams.find((e) => e.id === id);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState((exam?.durationMinutes || 0) * 60);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  const calculateResults = useCallback(() => {
    if (!exam || !user) return;
    
    let score = 0;
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    exam.questions.forEach((q) => {
      const userAnswer = answers[q.id];
      if (!userAnswer) {
        unanswered++;
      } else if (userAnswer === q.correctOptionId) {
        score++;
        correct++;
      } else {
        wrong++;
      }
    });

    const percentage = Math.round((score / exam.questionCount) * 100);
    const passed = percentage >= 40;

    const result = {
      id: 'res_' + Math.random().toString(36).substr(2, 9),
      examId: exam.id,
      examTitle: exam.title,
      score,
      total: exam.questionCount,
      correct,
      wrong,
      unanswered,
      percentage,
      passed,
      date: new Date().toISOString(),
      answers, // Store answers for review
    };

    const allResultsStr = localStorage.getItem('examify_results');
    const allResults = allResultsStr ? JSON.parse(allResultsStr) : {};
    
    if (!allResults[user.id]) {
      allResults[user.id] = [];
    }
    allResults[user.id].push(result);
    localStorage.setItem('examify_results', JSON.stringify(allResults));

    navigate(`/exam/${exam.id}/result/${result.id}`, { replace: true });
  }, [exam, user, answers, navigate]);

  useEffect(() => {
    if (!exam) {
      navigate('/dashboard');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          calculateResults();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [exam, navigate, calculateResults]);

  if (!exam) return null;

  const currentQuestion = exam.questions[currentQuestionIndex];

  const handleOptionSelect = (optionId: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: optionId,
    });
  };

  const toggleMarkForReview = () => {
    setMarkedForReview({
      ...markedForReview,
      [currentQuestion.id]: !markedForReview[currentQuestion.id],
    });
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isAnswered = (qId: string) => !!answers[qId];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Bar */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div>
            <h1 className="font-bold text-gray-900 hidden sm:block">{exam.title}</h1>
            <h1 className="font-bold text-gray-900 sm:hidden truncate max-w-[150px]">{exam.subject}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`flex items-center font-mono font-bold text-lg px-3 py-1 rounded-md ${timeLeft < 60 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-700'}`}>
              <Clock className="w-5 h-5 mr-2" />
              {formatTime(timeLeft)}
            </div>
            <button
              onClick={() => setShowSubmitConfirm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md font-medium text-sm transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6">
        
        {/* Left Side - Question */}
        <div className="flex-grow flex flex-col">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex-grow p-6 sm:p-8 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Question {currentQuestionIndex + 1} of {exam.questionCount}
              </span>
              <button
                onClick={toggleMarkForReview}
                className={`flex items-center text-sm font-medium px-3 py-1 rounded-full transition-colors ${
                  markedForReview[currentQuestion.id] 
                    ? 'bg-yellow-100 text-yellow-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Flag className="w-4 h-4 mr-1.5" />
                {markedForReview[currentQuestion.id] ? 'Marked for Review' : 'Mark for Review'}
              </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-8">
              {currentQuestion.text}
            </h2>

            <div className="space-y-3 mb-8 flex-grow">
              {currentQuestion.options.map((option) => {
                const isSelected = answers[currentQuestion.id] === option.id;
                return (
                  <label
                    key={option.id}
                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      isSelected 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 flex-shrink-0 ${
                      isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-400'
                    }`}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <input
                      type="radio"
                      name={`question-${currentQuestion.id}`}
                      value={option.id}
                      checked={isSelected}
                      onChange={() => handleOptionSelect(option.id)}
                      className="sr-only"
                    />
                    <span className="text-gray-800 text-lg">{option.text}</span>
                  </label>
                );
              })}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Previous
              </button>
              
              <button
                onClick={() => {
                  if (currentQuestionIndex < exam.questionCount - 1) {
                    setCurrentQuestionIndex(prev => prev + 1);
                  } else {
                    setShowSubmitConfirm(true);
                  }
                }}
                className={`flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  currentQuestionIndex === exam.questionCount - 1
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                } transition-colors`}
              >
                {currentQuestionIndex === exam.questionCount - 1 ? 'Finish' : 'Next'} <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Question Navigator */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:sticky lg:top-24">
            <h3 className="font-semibold text-gray-900 mb-4">Question Navigator</h3>
            
            <div className="grid grid-cols-5 gap-2 mb-6">
              {exam.questions.map((q, idx) => {
                let btnClass = "w-10 h-10 rounded-md font-medium text-sm flex items-center justify-center border-2 transition-colors";
                
                if (idx === currentQuestionIndex) {
                  btnClass += " border-blue-600 text-blue-700 bg-blue-50 scale-110";
                } else if (markedForReview[q.id]) {
                  btnClass += " border-yellow-400 bg-yellow-100 text-yellow-800";
                } else if (isAnswered(q.id)) {
                  btnClass += " border-green-500 bg-green-50 text-green-700";
                } else {
                  btnClass += " border-gray-200 text-gray-500 hover:bg-gray-50";
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={btnClass}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center"><div className="w-4 h-4 rounded bg-green-50 border-2 border-green-500 mr-2"></div> Answered</div>
              <div className="flex items-center"><div className="w-4 h-4 rounded bg-yellow-100 border-2 border-yellow-400 mr-2"></div> Marked for Review</div>
              <div className="flex items-center"><div className="w-4 h-4 rounded border-2 border-gray-200 mr-2"></div> Not Answered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4 mx-auto">
              <AlertCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 mb-2">Submit Exam?</h3>
            <p className="text-center text-gray-500 mb-6">
              You have answered {Object.keys(answers).length} out of {exam.questionCount} questions. 
              Are you sure you want to submit your exam now? You cannot undo this action.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={calculateResults}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamActive;
