import React, { useState, useRef } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { IoMdFlag } from 'react-icons/io';
import { BsShopWindow } from "react-icons/bs";
import landing from '../../assets/background/landing.jpg';
import logo from '../../assets/Logo.png';
import { signUpUser, loginUser, verifyOTP, resetPassword } from '../../config/api'; // Import Axios functions
import { ToastContainer } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AuthPage = ({ type, title, linkText, link }) => {
 const navigate = useNavigate();
 const location = useLocation();

 // Function to navigate to the login page relative to the current location
 const navigateToLogin = () => {
   navigate(`${link}`);
 };
  // State to toggle password visibility
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessName, setBusinessname] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailvalue, setEmailValue] = useState('info@gmail.com');
  // State for OTP inputs
  const [otpInputs, setOtpInputs] = useState(['', '', '', '', '', '']);
  // Ref for focusing the next OTP input
  const otpInputRefs = useRef([]);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle OTP input change
  const handleOtpInputChange = (index, value) => {
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = value;
    setOtpInputs(newOtpInputs);

    // Focus next input when typing in the current one
    if (index < otpInputs.length - 1 && value) {
      otpInputRefs.current[index + 1].focus();
    }
  };

  // Function to get the appropriate flag icon based on country code
  const getFlagIcon = (countryCode) => {
    switch (countryCode) {
      case 'usa':
      case 'uk':
      case 'nigeria':
        return <IoMdFlag />;
      default:
        return <IoMdFlag />; // Default to a flag icon
    }
  };

// Function to handle form submission
const handleSubmit = async () => {
    try {
      // Call API function based on the form type
      if (type === 'signup') {
        const userData = { email, firstName, lastName, businessName, password };
        await signUpUser(userData,navigate);
      } else if (type === 'login') {
        const userData = { email, password };
        await loginUser(userData,navigate);
      } else if (type === 'resetPassword') {
        const userData = { email };
        await resetPassword(userData.email);
      } else if (type === 'otp') {
        const otp = otpInputs.join('')
        const emailValue = localStorage.getItem('email');
        if (emailValue) {
          setEmailValue(emailValue);
        } 
        const email = emailvalue
        const otpData = { email, otp };
        await verifyOTP(otpData,navigate);
      }
  
      // Handle success response
    } catch (error) {
      // Handle error response
    }
  };
  

  // Reusable input component
  const Input = ({ type, placeholder, value, onChange, otpIndex }) => {
    if (type === 'otp') {
      return (
        <input
          ref={el => (otpInputRefs.current[otpIndex] = el)}
          type="text"
          maxLength={1}
          value={otpInputs[otpIndex]}
          onChange={(e) => handleOtpInputChange(otpIndex, e.target.value)}
          className="bg-gray-100 placeholder-gray-400 focus:outline-none w-12 h-12 text-center mx-2 my-2 rounded-lg"
          style={{padding: '0.5rem'}}
        />
      );
    }
  
    return (
      <div className="flex items-center border bg-gray-100 border-gray-100 rounded-lg px-4 py-2 mb-2">
        <BsShopWindow className="mr-2" />
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-gray-100 placeholder-gray-400 focus:outline-none w-full"
        />
      </div>
    );
  };

  // Conditional rendering based on the page type
  let formFields;
  if (type === 'login') {
    formFields = (
      <>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className="bg-gray-100 flex items-center border border-gray-100 rounded-lg px-4 py-2 mb-2">
          <FaEnvelope className="mr-2" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 placeholder-gray-400 focus:outline-none w-full"
          />
          <button onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </>
    );
  } else if (type === 'resetPassword') {
    formFields = (
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    );
  } else if (type === 'otp') {
    formFields = (
      <div className="flex items-center justify-center">
        {otpInputs.map((otp, index) => (
          <Input key={index} type="otp" otpIndex={index} />
        ))}
      </div>
    );
  } else {
    // Default to sign up page with all fields
    formFields = (
      <>
        <div className="bg-gray-100 flex items-center border border-gray-100 rounded-lg px-4 py-2 mb-2">
          {getFlagIcon('usa')}
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="bg-gray-100 placeholder-gray-400 focus:outline-none w-full"
          />
        </div>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <Input type="text" placeholder="Business Name" value={businessName} onChange={(e) => setBusinessname(e.target.value)} />
        <div className="bg-gray-100 flex items-center border border-gray-100 rounded-lg px-4 py-2 mb-2">
          <FaEnvelope className="mr-2" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 placeholder-gray-400 focus:outline-none w-full"
          />
          <button onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="flex">
      {/* Left Div */}
      <ToastContainer />
      <div 
        className="hidden md:w-1/4 md:flex items-center justify-center fixed h-full "
        style={{ backgroundImage: `url(${landing})`, backgroundSize: 'cover' }}
      >
        <div className="absolute top-0 left-0 m-4">
          <img src={`${logo}`} alt="Logo" className="w-8 h-8" />
        </div>
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">Cashwise Merchants</h1>
        </div>
      </div>

      {/* Right Div bg-gray-100*/}
      <div className="bg-white w-full md:ml-[26%]w-3/4 flex ml-0 md:ml-[26%] items-center justify-center flex-col">
        <div className="text-center mt-5 md:w-[40%] relative">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-8">Sign up with social account</p>
    
          <button className="flex items-center justify-center rounded-xl bg-white border border-gray-300 w-[100%] px-4 py-2 mb-6">
            <FcGoogle size={25} className="mr-2" />
            <span style={{fontSize:20,fontWeight:"400"}}>Google</span>
          </button>
          <hr className="w-[100%] border-gray-300 mb-8" />
          <p className="text-gray-600 mb-4">Or create with email address</p>
          <div className="flex flex-col mb-4">
            {formFields}
          </div>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 my-3 w-[100%] rounded-lg mb-4">Submit</button>
          <p className="text-gray-600 text-sm">
            By signing up, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
          </p>
          <p className="text-gray-600 text-sm my-3" onClick={navigateToLogin}>
              {linkText}
        </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
