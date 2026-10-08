import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { exams } from '../data/exams';
import { ArrowLeft, Clock, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

const ExamInstructions = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const exam = exams.find((e) => e.id === id);

  if (!exam) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <AlertTriangle className="h-16 w-16 text-yellow-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Exam Not Found</h2>
        <p className="text-gray-600 mb-6">The exam you are looking for does not exist.</p>
        <Link to="/dashboard" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
        </Link>
        
        <div className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100">
          <div className="bg-blue-600 px-6 py-8 text-white text-center">
            <h1 className="text-3xl font-bold mb-2">{exam.title}</h1>
            <p className="text-blue-100">{exam.subject} Assessment</p>
          </div>
          
          <div className="p-6 sm:p-8 text-gray-700">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Questions</p>
                  <p className="font-semibold text-lg">{exam.questionCount}</p>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold text-lg">{exam.durationMinutes} Minutes</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Instructions</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>The test contains {exam.questionCount} multiple-choice questions.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>You have {exam.durationMinutes} minutes to complete the test.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>The timer will start automatically once you click "Begin Exam".</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>You can navigate between questions and change your answers before submitting.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>The exam will automatically submit when the timer reaches zero.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>You must score at least 40% to pass.</span>
              </li>
            </ul>

            <div className="flex justify-center">
              <button
                onClick={() => navigate(`/exam/${exam.id}/active`)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg shadow-md transition-transform hover:-translate-y-0.5 text-lg"
              >
                Begin Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamInstructions;
