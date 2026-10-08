import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { exams } from '../data/exams';
import { CheckCircle, XCircle, ArrowLeft, RotateCcw, Award, Check, X } from 'lucide-react';

const ExamResult = () => {
  const { examId, resultId } = useParams<{ examId: string, resultId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [result, setResult] = useState<any>(null);
  const exam = exams.find(e => e.id === examId);

  useEffect(() => {
    if (user && resultId) {
      const allResultsStr = localStorage.getItem('examify_results');
      if (allResultsStr) {
        const allResults = JSON.parse(allResultsStr);
        const userResults = allResults[user.id] || [];
        const foundResult = userResults.find((r: any) => r.id === resultId);
        if (foundResult) {
          setResult(foundResult);
        } else {
          navigate('/dashboard');
        }
      }
    }
  }, [user, resultId, navigate]);

  if (!exam || !result) return null;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link to="/dashboard" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
          </Link>
          <button 
            onClick={() => navigate(`/exam/${exam.id}/instructions`)}
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            <RotateCcw className="h-4 w-4 mr-1" /> Retake Exam
          </button>
        </div>

        {/* Summary Card */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-2xl overflow-hidden mb-8">
          <div className={`p-8 text-center text-white ${result.passed ? 'bg-green-600' : 'bg-red-500'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-4 backdrop-blur-sm">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              {result.passed ? 'Congratulations!' : 'Better luck next time!'}
            </h1>
            <p className="text-lg opacity-90">
              You scored {result.percentage}% in {exam.title}
            </p>
          </div>

          <div className="p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-gray-500 text-sm mb-1">Total Score</p>
              <p className="text-2xl font-bold text-gray-900">{result.score} / {result.total}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Correct</p>
              <p className="text-2xl font-bold text-green-600">{result.correct}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Incorrect</p>
              <p className="text-2xl font-bold text-red-600">{result.wrong}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Unanswered</p>
              <p className="text-2xl font-bold text-yellow-600">{result.unanswered}</p>
            </div>
          </div>
        </div>

        {/* Detailed Review */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Review</h2>
          
          {exam.questions.map((q, idx) => {
            const userAnswerId = result.answers[q.id];
            const isCorrect = userAnswerId === q.correctOptionId;
            const isUnanswered = !userAnswerId;

            return (
              <div key={q.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    {isCorrect ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : isUnanswered ? (
                      <div className="h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center text-xs text-gray-500">-</div>
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500" />
                    )}
                  </div>
                  <div className="ml-4 w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      <span className="text-gray-500 mr-2">{idx + 1}.</span> {q.text}
                    </h3>
                    
                    <div className="space-y-2">
                      {q.options.map((option) => {
                        const isSelected = userAnswerId === option.id;
                        const isCorrectOption = q.correctOptionId === option.id;
                        
                        let optionClass = "p-3 rounded-lg border text-sm flex justify-between items-center ";
                        
                        if (isCorrectOption && isSelected) {
                          optionClass += "bg-green-50 border-green-200 text-green-800";
                        } else if (isCorrectOption && !isSelected) {
                          optionClass += "bg-green-50 border-green-200 text-green-800"; // Always highlight correct
                        } else if (isSelected && !isCorrectOption) {
                          optionClass += "bg-red-50 border-red-200 text-red-800";
                        } else {
                          optionClass += "bg-gray-50 border-gray-200 text-gray-600";
                        }

                        return (
                          <div key={option.id} className={optionClass}>
                            <span>{option.text}</span>
                            {isCorrectOption && <Check className="h-4 w-4 text-green-600" />}
                            {isSelected && !isCorrectOption && <X className="h-4 w-4 text-red-600" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/dashboard"
            className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-colors"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExamResult;
