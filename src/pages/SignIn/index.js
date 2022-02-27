import React from 'react';
import SignInForm from "../../components/SignInForm";
import Dashboard from "../Dashboard";
import { Routes, Route, Link } from "react-router-dom";


const SignIn = () => {


   return(

    <div>
      <SignInForm/>
      <h6>Don't Have An Account?</h6>
      <nav>
         <Link to="/SignUp">SignUp</Link>
      </nav>
    </div>

   );
};

export default SignIn;