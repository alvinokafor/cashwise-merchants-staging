import AuthPage from '../../components/Auth-form/form';

const LoginPage = () => {
  return (
   <>
   <AuthPage type="login" title="Sign In" linkText="Dont have an account? SignUp here" link="/auth/signup/" />
   </>
  );
};

export default LoginPage;
