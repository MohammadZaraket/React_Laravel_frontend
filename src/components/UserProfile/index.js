import React, { useState, useEffect} from 'react';
import ContactUs from "../../pages/ContactUs";
//import { Navigate } from 'react-router-dom';
import { renderMatches, useNavigate } from 'react-router-dom';
//import { RouteComponentProps } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import axios from "axios";
import Cookie from "universal-cookie";
//import {Tabs, Tab, Col, Row}  from 'react-bootstrap';

import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';



function UserProfile() {
      const [user, setUsers] = useState([]);

      var [name,setName] = useState("");
      var [email,setEmail] = useState("");
      
      const cookies = new Cookie();
      const [cookie, setCookie] = useState(cookies.get('access_token'))  

      const config = {
        headers: { Authorization: `Bearer ${cookie}` }
    };

      
      const fetchData = async () => {
            var response = await axios.get("http://127.0.0.1:8000/api/user-profile", config);
            console.log(response.data);
            setName(response.data.name);
            setEmail(response.data.email);
        }



        fetchData();
     
    
      return (
        <form>
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <TextField type="email" placeholder="Enter email" helperText="Enter Your Edited Email" label="Email" variant="outlined" value={email} onInput={e => setEmail(e.target.value)}  required />
          </Grid>
    
          <Grid item xs={6}>
            <TextField  placeholder="Enter Name" helperText="Enter Your Edited Name" label="Name" variant="outlined" value={name} onInput={e => setName(e.target.value)}  required />
          </Grid>
  
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" >Save New</Button>
          </Grid>

        </Grid>
      </form>
 

      )
    
     /* const fetchData = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/user-profile")
        const data = await response.json()
        setUsers(data)
      }
    
      useEffect(() => {
        fetchData()
      }, [])
         <li key={user.id}>{user.name}</li>*/


}

export default UserProfile;