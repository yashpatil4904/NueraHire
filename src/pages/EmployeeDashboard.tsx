import { useState } from 'react';
import { 
  FileText, 
  Briefcase, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Search,
  MapPin,
  DollarSign,
  Building,
  ArrowRight
} from 'lucide-react';

export default function EmployeeDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for job applications
  const applications = [
    {
      id: 1,
      company: 'TechMahindra',
      position: 'Senior Software Engineer',
      status: 'applied',
      date: '2023-06-10',
    },
    {
      id: 2,
      company: 'Infosys',
      position: 'Product Manager',
      status: 'interviewing',
      date: '2023-06-05',
    },
    {
      id: 3,
      company: 'Wipro',
      position: 'UX Designer',
      status: 'rejected',
      date: '2023-05-28',
    },
  ];
  
  // Mock data for recommended jobs
  const recommendedJobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'HCL',
      location: 'Bangalore',
      salary: '₹12-18 LPA',
      posted: '2 days ago',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Cognizant',
      location: 'Hyderabad',
      salary: '₹10-15 LPA',
      posted: '3 days ago',
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'TCS',
      location: 'Mumbai',
      salary: '₹15-20 LPA',
      posted: '5 days ago',
    },
  ];
  
  // Get status icon based on application status
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'applied':
        return <Clock className="text-blue-400" size={18} />;
      case 'interviewing':
        return <CheckCircle className="text-green-400" size={18} />;
      case 'rejected':
        return <AlertCircle className="text-red-400" size={18} />;
      default:
        return <Clock className="text-gray-400" size={18} />;
    }
  };
  
  // Get status text based on application status
  const getStatusText = (status: string) => {
    switch (status) {
      case 'applied':
        return 'Applied';
      case 'interviewing':
        return 'Interviewing';
      case 'rejected':
        return 'Rejected';
      default:
        return 'Unknown';
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Welcome, Priya Sharma</h1>
          <p className="text-gray-400">Track your job applications and discover new opportunities</p>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          placeholder="Search for jobs, companies, or keywords"
        />
        <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Applications</p>
              <h3 className="text-2xl font-bold text-white mt-1">12</h3>
            </div>
            <div className="bg-blue-900/30 p-3 rounded-full">
              <FileText className="text-blue-400" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Interviews Scheduled</p>
              <h3 className="text-2xl font-bold text-white mt-1">3</h3>
            </div>
            <div className="bg-green-900/30 p-3 rounded-full">
              <CheckCircle className="text-green-400" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Profile Views</p>
              <h3 className="text-2xl font-bold text-white mt-1">48</h3>
            </div>
            <div className="bg-purple-900/30 p-3 rounded-full">
              <Briefcase className="text-purple-400" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Recent Applications</h2>
            <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {applications.map((application) => (
                <tr key={application.id} className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                        <Building className="text-gray-400" size={20} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">{application.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-300">{application.position}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {getStatusIcon(application.status)}
                      <span className="ml-2 text-sm text-gray-300">{getStatusText(application.status)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {application.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Recommended Jobs</h2>
            <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {recommendedJobs.map((job) => (
            <div key={job.id} className="bg-gray-700/50 p-6 rounded-lg border border-gray-600 hover:border-blue-500 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                  <Building className="text-gray-400" size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-white">{job.title}</h3>
                  <p className="text-sm text-gray-400">{job.company}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-300">
                  <MapPin size={16} className="mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <DollarSign size={16} className="mr-2" />
                  <span>{job.salary}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{job.posted}</span>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 