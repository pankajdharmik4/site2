import React, { useState,useEffect } from 'react';
import { data } from '../data/data'
import axios from 'axios';
import { Check, Loader2, X } from "lucide-react";


const FormSection = () => {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{10,13}$/;
  const isValidName = /^[a-zA-Z\s]+$/;
  // State for each field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // State for errors
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // State to disable the submit button
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);



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
          console.log("tooken", token)
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

  // Validation functions
  const validateName = (name) => {
    const isValid = /^[a-zA-Z\s]+$/.test(name) && name.trim().length > 1;
    setNameError(isValid ? '' : 'Name should contain only alphabets and be at least 2 characters long.');
    return isValid;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setEmailError(isValid ? '' : 'Invalid email address.');
    return isValid;
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+?[0-9]{10,13}$/;
    if (phoneRegex.test(phone)) {
      setPhoneError('');
      return true;
    } else {
      setPhoneError('Invalid phone number.');
      return false;
    }
    return isValid;
  };

  const handleChange = (setter) => (e) => {
    const value = e.target.value;
    setter(value);

    const isFormValid = validateName(name) && validateEmail(email) && validatePhone(phone);
    setIsSubmitDisabled(!isFormValid);
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
        console.error("Error sending request: ", error.response ? error.response.data : error.message);
      } finally {
        setIsSubmitDisabled(false);
      }
    }
  };

  const validateForm = () => {
    const isNameValid = name.trim().length > 1;
    const isEmailValid = emailRegex.test(email)
    const isPhoneValid = phoneRegex.test(phone);

    setIsSubmitDisabled(!(isNameValid && isEmailValid && isPhoneValid));
  };

  return (
    <div id='contactus' className="flex flex-col md:flex-row py-8 mx-[5%] lg:mx-[10%]">
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center md:w-[100%]">
        {/* <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={beforeImage} alt="Before" />}
          itemTwo={<ReactCompareSliderImage src={afterImage} alt="After" />}
          position={50}
          className="w-[80%] h-auto"
        /> */}
        <img src="./images/SimonChardHeadshot.jpg" alt="" className='md:w-[70%] w-[60%]' />
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 md:w-[80%]">
          <h2 className="text-2xl mb-1 text-center font-montserrat font-semibold">
            {data.contactUs.title}
          </h2>
          <div className="mb-4">
            <p class="text-gray-400 text-xs">{data.contactUs.para}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => { validateName(name); validateForm() }}
                required
                className={`mt-1 block w-full p-2 border ${nameError ? 'border-red-500' : 'border-gray-300'} rounded-md placeholder-gray-400`}
              />
              {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => { validateEmail(email); validateForm() }}
                required
                className={`mt-1 block w-full p-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md placeholder-gray-400`}
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => { validatePhone(phone); validateForm() }}
                required
                className={`mt-1 block w-full p-2 border ${phoneError ? 'border-red-500' : 'border-gray-300'} rounded-md placeholder-gray-400`}
              />
              {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
            </div>
            <div className="mb-4">
              <textarea
                type="text"
                id="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div className="mt-6 mb-6">
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
            <button
              type="submit"
              className={isSubmitDisabled ? "w-full bg-[#808080] text-white font-montserrat font-semibold p-2 rounded-md hover:bg-[#808080] transition duration-300" : "w-full bg-[#00102d] text-white font-montserrat font-semibold p-2 rounded-md hover:bg-[#2e3d81] transition duration-300"}
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSection;