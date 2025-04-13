import { useState } from 'react';
import { 
  Upload, 
  FileText, 
  Download, 
  AlertCircle,
  CheckCircle,
  XCircle,
  Percent
} from 'lucide-react';

interface JobMatch {
  jobId: string;
  jobTitle: string;
  candidateName: string;
  matchScore: number;
  resumePath: string;
}

export default function MatchResults() {
  const [jobDescriptionsFile, setJobDescriptionsFile] = useState<File | null>(null);
  const [resumeZipFile, setResumeZipFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [matchResults, setMatchResults] = useState<JobMatch[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Mock data for demonstration
  const mockResults: JobMatch[] = [
    {
      jobId: 'JD001',
      jobTitle: 'Data Science',
      candidateName: 'Jordan Ruiz',
      matchScore: 92,
      resumePath: '/resumes/jordan-ruiz.pdf'
    },
    {
      jobId: 'JD001',
      jobTitle: 'Cybersecurity Analyst',
      candidateName: 'Christine Howard',
      matchScore: 85,
      resumePath: '/resumes/christine-howard.pdf'
    },
    {
      jobId: 'JD002',
      jobTitle: 'Software Engineer',
      candidateName: 'Kaylee Wolfe',
      matchScore: 88,
      resumePath: '/resumes/kaylee-wolfe.pdf'
    }
  ];

  const handleJobDescriptionsUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/csv') {
      setJobDescriptionsFile(file);
      setError(null);
    } else {
      setError('Please upload a valid CSV file');
    }
  };

  const handleResumeZipUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check if the file is a ZIP file by its extension
      const isZipFile = file.name.toLowerCase().endsWith('.zip');
      if (isZipFile) {
        setResumeZipFile(file);
        setError(null);
      } else {
        setError('Please upload a valid ZIP file');
        setResumeZipFile(null);
      }
    }
  };

  const handleProcessFiles = async () => {
    if (!jobDescriptionsFile || !resumeZipFile) {
      setError('Please upload both job descriptions and resumes');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Here you would typically:
      // 1. Upload the CSV file
      // 2. Upload the ZIP file
      // 3. Process the files on the backend
      // 4. Get the match results
      
      // For now, we'll use mock data
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate processing
      setMatchResults(mockResults);
    } catch (err) {
      setError('Error processing files. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGeneratePDF = () => {
    // Here you would typically:
    // 1. Call the backend API to generate the PDF
    // 2. Download the generated PDF
    console.log('Generating PDF with match results...');
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Match Results</h1>
        <p className="text-gray-400">Upload job descriptions and resumes to get matching results</p>
      </div>

      {/* Upload Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Job Descriptions Upload */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Job Descriptions</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer bg-gray-700/50 hover:bg-gray-700">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-400">CSV file containing job descriptions</p>
                </div>
                <input 
                  type="file" 
                  className="hidden" 
                  accept=".csv"
                  onChange={handleJobDescriptionsUpload}
                />
              </label>
            </div>
            {jobDescriptionsFile && (
              <div className="flex items-center text-sm text-gray-300">
                <FileText className="w-4 h-4 mr-2" />
                <span>{jobDescriptionsFile.name}</span>
              </div>
            )}
          </div>
        </div>

        {/* Resumes Upload */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Resumes</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer bg-gray-700/50 hover:bg-gray-700">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-400">ZIP file containing resumes</p>
                </div>
                <input 
                  type="file" 
                  className="hidden" 
                  accept=".zip,application/zip,application/x-zip-compressed"
                  onChange={handleResumeZipUpload}
                />
              </label>
            </div>
            {resumeZipFile && (
              <div className="flex items-center text-sm text-gray-300">
                <FileText className="w-4 h-4 mr-2" />
                <span>{resumeZipFile.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center p-4 bg-red-900/30 border border-red-700 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
          <span className="text-red-400">{error}</span>
        </div>
      )}

      {/* Process Button */}
      <div className="flex justify-center">
        <button
          onClick={handleProcessFiles}
          disabled={isProcessing || !jobDescriptionsFile || !resumeZipFile}
          className={`px-6 py-3 rounded-lg font-medium ${
            isProcessing || !jobDescriptionsFile || !resumeZipFile
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isProcessing ? 'Processing...' : 'Process Files'}
        </button>
      </div>

      {/* Results Section */}
      {matchResults.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Match Results</h2>
            <button
              onClick={handleGeneratePDF}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF Report
            </button>
          </div>

          {/* Results Table */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Job Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Candidate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Match Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {matchResults.map((match, index) => (
                  <tr key={index} className="hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white">{match.jobTitle}</div>
                      <div className="text-sm text-gray-400">ID: {match.jobId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white">{match.candidateName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Percent className={`w-4 h-4 mr-2 ${getMatchScoreColor(match.matchScore)}`} />
                        <span className={`text-sm ${getMatchScoreColor(match.matchScore)}`}>
                          {match.matchScore}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {match.matchScore >= 80 ? (
                        <div className="flex items-center text-green-400">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span className="text-sm">Top Match</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-gray-400">
                          <XCircle className="w-4 h-4 mr-2" />
                          <span className="text-sm">Below Threshold</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}