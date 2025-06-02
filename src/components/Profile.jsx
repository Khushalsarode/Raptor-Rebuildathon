import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Profile() {
  // Demo user data state
  const [userData, setUserData] = useState({
    accountId: 'WH-123456789',
    username: 'asdfghjkl',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    address1: '123 Ocean Ave',
    address2: 'Suite 456',
    address3: '',
    location: 'San Francisco, CA',
    receiveEmails: true,
    hideEmail: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Changes saved (demo)');
  };

  return (
    <div className="min-h-screen bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText transition duration-300 px-6 py-12 flex justify-center">
      <div className="max-w-3xl w-full bg-ocean-lightBg2 dark:bg-ocean-darkBg2 rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-bold text-ocean-lightPrimary dark:text-ocean-darkPrimary mb-8 text-center">
          Welcome {userData.username} to the account settings page.
        </h1>

        <form onSubmit={handleSave} className="space-y-6">
          {/* Profile icon & account ID */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            <div className="flex-shrink-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="Profile Icon"
                className="w-28 h-28 rounded-full border-4 border-ocean-lightPrimary dark:border-ocean-darkPrimary"
              />
            </div>
            <div>
              <p className="text-sm text-ocean-lightText dark:text-ocean-darkText mb-2">
                <span className="font-semibold">Account ID:</span> {userData.accountId}
              </p>
              <p className="text-base">
                What changes would you like to make?
              </p>
            </div>
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block mb-1 font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={userData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-ocean-lightPrimary dark:border-ocean-darkPrimary bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText focus:outline-none focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-ocean-lightPrimary dark:border-ocean-darkPrimary bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText focus:outline-none focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary transition"
              required
            />
          </div>

         {/* Password reset button */}
            <div>
            <Link
                to="/reset"  
                className="inline-block px-4 py-2 rounded-md bg-ocean-lightPrimary hover:bg-ocean-lightSecondary dark:bg-ocean-darkPrimary dark:hover:bg-ocean-darkSecondary text-white font-semibold transition cursor-pointer"
            >
                Reset Password
            </Link>
            </div>
    

          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block mb-1 font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-ocean-lightPrimary dark:border-ocean-darkPrimary bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText focus:outline-none focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary transition"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block mb-1 font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-ocean-lightPrimary dark:border-ocean-darkPrimary bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText focus:outline-none focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary transition"
            />
          </div>

          {/* Address Lines */}
          <div>
            <label htmlFor="address1" className="block mb-1 font-medium">
              Address Line 1
            </label>
            <input
              type="text"
              id="address1"
              name="address1"
              value={userData.address1}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-ocean-lightPrimary dark:border-ocean-darkPrimary bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText focus:outline-none focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary transition"
            />
          </div>
          <div>
            <label htmlFor="address2" className="block mb-1 font-medium">
              Address Line 2
            </label>
            <input
              type="text"
              id="address2"
              name="address2"
              value={userData.address2}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-ocean-lightPrimary dark:border-ocean-darkPrimary bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText focus:outline-none focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary transition"
            />
          </div>
          <div>
            <label htmlFor="address3" className="block mb-1 font-medium">
              Address Line 3
            </label>
            <input
              type="text"
              id="address3"
              name="address3"
              value={userData.address3}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-ocean-lightPrimary dark:border-ocean-darkPrimary bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText focus:outline-none focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary transition"
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block mb-1 font-medium">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={userData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-ocean-lightPrimary dark:border-ocean-darkPrimary bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText focus:outline-none focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary transition"
            />
          </div>

          {/* Preferences */}
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="receiveEmails"
                checked={userData.receiveEmails}
                onChange={handleChange}
                className="rounded border-ocean-lightPrimary dark:border-ocean-darkPrimary text-ocean-lightPrimary dark:text-ocean-darkPrimary focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary"
              />
              <span>I would like to receive emails about MALT</span>
            </label>
            <br />
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="hideEmail"
                checked={userData.hideEmail}
                onChange={handleChange}
                className="rounded border-ocean-lightPrimary dark:border-ocean-darkPrimary text-ocean-lightPrimary dark:text-ocean-darkPrimary focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary"
              />
              <span>I do not want my email address to be viewable</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-ocean-lightPrimary hover:bg-ocean-lightSecondary dark:bg-ocean-darkPrimary dark:hover:bg-ocean-darkSecondary text-white font-semibold transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
