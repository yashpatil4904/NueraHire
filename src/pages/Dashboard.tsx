import { useState } from 'react';
import { 
  FileText, 
  Users, 
  Briefcase, 
  Calendar, 
  TrendingUp, 
  Search, 
  Filter,
  ArrowRight
} from 'lucide-react';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for recent job descriptions
  const recentJDs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      location: 'Bangalore, India',
      postedDate: '2 days ago',
      status: 'Active',
      applicants: 24,
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'Mumbai, India',
      postedDate: '5 days ago',
      status: 'Active',
      applicants: 18,
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'AI Analytics',
      location: 'Hyderabad, India',
      postedDate: '1 week ago',
      status: 'Active',
      applicants: 32,
    },
  ];

  // Mock data for recent resumes
  const recentResumes = [
    {
      id: 1,
      name: 'Priya Sharma',
      title: 'Senior Software Engineer',
      experience: '5 years',
      skills: ['React', 'TypeScript', 'Node.js'],
      matchScore: 85,
    },
    {
      id: 2,
      name: 'Rahul Patel',
      title: 'Product Manager',
      experience: '4 years',
      skills: ['Agile', 'Scrum', 'Product Strategy'],
      matchScore: 78,
    },
    {
      id: 3,
      name: 'Ananya Reddy',
      title: 'Data Scientist',
      experience: '3 years',
      skills: ['Python', 'Machine Learning', 'SQL'],
      matchScore: 92,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400">Welcome back! Here's an overview of your recruitment activities.</p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Job Descriptions</p>
              <h3 className="text-2xl font-bold text-white mt-1">12</h3>
            </div>
            <div className="bg-blue-900/30 p-3 rounded-full">
              <FileText className="text-blue-400" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-400 text-sm">
            <TrendingUp size={16} className="mr-1" />
            <span>8% increase from last month</span>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Candidates</p>
              <h3 className="text-2xl font-bold text-white mt-1">248</h3>
            </div>
            <div className="bg-purple-900/30 p-3 rounded-full">
              <Users className="text-purple-400" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-400 text-sm">
            <TrendingUp size={16} className="mr-1" />
            <span>12% increase from last month</span>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Interviews Scheduled</p>
              <h3 className="text-2xl font-bold text-white mt-1">18</h3>
            </div>
            <div className="bg-green-900/30 p-3 rounded-full">
              <Calendar className="text-green-400" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-400 text-sm">
            <TrendingUp size={16} className="mr-1" />
            <span>5% increase from last month</span>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Match Rate</p>
              <h3 className="text-2xl font-bold text-white mt-1">76%</h3>
            </div>
            <div className="bg-yellow-900/30 p-3 rounded-full">
              <Briefcase className="text-yellow-400" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-400 text-sm">
            <TrendingUp size={16} className="mr-1" />
            <span>3% increase from last month</span>
          </div>
        </div>
      </div>

      {/* Recent Job Descriptions */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Recent Job Descriptions</h2>
            <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-700">
          {recentJDs.map((jd) => (
            <div key={jd.id} className="p-6 hover:bg-gray-700/50 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-white">{jd.title}</h3>
                  <p className="text-gray-400 text-sm">{jd.company} • {jd.location}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded-full">{jd.status}</span>
                    <span className="text-gray-500 text-sm ml-3">{jd.postedDate}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Applicants</p>
                  <p className="font-medium text-white">{jd.applicants}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Resumes */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Recent Resumes</h2>
            <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-700">
          {recentResumes.map((resume) => (
            <div key={resume.id} className="p-6 hover:bg-gray-700/50 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-white">{resume.name}</h3>
                  <p className="text-gray-400 text-sm">{resume.title} • {resume.experience} experience</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {resume.skills.map((skill, index) => (
                      <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Match Score</p>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden mr-2">
                      <div 
                        className="h-full bg-blue-500 rounded-full" 
                        style={{ width: `${resume.matchScore}%` }}
                      ></div>
                    </div>
                    <span className="font-medium text-white">{resume.matchScore}%</span>
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