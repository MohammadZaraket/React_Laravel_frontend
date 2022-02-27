import React, { useState, useEffect} from 'react';

import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';


function SignInForm() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

   async function login(event){

        let item = {email,password};
        event.preventDefault();
        console.log("hi shr")
    
            let result = await fetch("http://127.0.0.1:8000/api/login", {

                method: 'POST',
                headers: {
                    "Content-Type":"application/json",
                    "Accept": 'application/json'
                },
                body: JSON.stringify(item)
        
                });
        
                result = await result.json();
               
                let user_token =JSON.stringify(result.access_token);
                localStorage.setItem("user_token",user_token);

        }


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