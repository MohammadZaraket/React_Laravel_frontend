import React from 'react';
import SignInForm from "../../components/SignInForm";
import { Link } from "react-router-dom";


const SignIn = () => {


   return(

    <div>
       <h3>Sign In To React Project</h3>
      <SignInForm/>
      <h6>Don't Have An Account?</h6>
      <nav>
         <Link to="/SignUp">SignUp</Link>
      </nav>
    </div>

   );
};

export default SignIn;