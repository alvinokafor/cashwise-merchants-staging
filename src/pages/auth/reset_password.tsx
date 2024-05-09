import React, { useState } from 'react';
import AuthPage from '../../components/Auth-form/form';

const ResetPage = () => {
  return (
   <>
   <AuthPage type="resetPassword" title="Reset Password" linkText="Already have an account? Login here" link={''} />
   </>
  );
};

export default ResetPage;
