import { SignIn } from "@clerk/clerk-react";
import "./Login.css"; 

const Login = () => {
  return (
    <div className="wrapper">
    
        <SignIn />
     
    </div>
  );
};

export default Login;
