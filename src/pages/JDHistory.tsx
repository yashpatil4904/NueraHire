import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  FileText, 
  MapPin, 
  Briefcase, 
  Calendar, 
  Users, 
  Download, 
  Eye,
  Trash2,
  Edit,
  Archive,
  Clock,
  CheckCircle,
  XCircle,
  ArrowRight,
  Plus,
  X
} from 'lucide-react';
import clsx from 'clsx';

const jdHistory = [
  {
    id: 1,
    title: 'Senior Software Engineer at TechMahindra',
    department: 'Engineering',
    createdAt: '2023-05-15',
    totalCandidates: 45,
    status: 'active',
    reusedCount: 3,
  },
  {
    id: 2,
    title: 'Product Manager at Infosys',
    department: 'Product',
    createdAt: '2023-04-20',
    totalCandidates: 32,
    status: 'active',
    reusedCount: 2,
  },
  {
    id: 3,
    title: 'UX Designer at Wipro',
    department: 'Design',
    createdAt: '2023-03-10',
    totalCandidates: 28,
    status: 'closed',
    reusedCount: 1,
  },
  {
    id: 4,
    title: 'Data Scientist at TCS',
    department: 'Data Science',
    createdAt: '2023-02-05',
    totalCandidates: 36,
    status: 'active',
    reusedCount: 4,
  },
];

const suggestedJDs = [
  {
    id: 1,
    title: 'Frontend Developer at HCL',
    department: 'Engineering',
    matchScore: 85,
  },
  {
    id: 2,
    title: 'Backend Developer at Cognizant',
    department: 'Engineering',
    matchScore: 78,
  },
];

export default function JDHistory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newJD, setNewJD] = useState({
    title: '',
    description: '',
    department: '',
    location: '',
    type: 'Full-time',
    experience: '',
    skills: '',
    salary: '',
  });

  const filteredJDs = jdHistory.filter(jd => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'active') return jd.status === 'active';
    if (selectedFilter === 'closed') return jd.status === 'closed';
    return true;
  });

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-900/30 text-green-400';
      case 'closed':
        return 'bg-red-900/30 text-red-400';
      default:
        return 'bg-gray-900/30 text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle size={16} className="text-green-400" />;
      case 'closed':
        return <XCircle size={16} className="text-red-400" />;
      default:
        return null;
    }
  };

  const handleCreateJD = () => {
    // Here you would typically make an API call to create the JD
    console.log('Creating new JD:', newJD);
    setIsCreateModalOpen(false);
    // Reset form
    setNewJD({
      title: '',
      description: '',
      department: '',
      location: '',
      type: 'Full-time',
      experience: '',
      skills: '',
      salary: '',
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Job Descriptions</h1>
          <p className="text-gray-400">Manage and track your job postings</p>
        </div>
        <button 
          onClick={() => setIsCreateModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus size={16} />
          Create New JD
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search job descriptions..."
            className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="text-gray-400" size={18} />
          <div className="flex bg-gray-800 rounded-lg p-1">
            {['all', 'active', 'closed'].map((filter) => (
              <button
                key={filter}
                className={`px-3 py-1 rounded-md text-sm ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Create JD Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Create New Job Description</h2>
              <button 
                onClick={() => setIsCreateModalOpen(false)}
                className="text-gray-400 hover:text-gray-300"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  value={newJD.title}
                  onChange={(e) => setNewJD({ ...newJD, title: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Senior Frontend Developer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Department
                </label>
                <input
                  type="text"
                  value={newJD.department}
                  onChange={(e) => setNewJD({ ...newJD, department: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Engineering"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Job Description
                </label>
                <textarea
                  value={newJD.description}
                  onChange={(e) => setNewJD({ ...newJD, description: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="Enter detailed job description..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={newJD.location}
                    onChange={(e) => setNewJD({ ...newJD, location: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Bangalore, India"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Job Type
                  </label>
                  <select
                    value={newJD.type}
                    onChange={(e) => setNewJD({ ...newJD, type: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Experience Required
                  </label>
                  <input
                    type="text"
                    value={newJD.experience}
                    onChange={(e) => setNewJD({ ...newJD, experience: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 5-8 years"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    value={newJD.salary}
                    onChange={(e) => setNewJD({ ...newJD, salary: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., ₹15L - ₹25L"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Required Skills
                </label>
                <input
                  type="text"
                  value={newJD.skills}
                  onChange={(e) => setNewJD({ ...newJD, skills: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., React, TypeScript, Node.js (comma separated)"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateJD}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Create Job Description
              </button>
            </div>
          </div>
        </div>
      )}

      {/* JD History Table */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Job Descriptions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Job Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Applicants
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredJDs.map((jd) => (
                <tr key={jd.id} className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center">
                        <FileText className="text-blue-400" size={18} />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-white">{jd.title}</h3>
                        <p className="text-gray-400 text-sm">{jd.department}</p>
                        <div className="flex items-center mt-1 text-gray-400 text-sm">
                          <MapPin size={14} className="mr-1" />
                          <span>Created {jd.createdAt}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-300">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1 text-gray-400" />
                        <span>Total candidates: {jd.totalCandidates}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <div className="flex items-center text-gray-300">
                        <Users size={14} className="mr-1 text-gray-400" />
                        <span>{jd.totalCandidates} candidates</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(jd.status)} flex items-center`}>
                      {getStatusIcon(jd.status)}
                      <span className="ml-1">{jd.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-1.5 bg-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-gray-600 transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="p-1.5 bg-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-gray-600 transition-colors">
                        <Edit size={16} />
                      </button>
                      <button className="p-1.5 bg-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-gray-600 transition-colors">
                        <Download size={16} />
                      </button>
                      <button className="p-1.5 bg-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-gray-600 transition-colors">
                        <Archive size={16} />
                      </button>
                      <button className="p-1.5 bg-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-gray-600 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reuse Suggestions */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Suggested for Reuse</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {suggestedJDs.map((jd, index) => (
            <div key={index} className="p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 cursor-pointer border border-gray-600">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <FileText className="text-blue-400" size={16} />
                </div>
                <span className="text-sm text-gray-400">3 months ago</span>
              </div>
              <h4 className="font-medium text-white">{jd.title}</h4>
              <p className="text-sm text-gray-400">{jd.department}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-gray-400">{jd.matchScore}% success rate</span>
                <button className="text-blue-400 hover:text-blue-300">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}