import { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Trash2, 
  Edit2, 
  Plus, 
  Upload,
  CheckCircle,
  XCircle,
  ArrowRight
} from 'lucide-react';

export default function Resume() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeHistory, setResumeHistory] = useState([
    {
      id: 1,
      name: 'Priya_Sharma_Resume.pdf',
      uploadedAt: '2024-03-15',
      size: '2.5 MB',
      status: 'active',
      matchScore: 95,
    },
    {
      id: 2,
      name: 'Priya_Sharma_Resume_v2.pdf',
      uploadedAt: '2024-02-28',
      size: '2.3 MB',
      status: 'archived',
      matchScore: 85,
    },
  ]);

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setResumeFile(file);
      // Add new resume to history
      const newResume = {
        id: resumeHistory.length + 1,
        name: file.name,
        uploadedAt: new Date().toISOString().split('T')[0],
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        status: 'active',
        matchScore: Math.floor(Math.random() * 30) + 70, // Random match score between 70-100
      };
      setResumeHistory([newResume, ...resumeHistory]);
    }
  };

  const handleDeleteResume = (id: number) => {
    setResumeHistory(resumeHistory.filter(resume => resume.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">My Resume</h1>
          <p className="text-gray-400">Manage and track your resume versions</p>
        </div>
      </div>

      {/* Current Resume */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Current Resume</h3>
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
        <p className="text-gray-400 text-sm mb-4">
          Upload your resume in PDF, DOC, or DOCX format. Maximum file size: 5MB
        </p>
        {resumeFile && (
          <div className="bg-gray-700/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="text-blue-400" size={24} />
                <div>
                  <h4 className="text-white font-medium">{resumeFile.name}</h4>
                  <p className="text-gray-400 text-sm">
                    {(resumeFile.size / (1024 * 1024)).toFixed(1)} MB
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-gray-300">
                  <Eye size={18} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-300">
                  <Download size={18} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-300">
                  <Edit2 size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Resume History */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Resume History</h3>
          <button className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
            <Plus size={16} />
            Add Version
          </button>
        </div>
        <div className="space-y-4">
          {resumeHistory.map((resume) => (
            <div key={resume.id} className="bg-gray-700/50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="text-blue-400" size={24} />
                  <div>
                    <h4 className="text-white font-medium">{resume.name}</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-400">Uploaded {resume.uploadedAt}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400">{resume.size}</span>
                      <span className="text-gray-500">•</span>
                      <span className={`${
                        resume.status === 'active' ? 'text-green-400' : 'text-gray-400'
                      }`}>
                        {resume.status.charAt(0).toUpperCase() + resume.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-gray-600 rounded-full">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${resume.matchScore}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-400">{resume.matchScore}% match</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-300">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-300">
                      <Download size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-300">
                      <Edit2 size={18} />
                    </button>
                    <button 
                      className="p-2 text-red-400 hover:text-red-300"
                      onClick={() => handleDeleteResume(resume.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Tips */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Resume Tips</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-400 mt-1" size={20} />
            <div>
              <h4 className="text-white font-medium">Keep it Updated</h4>
              <p className="text-gray-400 text-sm">
                Regularly update your resume with new skills, experiences, and achievements.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-400 mt-1" size={20} />
            <div>
              <h4 className="text-white font-medium">Tailor for Each Job</h4>
              <p className="text-gray-400 text-sm">
                Customize your resume to highlight relevant skills and experiences for each position.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-400 mt-1" size={20} />
            <div>
              <h4 className="text-white font-medium">Use Action Words</h4>
              <p className="text-gray-400 text-sm">
                Start bullet points with strong action verbs to describe your achievements.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-400 mt-1" size={20} />
            <div>
              <h4 className="text-white font-medium">Proofread Carefully</h4>
              <p className="text-gray-400 text-sm">
                Ensure your resume is free of spelling and grammatical errors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}