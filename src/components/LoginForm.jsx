import React from 'react';
import { Link } from 'react-router-dom';
export default function LoginForm() {
  return (
    <div className="min-h-screen bg-ocean-lightBg dark:bg-ocean-darkBg flex items-center justify-center px-6 py-12 transition duration-300">
      <div className="max-w-md w-full bg-ocean-lightBg2 dark:bg-ocean-darkBg2 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-ocean-lightPrimary dark:text-ocean-darkPrimary mb-8 text-center">
          Welcome Back
        </h2>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ocean-lightText dark:text-ocean-darkText mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 rounded-md border border-ocean-lightPrimary dark:border-ocean-darkPrimary bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText placeholder-ocean-lightPrimary dark:placeholder-ocean-darkPrimary focus:outline-none focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-ocean-lightText dark:text-ocean-darkText mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-4 py-3 rounded-md border border-ocean-lightPrimary dark:border-ocean-darkPrimary bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText placeholder-ocean-lightPrimary dark:placeholder-ocean-darkPrimary focus:outline-none focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary transition"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-ocean-lightPrimary hover:bg-ocean-lightSecondary dark:bg-ocean-darkPrimary dark:hover:bg-ocean-darkSecondary text-white font-semibold transition"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-ocean-lightText dark:text-ocean-darkText">
            Not registered yet?{' '}
            <Link to={"/join"} className="ml-2 font-semibold text-ocean-lightPrimary hover:text-ocean-lightSecondary dark:text-ocean-darkPrimary dark:hover:text-ocean-darkSecondary transition">
                Join Us
            </Link>
          </p>
          <p className="text-sm text-ocean-lightText dark:text-ocean-darkText">
            Forgot Password?{' '}
            <Link to={"/reset"} className="ml-2 font-semibold text-ocean-lightPrimary hover:text-ocean-lightSecondary dark:text-ocean-darkPrimary dark:hover:text-ocean-darkSecondary transition">
                Reset password!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
