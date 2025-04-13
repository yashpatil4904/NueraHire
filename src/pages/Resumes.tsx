import React, { useState } from 'react';
import { Upload, User, Check, X, Star, Search, Filter, FileText, MapPin, Briefcase, GraduationCap, Download, Eye, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const candidates = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Senior Software Engineer',
    experience: '5 years',
    skills: ['React', 'TypeScript', 'Node.js'],
    status: 'Shortlisted',
    matchScore: 92,
  },
  {
    id: 2,
    name: 'Arjun Patel',
    role: 'Product Manager',
    experience: '7 years',
    skills: ['Product Strategy', 'Agile', 'User Research'],
    status: 'Interviewing',
    matchScore: 88,
  },
  {
    id: 3,
    name: 'Ananya Reddy',
    role: 'UX Designer',
    experience: '3 years',
    skills: ['Figma', 'User Research', 'Prototyping'],
    status: 'New',
    matchScore: 85,
  },
  {
    id: 4,
    name: 'Rahul Gupta',
    role: 'Data Scientist',
    experience: '4 years',
    skills: ['Python', 'Machine Learning', 'SQL'],
    status: 'Rejected',
    matchScore: 65,
  },
];

export default function Resumes() {
  const [isDragging, setIsDragging] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop logic here
    console.log('Files dropped:', e.dataTransfer.files);
  };

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'shortlisted', label: 'Shortlisted' },
    { id: 'under-review', label: 'Under Review' },
    { id: 'rejected', label: 'Rejected' },
  ];

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Shortlisted':
        return 'bg-green-900/30 text-green-400';
      case 'Interviewing':
        return 'bg-blue-900/30 text-blue-400';
      case 'New':
        return 'bg-blue-900/30 text-blue-400';
      case 'Rejected':
        return 'bg-red-900/30 text-red-400';
      default:
        return 'bg-gray-900/30 text-gray-400';
    }
  };

  const filteredResumes = candidates.filter(candidate => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'shortlisted') return candidate.status === 'Shortlisted';
    if (selectedFilter === 'under-review') return candidate.status === 'Interviewing';
    if (selectedFilter === 'rejected') return candidate.status === 'Rejected';
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Candidate Resumes</h1>
          <p className="text-gray-400">View and manage candidate resumes for your job openings.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Upload size={20} />
          <span>Upload Resumes</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search resumes..."
            className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="text-gray-400" size={18} />
          <div className="flex bg-gray-800 rounded-lg p-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`px-3 py-1 rounded-md text-sm ${
                  selectedFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => handleFilterChange(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div 
          className={clsx(
            "border-2 border-dashed rounded-lg p-8 text-center transition-colors",
            isDragging ? "border-blue-500 bg-blue-900/20" : "border-gray-700"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="mx-auto w-16 h-16 bg-blue-900/30 flex items-center justify-center rounded-full mb-4">
            <Upload className="text-blue-400" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Upload Multiple Resumes</h3>
          <p className="text-gray-400 mb-4">Drop your resume files here or click to browse</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Select Files
          </button>
        </div>
      </div>

      {/* Candidates List */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Recent Candidates</h3>
        </div>
        <div className="divide-y divide-gray-700">
          {filteredResumes.map((candidate, index) => (
            <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <User className="text-gray-300" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">{candidate.name}</h4>
                  <p className="text-sm text-gray-400">{candidate.role}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm text-gray-400">{candidate.experience}</span>
                    <span className="text-gray-600">•</span>
                    <div className="flex items-center space-x-1">
                      {candidate.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  {candidate.status === 'Shortlisted' && (
                    <span className="flex items-center space-x-1 text-green-400">
                      <Check size={16} />
                      <span>Shortlisted</span>
                    </span>
                  )}
                  {candidate.status === 'Interviewing' && (
                    <span className="flex items-center space-x-1 text-blue-400">
                      <Star size={16} />
                      <span>Interviewing</span>
                    </span>
                  )}
                  {candidate.status === 'New' && (
                    <span className="flex items-center space-x-1 text-blue-400">
                      <Star size={16} />
                      <span>New</span>
                    </span>
                  )}
                  {candidate.status === 'Rejected' && (
                    <span className="flex items-center space-x-1 text-red-400">
                      <X size={16} />
                      <span>Rejected</span>
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-400">Match Score</div>
                  <div className={clsx(
                    'text-sm font-medium',
                    candidate.matchScore >= 90 ? 'text-green-400' :
                    candidate.matchScore >= 80 ? 'text-blue-400' : 'text-red-400'
                  )}>
                    {candidate.matchScore}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}