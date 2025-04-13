import { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  FileText,
  Upload,
  Edit2,
  Trash2,
  Plus,
  CheckCircle,
  XCircle,
  Link,
  Globe,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  // Mock data for profile
  const profile = {
    name: 'Priya Sharma',
    title: 'Senior Frontend Developer',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    location: 'Bangalore, India',
    bio: 'Experienced frontend developer with expertise in React, TypeScript, and modern web technologies. Passionate about creating beautiful and performant user interfaces.',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Git'],
    experience: [
      {
        id: 1,
        title: 'Senior Frontend Developer',
        company: 'Tech Solutions Inc.',
        location: 'Bangalore, India',
        startDate: '2020-01',
        endDate: 'Present',
        description: 'Leading frontend development team, implementing new features, and improving application performance.',
      },
      {
        id: 2,
        title: 'Frontend Developer',
        company: 'Digital Innovations',
        location: 'Mumbai, India',
        startDate: '2018-03',
        endDate: '2019-12',
        description: 'Developed and maintained multiple web applications using React and Redux.',
      },
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Technology in Computer Science',
        school: 'Indian Institute of Technology',
        location: 'Delhi, India',
        startDate: '2014',
        endDate: '2018',
        gpa: '8.5/10',
      },
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/priyasharma',
      github: 'https://github.com/priyasharma',
      portfolio: 'https://priyasharma.dev',
    },
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setResumeFile(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Profile</h1>
          <p className="text-gray-400">Manage your profile and resume</p>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex items-start gap-6">
          <div className="relative">
            <div className="w-32 h-32 bg-gray-700 rounded-full overflow-hidden">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="text-gray-400" size={48} />
                </div>
              )}
            </div>
            <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
              <Upload className="text-white" size={16} />
              <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
            </label>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-white">{profile.name}</h2>
                <p className="text-gray-400">{profile.title}</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                <Edit2 size={16} />
                Edit Profile
              </button>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Briefcase size={16} className="mr-2" />
                <span>{profile.experience.length} years experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Section */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Resume</h3>
          <div className="flex items-center gap-2">
            {resumeFile ? (
              <>
                <span className="text-green-400 text-sm flex items-center">
                  <CheckCircle size={16} className="mr-1" />
                  Resume uploaded
                </span>
                <button className="text-red-400 hover:text-red-300">
                  <Trash2 size={16} />
                </button>
              </>
            ) : (
              <label className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer flex items-center gap-2">
                <Upload size={16} />
                Upload Resume
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} />
              </label>
            )}
          </div>
        </div>
        <p className="text-gray-400 text-sm">
          Upload your resume in PDF, DOC, or DOCX format. Maximum file size: 5MB
        </p>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Skills</h3>
          <button className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
            <Plus size={16} />
            Add Skill
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm flex items-center gap-2"
            >
              {skill}
              <button className="text-gray-400 hover:text-gray-300">
                <XCircle size={14} />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Experience</h3>
          <button className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
            <Plus size={16} />
            Add Experience
          </button>
        </div>
        <div className="space-y-4">
          {profile.experience.map((exp) => (
            <div key={exp.id} className="border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-white">{exp.title}</h4>
                  <p className="text-gray-400">{exp.company}</p>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <MapPin size={14} className="mr-1" />
                    <span>{exp.location}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-300">
                  <Edit2 size={16} />
                </button>
              </div>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Education</h3>
          <button className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
            <Plus size={16} />
            Add Education
          </button>
        </div>
        <div className="space-y-4">
          {profile.education.map((edu) => (
            <div key={edu.id} className="border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-white">{edu.degree}</h4>
                  <p className="text-gray-400">{edu.school}</p>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <MapPin size={14} className="mr-1" />
                    <span>{edu.location}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.startDate} - {edu.endDate}</span>
                    <span className="mx-2">•</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-300">
                  <Edit2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links Section */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Social Links</h3>
          <button className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
            <Plus size={16} />
            Add Link
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Linkedin className="text-blue-400" size={20} />
            <span className="text-gray-300">{profile.socialLinks.linkedin}</span>
          </div>
          <div className="flex items-center gap-3">
            <Github className="text-gray-400" size={20} />
            <span className="text-gray-300">{profile.socialLinks.github}</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="text-gray-400" size={20} />
            <span className="text-gray-300">{profile.socialLinks.portfolio}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 