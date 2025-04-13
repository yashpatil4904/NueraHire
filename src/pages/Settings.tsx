import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Lock, 
  Mail, 
  Globe, 
  HelpCircle, 
  ChevronRight, 
  ToggleLeft, 
  ToggleRight,
  Save,
  Trash2,
  LogOut
} from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    applicationUpdates: true,
    matchAlerts: true,
    interviewReminders: true,
    marketingEmails: false,
  });
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    showLocation: true,
  });
  const [language, setLanguage] = useState('english');
  const [timezone, setTimezone] = useState('UTC+5:30');

  const handleNotificationChange = (key: string) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key as keyof typeof notifications],
    });
  };

  const handlePrivacyChange = (key: string, value: string | boolean) => {
    setPrivacy({
      ...privacy,
      [key]: value,
    });
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    { id: 'privacy', label: 'Privacy', icon: <Lock size={18} /> },
    { id: 'communication', label: 'Communication', icon: <Mail size={18} /> },
    { id: 'preferences', label: 'Preferences', icon: <Globe size={18} /> },
    { id: 'help', label: 'Help & Support', icon: <HelpCircle size={18} /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="text-gray-400">Manage your account settings and preferences.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
          <div className="p-4">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="mr-3">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-4 border-t border-gray-700">
            <button className="w-full flex items-center px-3 py-2 rounded-md text-sm font-medium text-red-400 hover:bg-gray-700 hover:text-red-300">
              <LogOut size={18} className="mr-3" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-white mb-6">Profile Settings</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                    <User className="text-gray-300" size={40} />
                  </div>
                  <div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                      Change Photo
                    </button>
                    <p className="text-gray-400 text-sm mt-1">JPG, GIF or PNG. Max size 2MB.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-1">Bio</label>
                    <textarea
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      placeholder="Tell us about yourself..."
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === 'notifications' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-white mb-6">Notification Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-white">Email Notifications</h3>
                    <p className="text-gray-400 text-sm">Receive notifications via email</p>
                  </div>
                  <button
                    className="text-blue-500"
                    onClick={() => handleNotificationChange('emailNotifications')}
                  >
                    {notifications.emailNotifications ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-white">Application Updates</h3>
                    <p className="text-gray-400 text-sm">Get notified about application status changes</p>
                  </div>
                  <button
                    className="text-blue-500"
                    onClick={() => handleNotificationChange('applicationUpdates')}
                  >
                    {notifications.applicationUpdates ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-white">Match Alerts</h3>
                    <p className="text-gray-400 text-sm">Get notified when new matches are found</p>
                  </div>
                  <button
                    className="text-blue-500"
                    onClick={() => handleNotificationChange('matchAlerts')}
                  >
                    {notifications.matchAlerts ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-white">Interview Reminders</h3>
                    <p className="text-gray-400 text-sm">Get reminded about upcoming interviews</p>
                  </div>
                  <button
                    className="text-blue-500"
                    onClick={() => handleNotificationChange('interviewReminders')}
                  >
                    {notifications.interviewReminders ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-white">Marketing Emails</h3>
                    <p className="text-gray-400 text-sm">Receive marketing and promotional emails</p>
                  </div>
                  <button
                    className="text-blue-500"
                    onClick={() => handleNotificationChange('marketingEmails')}
                  >
                    {notifications.marketingEmails ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Privacy Settings */}
          {activeTab === 'privacy' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-white mb-6">Privacy Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-white mb-4">Profile Visibility</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="public"
                        name="visibility"
                        value="public"
                        checked={privacy.profileVisibility === 'public'}
                        onChange={() => handlePrivacyChange('profileVisibility', 'public')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 bg-gray-700"
                      />
                      <label htmlFor="public" className="ml-2 block text-sm text-gray-300">
                        Public - Anyone can view your profile
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="private"
                        name="visibility"
                        value="private"
                        checked={privacy.profileVisibility === 'private'}
                        onChange={() => handlePrivacyChange('profileVisibility', 'private')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 bg-gray-700"
                      />
                      <label htmlFor="private" className="ml-2 block text-sm text-gray-300">
                        Private - Only you can view your profile
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="connections"
                        name="visibility"
                        value="connections"
                        checked={privacy.profileVisibility === 'connections'}
                        onChange={() => handlePrivacyChange('profileVisibility', 'connections')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 bg-gray-700"
                      />
                      <label htmlFor="connections" className="ml-2 block text-sm text-gray-300">
                        Connections - Only your connections can view your profile
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-white mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-white">Show Email Address</h3>
                        <p className="text-gray-400 text-sm">Display your email address on your profile</p>
                      </div>
                      <button
                        className="text-blue-500"
                        onClick={() => handlePrivacyChange('showEmail', !privacy.showEmail)}
                      >
                        {privacy.showEmail ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-white">Show Phone Number</h3>
                        <p className="text-gray-400 text-sm">Display your phone number on your profile</p>
                      </div>
                      <button
                        className="text-blue-500"
                        onClick={() => handlePrivacyChange('showPhone', !privacy.showPhone)}
                      >
                        {privacy.showPhone ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-white">Show Location</h3>
                        <p className="text-gray-400 text-sm">Display your location on your profile</p>
                      </div>
                      <button
                        className="text-blue-500"
                        onClick={() => handlePrivacyChange('showLocation', !privacy.showLocation)}
                      >
                        {privacy.showLocation ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <h3 className="font-medium text-white mb-4">Account Deletion</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center">
                    <Trash2 size={16} className="mr-2" />
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Communication Settings */}
          {activeTab === 'communication' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-white mb-6">Communication Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-white mb-4">Email Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-white">Weekly Digest</h3>
                        <p className="text-gray-400 text-sm">Receive a weekly summary of your account activity</p>
                      </div>
                      <button className="text-blue-500">
                        <ToggleRight size={24} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-white">Job Recommendations</h3>
                        <p className="text-gray-400 text-sm">Receive personalized job recommendations</p>
                      </div>
                      <button className="text-blue-500">
                        <ToggleRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-white mb-4">Message Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-white">Direct Messages</h3>
                        <p className="text-gray-400 text-sm">Allow others to send you direct messages</p>
                      </div>
                      <button className="text-blue-500">
                        <ToggleRight size={24} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-white">Message Notifications</h3>
                        <p className="text-gray-400 text-sm">Get notified when you receive a new message</p>
                      </div>
                      <button className="text-blue-500">
                        <ToggleRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Preferences Settings */}
          {activeTab === 'preferences' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-white mb-6">Preferences</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-white mb-4">Language</h3>
                  <select
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                    <option value="chinese">Chinese</option>
                  </select>
                </div>

                <div>
                  <h3 className="font-medium text-white mb-4">Timezone</h3>
                  <select
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                  >
                    <option value="UTC-12:00">UTC-12:00</option>
                    <option value="UTC-11:00">UTC-11:00</option>
                    <option value="UTC-10:00">UTC-10:00</option>
                    <option value="UTC-09:00">UTC-09:00</option>
                    <option value="UTC-08:00">UTC-08:00</option>
                    <option value="UTC-07:00">UTC-07:00</option>
                    <option value="UTC-06:00">UTC-06:00</option>
                    <option value="UTC-05:00">UTC-05:00</option>
                    <option value="UTC-04:00">UTC-04:00</option>
                    <option value="UTC-03:00">UTC-03:00</option>
                    <option value="UTC-02:00">UTC-02:00</option>
                    <option value="UTC-01:00">UTC-01:00</option>
                    <option value="UTC+00:00">UTC+00:00</option>
                    <option value="UTC+01:00">UTC+01:00</option>
                    <option value="UTC+02:00">UTC+02:00</option>
                    <option value="UTC+03:00">UTC+03:00</option>
                    <option value="UTC+04:00">UTC+04:00</option>
                    <option value="UTC+05:00">UTC+05:00</option>
                    <option value="UTC+05:30">UTC+05:30</option>
                    <option value="UTC+06:00">UTC+06:00</option>
                    <option value="UTC+07:00">UTC+07:00</option>
                    <option value="UTC+08:00">UTC+08:00</option>
                    <option value="UTC+09:00">UTC+09:00</option>
                    <option value="UTC+10:00">UTC+10:00</option>
                    <option value="UTC+11:00">UTC+11:00</option>
                    <option value="UTC+12:00">UTC+12:00</option>
                  </select>
                </div>

                <div>
                  <h3 className="font-medium text-white mb-4">Theme</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="dark"
                        name="theme"
                        value="dark"
                        checked={true}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 bg-gray-700"
                      />
                      <label htmlFor="dark" className="ml-2 block text-sm text-gray-300">
                        Dark
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="light"
                        name="theme"
                        value="light"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 bg-gray-700"
                      />
                      <label htmlFor="light" className="ml-2 block text-sm text-gray-300">
                        Light
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="system"
                        name="theme"
                        value="system"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 bg-gray-700"
                      />
                      <label htmlFor="system" className="ml-2 block text-sm text-gray-300">
                        System
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Help & Support */}
          {activeTab === 'help' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-white mb-6">Help & Support</h2>
              <div className="space-y-6">
                <div className="bg-gray-700/50 rounded-lg p-6">
                  <h3 className="font-medium text-white mb-2">Frequently Asked Questions</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Find answers to common questions about using NeuraHire.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                    View FAQ
                  </button>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-6">
                  <h3 className="font-medium text-white mb-2">Contact Support</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Need help? Our support team is here to assist you.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                    Contact Support
                  </button>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-6">
                  <h3 className="font-medium text-white mb-2">Documentation</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Learn more about NeuraHire's features and how to use them effectively.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                    View Documentation
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}