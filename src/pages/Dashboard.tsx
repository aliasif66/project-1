import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { exams, Exam } from '../data/exams';
import { useNavigate } from 'react-router-dom';
import { Clock, FileText, CheckCircle, BarChart3, Calendar } from 'lucide-react';

interface Result {
  id: string;
  examId: string;
  examTitle: string;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  date: string;
}

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    if (user) {
      const allResultsStr = localStorage.getItem('examify_results');
      const allResults = allResultsStr ? JSON.parse(allResultsStr) : {};
      setResults(allResults[user.id] || []);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.name}!</h1>
          <p className="mt-2 text-gray-600">Ready to test your knowledge today?</p>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <FileText className="mr-2 h-6 w-6 text-blue-600" /> Available Exams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam) => (
              <div key={exam.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {exam.subject}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{exam.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <FileText className="mr-1.5 h-4 w-4" /> {exam.questionCount} Questions
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Clock className="mr-1.5 h-4 w-4" /> {exam.durationMinutes} Minutes
                  </div>
                  <button
                    onClick={() => navigate(`/exam/${exam.id}/instructions`)}
                    className="w-full bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white py-2 px-4 border border-blue-200 hover:border-transparent rounded-md text-sm font-medium transition-colors"
                  >
                    Start Exam
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <BarChart3 className="mr-2 h-6 w-6 text-blue-600" /> My Results
          </h2>
          
          {results.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
                <BarChart3 className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No results yet</h3>
              <p className="text-gray-500">Take your first exam to see your performance history.</p>
            </div>
          ) : (
            <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((result) => (
                      <tr key={result.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{result.examTitle}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                          <Calendar className="mr-1.5 h-4 w-4 text-gray-400" />
                          {new Date(result.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex items-center">
                            <span className="font-semibold">{result.score}/{result.total}</span>
                            <span className="ml-2 text-gray-500">({result.percentage}%)</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {result.passed ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <CheckCircle className="mr-1 h-3 w-3" /> Pass
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              Fail
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
