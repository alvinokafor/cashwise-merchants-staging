import AuthPage from '../../components/Auth-form/form';

const SignUpPage = () => {
  return (
   <>
   <AuthPage type="signup" title="Sign Up" linkText="Already have an account? Login here" link="/auth/login/" />
   </>
  );
};

export default SignUpPage;
