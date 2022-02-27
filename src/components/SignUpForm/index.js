import React, { useState, useEffect} from 'react';

import ContactUs from "../../pages/ContactUs";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';


function SignUpForm() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [redirect,setRedirect] = useState(false);
 

    const navigate = useNavigate();

   async function signUP(event){

    event.preventDefault();
        let item = {name,email,password,confirmPassword};
  
        console.log("hi shr")
    
            let result = await fetch("http://127.0.0.1:8000/api/register", {

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
                  return (
                    <p>Password and Email aren't matched</p>
                  )
                }

              }
               

  return (
    <div className="App"> 
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" color="blue">
              SignUp
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              So You Can Access The Dashboard To Edit Profile
          </Typography> 
            <form>
              <Grid container spacing={1}>
              <Grid item xs={12}>
                  <TextField placeholder="Enter Your Name" label="Name" variant="outlined" value={name} onInput={e => setName(e.target.value)} fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" value={email} onInput={e => setEmail(e.target.value)} fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField  type="password" placeholder="Enter Password" label="password" variant="outlined" value={password} onInput={e => setPassword(e.target.value)} fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField  type="password" placeholder="Confirm Password" label="Confirm password" variant="outlined" value={confirmPassword} onInput={e => setConfirmPassword(e.target.value)} fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" onClick= {signUP} fullWidth>SignUp</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default SignUpForm;