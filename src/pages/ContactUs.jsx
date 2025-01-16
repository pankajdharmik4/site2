import React, { useState } from 'react';
import { data } from '../data/data'
import axios from 'axios';


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
          name,
          email,
          phone,
          message,
          type: 'Implants'
        });

        if (response.data.success) {
          console.log('Mail sent successfully');
          // Reset the form
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          onClose();
        } else {
          console.error('Failed to send mail:', response.data.error);
        }
      } catch (error) {
        console.error('Error sending mail:', error);
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