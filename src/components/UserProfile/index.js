import React, { useState, useEffect} from 'react';
import ContactUs from "../../pages/ContactUs";
//import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
//import { RouteComponentProps } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import axios from "axios";
import Cookie from "universal-cookie";


function UserProfile() {


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
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField  type="password" placeholder="Enter Password" label="password" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>SignIn</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default UserProfile;