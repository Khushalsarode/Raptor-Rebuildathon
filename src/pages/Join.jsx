import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import seaanimal from '../assets/seaanimal.jpg';
import { Link } from 'react-router-dom';
const InputClass =
  'w-full px-4 py-2 rounded-md border border-ocean-lightPrimary focus:outline-none focus:ring-2 focus:ring-ocean-lightSecondary dark:bg-ocean-darkBg2 dark:text-white bg-white text-black transition';

export default function Join() {
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    address3: '',
    receiveEmails: false,
    hideEmail: false,
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.password) newErrors.password = 'Password is required.';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match.';
    if (!captchaValue) newErrors.captcha = 'Please complete the CAPTCHA.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert('Thank you for joining! Your information has been submitted.');
    handleCancel();
  };

  const handleCancel = () => {
    setFormData({
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      address3: '',
      receiveEmails: false,
      hideEmail: false,
    });
    recaptchaRef.current?.reset();
    setCaptchaValue(null);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText transition px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Aquatic Image */}
        <div className="hidden md:block">
          <img
            src={seaanimal}
            alt="Ocean life"
            className="rounded-2xl shadow-lg object-cover w-full h-[500px]"
          />
        </div>

        {/* Form Section */}
        <div className="bg-ocean-lightBg2 dark:bg-ocean-darkBg2 rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-center mb-4 text-ocean-lightPrimary dark:text-ocean-darkPrimary">
            Become a Member 🌊
          </h2>
          <p className="mb-6 text-center text-sm italic">
            Help us conserve and protect marine life. Fields marked <span className="text-red-500">*</span> are required.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { label: 'Username', name: 'username', required: true },
              { label: 'Password', name: 'password', required: true, type: 'password' },
              { label: 'Type password again', name: 'confirmPassword', required: true, type: 'password' },
              { label: 'Email', name: 'email', required: true, type: 'email' },
              { label: 'First Name', name: 'firstName' },
              { label: 'Last Name', name: 'lastName' },
              { label: 'Address Line 1', name: 'address1' },
              { label: 'Address Line 2', name: 'address2' },
              { label: 'Address Line 3', name: 'address3' },
            ].map(({ label, name, required, type = 'text' }) => (
              <div key={name}>
                <label htmlFor={name} className="block font-medium mb-1">
                  {label}:{required && <span className="text-red-600"> *</span>}
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required={required}
                  aria-invalid={errors[name] ? 'true' : 'false'}
                  className={InputClass}
                />
                {errors[name] && (
                  <p className="text-sm text-red-500 mt-1">{errors[name]}</p>
                )}
              </div>
            ))}

            {/* Checkboxes */}
            <div className="flex flex-col space-y-3 mt-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="receiveEmails"
                  checked={formData.receiveEmails}
                  onChange={handleChange}
                  className="form-checkbox text-ocean-lightPrimary"
                />
                <span className="ml-2">I'd like to receive marine conservation news</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="hideEmail"
                  checked={formData.hideEmail}
                  onChange={handleChange}
                  className="form-checkbox text-ocean-lightPrimary"
                />
                <span className="ml-2">Keep my email private</span>
              </label>
            </div>

            {/* reCAPTCHA */}
            <div className="mt-6 flex justify-center">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={(value) => setCaptchaValue(value)}
                ref={recaptchaRef}
                theme="light"
              />
            </div>
            {errors.captcha && (
              <p className="text-sm text-center text-red-500 mt-2">{errors.captcha}</p>
            )}

            {/* Buttons */}
            <div className="flex justify-center gap-6 mt-6">
              <button
                type="submit"
                className="px-8 py-2 bg-ocean-lightPrimary hover:bg-ocean-lightSecondary dark:bg-ocean-darkPrimary dark:hover:bg-ocean-darkSecondary text-white font-semibold rounded-md transition shadow"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-8 py-2 border border-ocean-lightPrimary hover:bg-ocean-lightPrimary hover:text-white text-ocean-lightPrimary font-semibold rounded-md transition shadow"
              >
                Cancel
              </button>
              
            </div>
            
          </form>
                 <div className="mt-6 text-center">
                   <p className="text-sm text-ocean-lightText dark:text-ocean-darkText">
                     Not registered yet?{' '}
                     <Link to={"/login"} className="ml-2 font-semibold text-ocean-lightPrimary hover:text-ocean-lightSecondary dark:text-ocean-darkPrimary dark:hover:text-ocean-darkSecondary transition">
                         Join Us
                     </Link>
                   </p>
                 </div>
         
        </div>
        
      </div>
      
    </div>
  );
}
