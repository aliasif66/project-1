import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CheckCircle, Clock, Award, ChevronRight } from 'lucide-react';

const Landing = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Master your skills with</span>
              <span className="block text-blue-600">Examify Platform</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              The ultimate online examination platform. Test your knowledge across various subjects, track your progress, and achieve your goals with our seamless testing experience.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
              <Link
                to="/signup"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 sm:w-auto"
              >
                Get Started
              </Link>
              <Link
                to="/signin"
                className="mt-3 w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 sm:mt-0 sm:w-auto transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* How it works section */}
        <div className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Process</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                How it works
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Four simple steps to start assessing your knowledge.
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                
                <div className="relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 font-bold text-xl">1</div>
                  <h3 className="text-lg font-medium text-gray-900">Sign Up</h3>
                  <p className="mt-2 text-gray-500">Create your free account in seconds to access all exams.</p>
                </div>

                <div className="hidden md:block absolute top-1/2 left-[20%] right-[80%] border-t-2 border-dashed border-gray-300 -translate-y-1/2 z-0 w-[10%]"></div>

                <div className="relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><CheckCircle className="w-6 h-6" /></div>
                  <h3 className="text-lg font-medium text-gray-900">Choose Exam</h3>
                  <p className="mt-2 text-gray-500">Browse our library and select a subject you want to test.</p>
                </div>

                <div className="hidden md:block absolute top-1/2 left-[45%] right-[55%] border-t-2 border-dashed border-gray-300 -translate-y-1/2 z-0 w-[10%]"></div>

                <div className="relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><Clock className="w-6 h-6" /></div>
                  <h3 className="text-lg font-medium text-gray-900">Take the Test</h3>
                  <p className="mt-2 text-gray-500">Answer multiple-choice questions within the time limit.</p>
                </div>

                <div className="hidden md:block absolute top-1/2 left-[70%] right-[30%] border-t-2 border-dashed border-gray-300 -translate-y-1/2 z-0 w-[10%]"></div>

                <div className="relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><Award className="w-6 h-6" /></div>
                  <h3 className="text-lg font-medium text-gray-900">See Results</h3>
                  <p className="mt-2 text-gray-500">Get instant feedback, detailed reviews, and your final score.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white py-8 border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Examify Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landing;
