import React, { useState } from 'react'
import seaanimals from '../assets/seaanimal.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referral: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', referral: '', message: '' })
  }

  return (
<div
  className="my-16 max-w-6xl mx-auto p-8 rounded-2xl
             bg-gradient-to-tr from-cyan-50 to-blue-100
             dark:from-[#012A4A] dark:to-[#023E73]
             shadow-lg
             text-[#022B3A] dark:text-[#E0FBFC]
             transition-colors duration-500
             ring-1 ring-cyan-200 dark:ring-cyan-800
             grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
>
      <div className="hidden md:block">
        <img
          src={seaanimals}
          alt="Contact illustration"
          className="rounded-3xl shadow-lg object-cover w-full h-[450px]"
        />
      </div>
      <div>
        <h2 className="text-4xl font-extrabold mb-10 text-center md:text-left tracking-tight drop-shadow-sm">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block mb-3 text-lg font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Jane Doe"
              className="w-full px-5 py-3 rounded-xl border border-cyan-300
                         bg-white dark:bg-[#01497C]
                         text-gray-900 dark:text-cyan-100
                         placeholder-gray-400 dark:placeholder-cyan-300
                         focus:outline-none focus:ring-4 focus:ring-cyan-400
                         transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-3 text-lg font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-5 py-3 rounded-xl border border-cyan-300
                         bg-white dark:bg-[#01497C]
                         text-gray-900 dark:text-cyan-100
                         placeholder-gray-400 dark:placeholder-cyan-300
                         focus:outline-none focus:ring-4 focus:ring-cyan-400
                         transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="referral" className="block mb-3 text-lg font-medium">
              How did you hear about us?
            </label>
            <select
              id="referral"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl border border-cyan-300
                         bg-white dark:bg-[#01497C]
                         text-gray-900 dark:text-cyan-100
                         placeholder-gray-400 dark:placeholder-cyan-300
                         focus:outline-none focus:ring-4 focus:ring-cyan-400
                         transition duration-300"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Referral">Referral</option>
              <option value="Search Engine">
                Search Engine (Google, Yahoo, AOL, etc.)
              </option>
              <option value="Link from another site">Link from another site</option>
              <option value="Bookmark">Bookmark</option>
              <option value="Marketing Materials">Marketing Materials</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block mb-3 text-lg font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="w-full px-5 py-4 rounded-xl border border-cyan-300
                         bg-white dark:bg-[#01497C]
                         text-gray-900 dark:text-cyan-100
                         placeholder-gray-400 dark:placeholder-cyan-300
                         focus:outline-none focus:ring-4 focus:ring-cyan-400
                         transition duration-300 resize-none"
            />
          </div>

            <div className="text-center md:text-left">
            <button
              type="submit"
              className="inline-block bg-cyan-500 dark:bg-cyan-400
                         text-white dark:text-[#012A4A] font-semibold
                         px-12 py-3 rounded-full shadow-lg
                         hover:bg-cyan-600 dark:hover:bg-cyan-300
                         focus:outline-none focus:ring-4 focus:ring-cyan-300
                         transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

     
    </div>
  )
}

export default Contact
