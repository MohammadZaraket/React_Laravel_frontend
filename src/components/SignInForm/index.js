import React, { useState, useEffect} from 'react';
import ContactUs from "../../pages/ContactUs";
//import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
//import { RouteComponentProps } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import axios from "axios";
import Cookie from "universal-cookie";


function SignInForm() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("q");
    const [redirect,setRedirect] = useState(false);
 
    const cookie = new Cookie();

    const navigate = useNavigate();


    function handleLoginSuccess(response) {
      set("access_token", response.access_token);
      return true;
    }


    
  async function doUserLogin(credentials) {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", credentials);
      return response.data;
    } catch (error) {
      console.error("Error", error.response);
      return false;
    }
  }

function set(key, value) {
  cookie.set(key, value);
}

   async function login(event){

    event.preventDefault();
        let item = {email,password};

        const response = await doUserLogin(item);
        if (response) {
          handleLoginSuccess(response);
          navigate("/dashboard");
        } else {
          alert("Please check your credentials and try agian");
        }

      }
    
    
  
    
  /* let result = await fetch("http://127.0.0.1:8000/api/login", {

    method: 'POST',
    headers: {
              "Content-Type":"application/json",
                "Accept": 'application/json'
            },
                
    body: JSON.stringify(item)
                });
              
    result = await result.json();
    if(JSON.stringify(result.access_token)){

        navigate('/Dashboard')
      }
      else{
         return ()
          }

    }*/
               
      /*let user_token =JSON.stringify(result.access_token);
      sessionStorage.setItem("user_token",user_token);*/

  return (
    <div className="App"> 
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" color="blue">
              SignIn
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              So You Can Access The Dashboard To Edit Profile
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" value={email} onInput={e => setEmail(e.target.value)} fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField  type="password" placeholder="Enter Password" label="password" variant="outlined" value={password} onInput={e => setPassword(e.target.value)} fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" onClick= {login} fullWidth>SignIn</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default SignInForm;