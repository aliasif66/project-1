import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ExamInstructions from './pages/ExamInstructions';
import ExamActive from './pages/ExamActive';
import ExamResult from './pages/ExamResult';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/exam/:id/instructions" element={
              <ProtectedRoute>
                <ExamInstructions />
              </ProtectedRoute>
            } />
            
            <Route path="/exam/:id/active" element={
              <ProtectedRoute>
                <ExamActive />
              </ProtectedRoute>
            } />
            
            <Route path="/exam/:examId/result/:resultId" element={
              <ProtectedRoute>
                <ExamResult />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
