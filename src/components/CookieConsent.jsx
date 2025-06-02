import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function CookieConsent({ theme }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('themeConsent');
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('themeConsent', 'accepted', { expires: 365 });
    setShowPopup(false);
  };

  const handleDecline = () => {
    setShowPopup(false); 
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50">
      <div
        className={`p-4 rounded-md shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4
          ${theme === 'dark'
            ? 'bg-ocean-darkBg text-ocean-darkText'
            : 'bg-ocean-lightBg text-ocean-lightText'}`}
      >
        <p className="text-sm text-center sm:text-left">
          This site uses cookies to remember your theme preference.
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleAccept}
            className={`px-4 py-2 rounded font-medium transition
              ${theme === 'dark'
                ? 'bg-ocean-darkPrimary text-white hover:bg-ocean-darkSecondary'
                : 'bg-ocean-lightPrimary text-white hover:bg-ocean-lightSecondary'
              }`}
          >
            OK!
          </button>
          <button
            onClick={handleDecline}
            className={`px-4 py-2 rounded font-medium border transition
              ${theme === 'dark'
                ? 'border-ocean-darkSecondary text-ocean-darkText hover:bg-ocean-darkSecondary/20'
                : 'border-ocean-lightSecondary text-ocean-lightText hover:bg-ocean-lightSecondary/20'
              }`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
