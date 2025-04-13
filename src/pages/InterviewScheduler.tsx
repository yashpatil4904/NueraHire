import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  MapPin, 
  Video, 
  Phone, 
  CheckCircle, 
  XCircle, 
  Clock as ClockIcon,
  Plus,
  Search,
  Filter
} from 'lucide-react';
import clsx from 'clsx';

const interviews = [
  {
    id: 1,
    candidate: {
      name: 'Priya Sharma',
      role: 'Senior Software Engineer',
      avatar: null,
    },
    job: {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
    },
    date: '2023-06-15',
    time: '10:00 AM',
    duration: '60 minutes',
    type: 'Video Call',
    status: 'Scheduled',
    location: 'Zoom Meeting',
  },
  {
    id: 2,
    candidate: {
      name: 'Rahul Patel',
      role: 'Product Manager',
      avatar: null,
    },
    job: {
      title: 'Product Manager',
      company: 'Innovation Labs',
    },
    date: '2023-06-16',
    time: '2:00 PM',
    duration: '45 minutes',
    type: 'In-Person',
    status: 'Scheduled',
    location: 'Office - Room 305',
  },
  {
    id: 3,
    candidate: {
      name: 'Ananya Reddy',
      role: 'UI Developer',
      avatar: null,
    },
    job: {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
    },
    date: '2023-06-14',
    time: '11:30 AM',
    duration: '60 minutes',
    type: 'Phone Call',
    status: 'Completed',
    location: 'Phone Call',
  },
  {
    id: 4,
    candidate: {
      name: 'Vikram Singh',
      role: 'Data Scientist',
      avatar: null,
    },
    job: {
      title: 'Data Scientist',
      company: 'AI Analytics',
    },
    date: '2023-06-17',
    time: '3:30 PM',
    duration: '45 minutes',
    type: 'Video Call',
    status: 'Scheduled',
    location: 'Google Meet',
  },
];

export default function InterviewScheduler() {
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('week');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'scheduled', label: 'Scheduled' },
    { id: 'completed', label: 'Completed' },
    { id: 'cancelled', label: 'Cancelled' },
  ];

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-blue-900/30 text-blue-400';
      case 'Completed':
        return 'bg-green-900/30 text-green-400';
      case 'Cancelled':
        return 'bg-red-900/30 text-red-400';
      default:
        return 'bg-gray-900/30 text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Scheduled':
        return <ClockIcon size={16} className="text-blue-400" />;
      case 'Completed':
        return <CheckCircle size={16} className="text-green-400" />;
      case 'Cancelled':
        return <XCircle size={16} className="text-red-400" />;
      default:
        return null;
    }
  };

  const getInterviewTypeIcon = (type: string) => {
    switch (type) {
      case 'Video Call':
        return <Video size={16} className="text-blue-400" />;
      case 'Phone Call':
        return <Phone size={16} className="text-green-400" />;
      case 'In-Person':
        return <MapPin size={16} className="text-purple-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Interview Scheduler</h1>
          <p className="text-gray-400">Schedule and manage candidate interviews.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Plus size={20} />
          <span>Schedule Interview</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search interviews..."
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

      {/* Interviews List */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Upcoming Interviews</h3>
        </div>
        <div className="divide-y divide-gray-700">
          {interviews.map((interview) => (
            <div key={interview.id} className="p-6 hover:bg-gray-700/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <User className="text-gray-300" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-lg">{interview.candidate.name}</h3>
                    <p className="text-gray-400">{interview.candidate.role}</p>
                    <p className="text-gray-400 text-sm">{interview.job.title} at {interview.job.company}</p>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex flex-col items-end">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(interview.status)} flex items-center`}>
                    {getStatusIcon(interview.status)}
                    <span className="ml-1">{interview.status}</span>
                  </span>
                  
                  <div className="mt-2 flex items-center text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">{interview.date}</span>
                  </div>
                  
                  <div className="mt-1 flex items-center text-gray-400">
                    <Clock size={16} className="mr-1" />
                    <span className="text-sm">{interview.time} ({interview.duration})</span>
                  </div>
                  
                  <div className="mt-1 flex items-center text-gray-400">
                    {getInterviewTypeIcon(interview.type)}
                    <span className="ml-1 text-sm">{interview.type}</span>
                  </div>
                  
                  <div className="mt-1 flex items-center text-gray-400">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{interview.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end space-x-2">
                <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition-colors text-sm">
                  Reschedule
                </button>
                <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition-colors text-sm">
                  Cancel
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                  Join Meeting
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}