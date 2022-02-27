import React, { useState, useEffect} from 'react';
import ContactUs from "../../pages/ContactUs";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import axios from "axios";


function SignUpForm() {

    const navigate = useNavigate();

    const SignUpURL = "http://127.0.0.1:8000/api/register";
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [password_confirmation,setPassword_confirmation] = useState("");

    function signUP(event) {
        event.preventDefault();
        let data = {name,email,password,password_confirmation};
        axios
          .post(SignUpURL, data).then((response) => {
           /* setEmail(response.data);
            setPassword(response.data);
            setName(response.data);
            setConfirmPassword(response.data);*/

            navigate('/SignIn')
            console.log("test")
          });
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
              Create An Account To Enjoy Our Services
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
                  <TextField  type="password" placeholder="Confirm Password" label="Confirm password" variant="outlined" value={password_confirmation} onInput={e => setPassword_confirmation(e.target.value)} fullWidth required />
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