import React from 'react';
import { User, Briefcase } from 'lucide-react';

interface RoleSelectionProps {
  onSelectRole: (role: 'recruiter' | 'employee') => void;
}

export default function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to NeuraHire</h1>
          <p className="text-xl text-gray-400">Choose your role to get started</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Recruiter Card */}
          <button
            onClick={() => onSelectRole('recruiter')}
            className="group bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-900/50 transition-colors">
                <Briefcase className="text-blue-400" size={32} />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2">Recruiter</h2>
              <p className="text-gray-400">
                Post jobs, manage candidates, and find the perfect match for your organization.
              </p>
            </div>
          </button>

          {/* Job Seeker Card */}
          <button
            onClick={() => onSelectRole('employee')}
            className="group bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-900/50 transition-colors">
                <User className="text-blue-400" size={32} />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2">Job Seeker</h2>
              <p className="text-gray-400">
                Create your profile, upload your resume, and find your dream job.
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
} 