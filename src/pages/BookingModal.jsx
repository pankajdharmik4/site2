import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Check, Loader2, X } from "lucide-react";

const BookingModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{10,13}$/;
  const isValidName = /^[a-zA-Z\s]+$/;

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const recaptchaSiteKey = '6Lf_kLcqAAAAAEWDyplOb-RdtEcDmC-4ZnYqTE4j';

  useEffect(() => {
    loadRecaptcha();
  }, []);

  // Add useEffect to validate form whenever inputs change
  useEffect(() => {
    validateForm();
  }, [name, email, phone, recaptchaToken, recaptchaChecked]);

  const loadRecaptcha = () => {
    if (!window.grecaptcha) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
      script.onload = () => console.log('reCAPTCHA script loaded');
      script.onerror = () => console.error('Failed to load reCAPTCHA script');
      document.body.appendChild(script);
    }
  };

  const handleRecaptchaCheck = async (e) => {
    const checked = e.target.checked;
    setRecaptchaChecked(checked);
    
    if (checked) {
      setIsVerifying(true);
      try {
        if (window.grecaptcha) {
          const token = await window.grecaptcha.execute(recaptchaSiteKey, { action: 'submit' });
          setRecaptchaToken(token);
        } else {
          setRecaptchaChecked(false);
        }
      } catch (error) {
        console.error('reCAPTCHA error:', error);
        setRecaptchaChecked(false);
      } finally {
        setIsVerifying(false);
      }
    } else {
      setRecaptchaToken('');
    }
  };

  const validateName = (name) => {
    if (isValidName.test(name) && name.trim().length > 1) {
      setNameError('');
      return true;
    } else {
      setNameError('Invalid name. Please enter a valid name.');
      return false;
    }
  };

  const validateEmail = (email) => {
    if (emailRegex.test(email)) {
      setEmailError('');
      return true;
    } else {
      setEmailError('Invalid email address.');
      return false;
    }
  };

  const validatePhone = (phone) => {
    if (phoneRegex.test(phone)) {
      setPhoneError('');
      return true;
    } else {
      setPhoneError('Invalid phone number.');
      return false;
    }
  };

  const validateForm = () => {
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);
    const isValid = isNameValid && isEmailValid && isPhoneValid && recaptchaToken && recaptchaChecked;
    setIsSubmitDisabled(!isValid);
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSubmitDisabled) {
      setIsSubmitDisabled(true);
      try {
        const response = await axios.post('https://www.implants.rothleylodgedentalpractice.co.uk/my_server_project/public/index.php', {
          name, email, phone, message, recaptchaToken,
          type: 'Implants',
        });

        if (response.data.success) {
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          setRecaptchaChecked(false);
          setRecaptchaToken('');
          onClose();
        }
      } catch (error) {
        console.error('Error sending mail:', error);
      } finally {
        setIsSubmitDisabled(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 md:p-8 max-w-md w-full shadow-2xl relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h5 className="text-2xl font-bold text-gray-900 mb-2">Book Your Appointment</h5>
          <p className="text-gray-500 text-sm">Please fill out your details below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleInputChange(setName)}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  nameError ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                } focus:ring-2 focus:ring-opacity-20 ${
                  nameError ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                } transition-colors`}
                required
              />
              {nameError && <p className="mt-1 text-sm text-red-500">{nameError}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleInputChange(setEmail)}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  emailError ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                } focus:ring-2 focus:ring-opacity-20 ${
                  emailError ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                } transition-colors`}
                required
              />
              {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handleInputChange(setPhone)}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  phoneError ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                } focus:ring-2 focus:ring-opacity-20 ${
                  phoneError ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                } transition-colors`}
                required
              />
              {phoneError && <p className="mt-1 text-sm text-red-500">{phoneError}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <textarea
                id="message"
                value={message}
                onChange={handleInputChange(setMessage)}
                rows="3"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors"
              />
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <label className="relative flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={recaptchaChecked}
                      onChange={handleRecaptchaCheck}
                      disabled={isVerifying}
                      className="sr-only peer"
                    />
                    <div className={`
                      w-6 h-6 rounded-md border-2
                      ${isVerifying ? 'bg-gray-100 border-gray-300' : 
                        recaptchaChecked ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'}
                      flex items-center justify-center
                      transition-all duration-200
                      peer-disabled:opacity-50
                    `}>
                      {isVerifying ? (
                        <Loader2 className="w-4 h-4 text-gray-400 animate-spin" />
                      ) : recaptchaChecked ? (
                        <Check className="w-4 h-4 text-white" />
                      ) : null}
                    </div>
                  </label>
                  <span className="text-sm font-medium text-gray-700">
                    {isVerifying ? 'Verifying...' : 'I\'m not a robot'}
                  </span>
                </div>
                <img 
                  src="/images/recaptcha.png" 
                  alt="reCAPTCHA"
                  className="h-6 w-6 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitDisabled}
              className={`
                px-6 py-2.5 rounded-lg font-medium
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-opacity-50
                ${isSubmitDisabled 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-500'}
              `}
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;