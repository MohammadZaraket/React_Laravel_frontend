import React from 'react';
import SignUpForm from "../../components/SignUpForm";
import { Link } from "react-router-dom";

const SignUp = () => {


   return(

    <div>
      <SignUpForm/>
      <h6>Already Have An Account?</h6>
      <nav>
         <Link to="/SignIn">SignIn</Link>
      </nav>
    </div>

   );
};

export default SignUp;