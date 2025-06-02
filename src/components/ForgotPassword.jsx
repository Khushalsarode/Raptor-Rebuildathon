import React, { useState } from 'react';

export default function ForgotPassword() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add actual password reset logic here
    alert(`If an account exists for "${input}", we'll send password reset instructions.`);
  };

  return (
    <div className="min-h-screen bg-ocean-lightBg dark:bg-ocean-darkBg flex items-center justify-center px-6 py-12 transition duration-300">
      <div className="max-w-md w-full bg-ocean-lightBg2 dark:bg-ocean-darkBg2 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-ocean-lightPrimary dark:text-ocean-darkPrimary mb-4 text-center">
          Forgot Password
        </h2>
        <p className="text-center text-base text-ocean-lightText dark:text-ocean-darkText mb-8">
          Please enter your username or email address and we will send you your login information.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="userInput"
              className="block text-sm font-medium text-ocean-lightText dark:text-ocean-darkText mb-1"
            >
              Username or Email
            </label>
            <input
              type="text"
              id="userInput"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
              placeholder="Your username or email"
              className="w-full px-4 py-3 rounded-md border border-ocean-lightPrimary dark:border-ocean-darkPrimary bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText placeholder-ocean-lightPrimary dark:placeholder-ocean-darkPrimary focus:outline-none focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-ocean-lightPrimary hover:bg-ocean-lightSecondary dark:bg-ocean-darkPrimary dark:hover:bg-ocean-darkSecondary text-white font-semibold transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
