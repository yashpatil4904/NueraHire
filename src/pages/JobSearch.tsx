import { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  DollarSign, 
  Briefcase, 
  Clock, 
  Building,
  Bookmark,
  Share2,
  ArrowRight
} from 'lucide-react';

export default function JobSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock data for jobs
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      location: 'Bangalore, India',
      salary: '₹15L - ₹25L',
      type: 'Full-time',
      posted: '2 days ago',
      description: 'We are looking for a Senior Frontend Developer with expertise in React, TypeScript, and modern web technologies.',
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'Mumbai, India',
      salary: '₹12L - ₹20L',
      type: 'Full-time',
      posted: '5 days ago',
      description: 'Join our product team to drive innovation and create exceptional user experiences.',
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'AI Analytics',
      location: 'Hyderabad, India',
      salary: '₹10L - ₹18L',
      type: 'Full-time',
      posted: '1 week ago',
      description: 'Work with cutting-edge AI technologies and help shape the future of data analytics.',
    },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'full-time', label: 'Full-time' },
    { id: 'contract', label: 'Contract' },
    { id: 'remote', label: 'Remote' },
  ];

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Job Search</h1>
          <p className="text-gray-400">Find your next career opportunity</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search jobs, companies, or keywords..."
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

      {/* Job Listings */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-white mb-1">{job.title}</h2>
                <div className="flex items-center text-gray-400 mb-2">
                  <Building size={16} className="mr-1" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={16} className="mr-1" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase size={16} className="mr-1" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{job.posted}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-300">
                  <Bookmark size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-300">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4">{job.description}</p>
            
            <div className="flex justify-between items-center">
              <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                View Details <ArrowRight size={16} className="ml-1" />
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 