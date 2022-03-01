import React, { useState, useEffect} from 'react';
import axios from "axios";
import Cookie from "universal-cookie";
import { Grid, TextField, Button , Typography } from '@mui/material/';


function UserProfile() {

      var [name,setName] = useState("");
      var [email,setEmail] = useState("");
      const [password,setPassword] = useState("");
      const [password_confirmation,setPassword_confirmation] = useState("");
      
      const cookies = new Cookie();
      const [cookie, setCookie] = useState(cookies.get('access_token'))  

      const config = {
        headers: { Authorization: `Bearer ${cookie}` }
    };

      
      const fetchData = async (event) => {
             event.preventDefault();
            var response = await axios.get("http://127.0.0.1:8000/api/user-profile", config);
            console.log(response.data);
            setName(response.data.name);
            setEmail(response.data.email);
        }
        
      async function doUserUpdate(credentials) {
        try {
          const response = await axios.post("http://127.0.0.1:8000/api/updateProfile", credentials,config);
          return response.data;
         
        } catch (error) {
          console.error("Error", error.response);
          return false;
        }
      }
    
        
   async function updateProfile(event){

    event.preventDefault();
        let item = {name,email,password,password_confirmation};
        const response = await doUserUpdate(item);
        if(response){
            alert("User Info Updated Successfully!");
        }
      }

    
      return (
          <div>
        <form>
        <Typography gutterBottom variant="h5" color="blue">
              Click Button To Show Your Info
          </Typography> 
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" onClick= {fetchData} > Show</Button>
          </Grid>
      </form>
 

        <form>
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <TextField type="email" placeholder="Enter email" helperText="Enter Your Edited Email" label="Email" variant="outlined" value={email} onInput={e => setEmail(e.target.value)}  required />
          </Grid>


          <Grid item xs={6}>
            <TextField type="password" placeholder="Enter password" helperText="Enter Your Edited Password" label="Password" variant="outlined" value={password} onInput={e => setPassword(e.target.value)}  required />
          </Grid>

          <Grid item xs={6}>
            <TextField  placeholder="Enter Name" helperText="Enter Your Edited Name" label="Name" variant="outlined" value={name} onInput={e => setName(e.target.value)}  required />
          </Grid>

          <Grid item xs={6}>
            <TextField type="password" placeholder="Enter password" helperText="Enter Your Edited Password" label="Password Confirmation" variant="outlined" value={password_confirmation} onInput={e => setPassword_confirmation(e.target.value)}  required />
          </Grid>
    
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" onClick= {updateProfile} >Save New</Button>
          </Grid>

        </Grid>
      </form>
      </div>
 

      )
    


}

export default UserProfile;