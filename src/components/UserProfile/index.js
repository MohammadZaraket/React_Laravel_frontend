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
      const [user, setUsers] = useState([])
 


        const cookies = new Cookie();
        const [cookie, setCookie] = useState(cookies.get('access_token'))  
    
     /* const fetchData = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/user-profile")
        const data = await response.json()
        setUsers(data)
      }
    
      useEffect(() => {
        fetchData()
      }, [])
         <li key={user.id}>{user.name}</li>*/
         const config = {
            headers: { Authorization: `Bearer ${cookie}` }
        };
        
    
        
        axios.get( 
          'http://127.0.0.1:8000/api/user-profile',
          config
        ).then(console.log).catch(console.log);
    
      return (
        <div>
            <ul>
             <li>
               
             </li>

            </ul>
        </div>
      )
}

export default UserProfile;