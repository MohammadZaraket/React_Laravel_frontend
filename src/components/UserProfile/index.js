import React, { useState, useEffect} from 'react';
import ContactUs from "../../pages/ContactUs";
//import { Navigate } from 'react-router-dom';
import { renderMatches, useNavigate } from 'react-router-dom';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
//import { RouteComponentProps } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import axios from "axios";
import Cookie from "universal-cookie";


function UserProfile() {
      const [user, setUsers] = useState([]);

      const [name,setName] = useState("");
      const [email,setEmail] = useState("");
      
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
        <div>
            <ul> 
                <li>{name}</li>
             
             <li>
               {email}
             </li>

            </ul>
        </div>
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