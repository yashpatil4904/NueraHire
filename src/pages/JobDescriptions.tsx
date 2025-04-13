import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  FileText, 
  MapPin, 
  DollarSign, 
  Clock,
  ArrowRight,
  X
} from 'lucide-react';

export default function JobDescriptions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newJD, setNewJD] = useState({
    title: '',
    description: '',
    type: 'Full-time',
  });

  // Mock data for job descriptions
  const jobDescriptions = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      location: 'Bangalore, India',
      salary: '₹15L - ₹25L',
      type: 'Full-time',
      experience: '5-8 years',
      postedDate: '2 days ago',
      status: 'Active',
      applicants: 24,
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'Mumbai, India',
      salary: '₹12L - ₹20L',
      type: 'Full-time',
      experience: '3-6 years',
      postedDate: '5 days ago',
      status: 'Active',
      applicants: 18,
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'AI Analytics',
      location: 'Hyderabad, India',
      salary: '₹10L - ₹18L',
      type: 'Full-time',
      experience: '2-5 years',
      postedDate: '1 week ago',
      status: 'Active',
      applicants: 32,
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      company: 'Creative Studios',
      location: 'Remote',
      salary: '₹8L - ₹15L',
      type: 'Contract',
      experience: '3-5 years',
      postedDate: '2 weeks ago',
      status: 'Inactive',
      applicants: 15,
    },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'inactive', label: 'Inactive' },
  ];

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
  };

  const handleCreateJD = () => {
    // Here you would typically make an API call to create the JD
    console.log('Creating new JD:', newJD);
    setIsCreateModalOpen(false);
    // Reset form
    setNewJD({
      title: '',
      description: '',
      type: 'Full-time',
    });
  };

  const filteredJDs = jobDescriptions.filter(jd => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'active') return jd.status === 'Active';
    if (selectedFilter === 'inactive') return jd.status === 'Inactive';
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Job Descriptions</h1>
          <p className="text-gray-400">Manage and create job descriptions for your open positions.</p>
        </div>
        <button 
          onClick={() => setIsCreateModalOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Plus size={18} className="mr-2" />
          <span>Create New JD</span>
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
                  Job Description
                </label>
                <textarea
                  value={newJD.description}
                  onChange={(e) => setNewJD({ ...newJD, description: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="Enter detailed job description..."
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

      {/* Job Descriptions List */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Job Details
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Requirements
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Applicants
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredJDs.map((jd) => (
                <tr key={jd.id} className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <FileText className="text-blue-400" size={20} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">{jd.title}</div>
                        <div className="text-sm text-gray-400">{jd.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{jd.experience}</div>
                    <div className="flex items-center text-sm text-gray-400 mt-1">
                      <MapPin size={14} className="mr-1" />
                      <span>{jd.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      jd.status === 'Active' 
                        ? 'bg-green-900/30 text-green-400' 
                        : 'bg-gray-900/30 text-gray-400'
                    }`}>
                      {jd.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {jd.applicants}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-400 hover:text-red-300">
                        <Trash2 size={18} />
                      </button>
                    </div>
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