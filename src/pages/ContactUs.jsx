import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import beforeImage from '../assets/002.jpg';
import afterImage from '../assets/001.jpg';

const FormSection = () => {
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
    const isValid = phoneRegex.test(phone);
    setPhoneError(isValid ? '' : 'Invalid phone number.');
    return isValid;
  };

  const handleChange = (setter, validator) => (e) => {
    const value = e.target.value;
    setter(value);
    validator(value);

    const isFormValid = validateName(name) && validateEmail(email) && validatePhone(phone);
    setIsSubmitDisabled(!isFormValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateName(name) && validateEmail(email) && validatePhone(phone)) {
      // Handle form submission logic
      console.log({ name, email, phone, message });
      // Clear form data after submission
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsSubmitDisabled(true);
    }
  };

  return (
    <div id='contactus' className="flex flex-col md:flex-row py-16 mx-[5%] lg:mx-[10%]">
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        {/* <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={beforeImage} alt="Before" />}
          itemTwo={<ReactCompareSliderImage src={afterImage} alt="After" />}
          position={50}
          className="w-[80%] h-auto"
        /> */}
        <img src="./images/contactus.png" alt="" />
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 md:w-[80%]">
          <h2 className="text-2xl mb-1 text-center font-montserrat font-semibold">
            Take The First Step Toward The Smile You’ve Always Wanted
          </h2>
          <div className="mb-4">
            <p class="text-gray-400 text-xs">Please fill out your details and a member of our team will be in touch.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={handleChange(setName, validateName)}
                required
                className={`mt-1 block w-full p-2 border ${nameError ? 'border-red-500' : 'border-gray-300'} rounded-md placeholder-gray-400`}
              />
              {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleChange(setEmail, validateEmail)}
                required
                className={`mt-1 block w-full p-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md placeholder-gray-400`}
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                value={phone}
                onChange={handleChange(setPhone, validatePhone)}
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