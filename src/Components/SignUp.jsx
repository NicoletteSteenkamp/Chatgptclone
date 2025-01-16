import { SignUp as ClerkSignUp } from "@clerk/clerk-react"; // Rename imported SignUp component

const SignUpPage = () => ( 
  <div className="wrapper">
   
    <ClerkSignUp /> 
  </div>
);

export default SignUpPage;
