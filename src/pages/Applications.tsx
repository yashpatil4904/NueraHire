import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Building, 
  MapPin, 
  DollarSign, 
  Briefcase, 
  Clock,
  CheckCircle,
  XCircle,
  ArrowRight
} from 'lucide-react';

export default function Applications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock data for applications
  const applications = [
    {
      id: 1,
      jobTitle: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      location: 'Bangalore, India',
      salary: '₹15L - ₹25L',
      type: 'Full-time',
      appliedDate: '2023-06-10',
      status: 'applied',
      lastUpdated: '2 days ago',
    },
    {
      id: 2,
      jobTitle: 'Product Manager',
      company: 'Innovation Labs',
      location: 'Mumbai, India',
      salary: '₹12L - ₹20L',
      type: 'Full-time',
      appliedDate: '2023-06-05',
      status: 'interviewing',
      lastUpdated: '1 day ago',
    },
    {
      id: 3,
      jobTitle: 'Data Scientist',
      company: 'AI Analytics',
      location: 'Hyderabad, India',
      salary: '₹10L - ₹18L',
      type: 'Full-time',
      appliedDate: '2023-05-28',
      status: 'rejected',
      lastUpdated: '1 week ago',
    },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'applied', label: 'Applied' },
    { id: 'interviewing', label: 'Interviewing' },
    { id: 'rejected', label: 'Rejected' },
  ];

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'applied':
        return 'bg-blue-900/30 text-blue-400';
      case 'interviewing':
        return 'bg-green-900/30 text-green-400';
      case 'rejected':
        return 'bg-red-900/30 text-red-400';
      default:
        return 'bg-gray-900/30 text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'applied':
        return <Clock size={16} className="text-blue-400" />;
      case 'interviewing':
        return <CheckCircle size={16} className="text-green-400" />;
      case 'rejected':
        return <XCircle size={16} className="text-red-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">My Applications</h1>
          <p className="text-gray-400">Track and manage your job applications</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search applications..."
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

      {/* Applications Table */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Job Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Application Info
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
              {applications.map((application) => (
                <tr key={application.id} className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                        <Building className="text-gray-400" size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-white">{application.jobTitle}</h3>
                        <p className="text-gray-400 text-sm">{application.company}</p>
                        <div className="flex items-center mt-1 text-gray-400 text-sm">
                          <MapPin size={14} className="mr-1" />
                          <span>{application.location}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-300">
                      <div className="flex items-center">
                        <DollarSign size={14} className="mr-1 text-gray-400" />
                        <span>{application.salary}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Briefcase size={14} className="mr-1 text-gray-400" />
                        <span>{application.type}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Clock size={14} className="mr-1 text-gray-400" />
                        <span>Applied {application.appliedDate}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(application.status)} flex items-center`}>
                      {getStatusIcon(application.status)}
                      <span className="ml-1">{application.status}</span>
                    </span>
                    <p className="text-xs text-gray-400 mt-1">Last updated {application.lastUpdated}</p>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                      View Details <ArrowRight size={16} className="ml-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 