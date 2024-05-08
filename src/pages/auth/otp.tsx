import React, { useState } from 'react';
import AuthPage from '../../components/Auth-form/form';

const OtpPage = () => {
  return (
   <>
   <AuthPage type="otp" title="Otp" linkText="Already have an account? Login here" />
   </>
  );
};

export default OtpPage;
