import React, { useState } from 'react';

const Settings = () => {
  const [receiveEmails, setReceiveEmails] = useState(true);
  const [hideEmail, setHideEmail] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings saved (demo)');
  };

  const handleClearData = () => {
    alert('Local data cleared (demo)');
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm('Are you sure you want to delete your account? This action is irreversible!')
    ) {
      alert('Account deleted (demo)');
    }
  };

  const handleClearCache = () => {
    alert('Cache cleared (demo)');
  };

  return (
    <div className="min-h-screen bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText transition duration-300 px-6 py-12 flex justify-center">
      <div className="max-w-2xl w-full bg-ocean-lightBg2 dark:bg-ocean-darkBg2 rounded-2xl shadow-lg p-10">
        <h2 className="text-3xl font-bold text-ocean-lightPrimary dark:text-ocean-darkPrimary mb-8 text-center">
          App Settings
        </h2>

        <form onSubmit={handleSave} className="space-y-6">

          {/* Language Selection */}
          <div>
            <label htmlFor="language" className="block mb-1 font-medium">
              Language
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-ocean-lightPrimary dark:border-ocean-darkPrimary bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText focus:outline-none focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary transition"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
            </select>
          </div>

          {/* Preferences */}
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={receiveEmails}
                onChange={(e) => setReceiveEmails(e.target.checked)}
                className="rounded border-ocean-lightPrimary dark:border-ocean-darkPrimary text-ocean-lightPrimary dark:text-ocean-darkPrimary focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary"
              />
              <span>I would like to receive email notifications</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={hideEmail}
                onChange={(e) => setHideEmail(e.target.checked)}
                className="rounded border-ocean-lightPrimary dark:border-ocean-darkPrimary text-ocean-lightPrimary dark:text-ocean-darkPrimary focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary"
              />
              <span>Hide my email from public view</span>
            </label>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-ocean-lightPrimary hover:bg-ocean-lightSecondary dark:bg-ocean-darkPrimary dark:hover:bg-ocean-darkSecondary text-white font-semibold transition"
          >
            Save Settings
          </button>
        </form>

        {/* Utility Actions */}
        <div className="mt-10 space-y-4">
          <button
            onClick={handleClearCache}
            className="w-full py-3 rounded-md border border-ocean-lightPrimary dark:border-ocean-darkPrimary text-ocean-lightPrimary dark:text-ocean-darkPrimary hover:bg-ocean-lightBg3 dark:hover:bg-ocean-darkBg3 transition font-medium"
          >
            Clear Cache
          </button>

          <button
            onClick={handleClearData}
            className="w-full py-3 rounded-md border border-yellow-500 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900 transition font-medium"
          >
            Clear Local Data
          </button>

          <button
            onClick={handleDeleteAccount}
            className="w-full py-3 rounded-md border border-red-500 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 transition font-semibold"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
