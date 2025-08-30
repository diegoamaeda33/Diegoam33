
import React, { useState } from 'react';
import Header from './components/Header';
import LeadGenerationForm from './components/LeadGenerationForm';
import TeamDashboard from './components/TeamDashboard';
import PasswordModal from './components/PasswordModal';
import type { View } from './types';

const TEAM_PASSWORD = 'RAPID2024'; // Hardcoded password for team access

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('lead');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleNavigateToQuote = () => {
    if (isAuthenticated) {
      setActiveView('quote');
    } else {
      setPasswordError(null); // Clear previous errors before showing
      setShowPasswordModal(true);
    }
  };
  
  const handlePasswordSubmit = (password: string) => {
    if (password === TEAM_PASSWORD) {
      setIsAuthenticated(true);
      setShowPasswordModal(false);
      setActiveView('quote');
      setPasswordError(null);
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Header 
        activeView={activeView} 
        setActiveView={(view) => setActiveView(view)}
        onNavigateToQuote={handleNavigateToQuote}
      />
      <main className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto w-full flex-grow">
        {activeView === 'lead' && <LeadGenerationForm />}
        {activeView === 'quote' && isAuthenticated && <TeamDashboard />}
        {activeView === 'quote' && !isAuthenticated && (
            <div className="text-center p-10 bg-white rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-bold text-slate-700">Access Denied</h2>
                <p className="text-slate-500 mt-2">Please use the "Team Access" button and enter the password to view this page.</p>
                 <button 
                    onClick={handleNavigateToQuote}
                    className="mt-6 bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
                >
                    Enter Password
                </button>
            </div>
        )}
      </main>
      <footer className="text-center p-4 text-slate-500 text-sm border-t bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
            <p className="text-xs sm:text-sm">&copy; 2024 RapidQuote Commercial Tool. All rights reserved.</p>
            <div className="flex items-center">
                <button 
                    onClick={handleNavigateToQuote}
                    className="font-semibold hover:text-indigo-600 hover:underline transition-colors text-xs sm:text-sm"
                >
                    Team Access
                </button>
            </div>
        </div>
      </footer>
      
      {showPasswordModal && (
        <PasswordModal 
            onClose={() => setShowPasswordModal(false)}
            onSubmit={handlePasswordSubmit}
            error={passwordError}
        />
      )}
    </div>
  );
};

export default App;
