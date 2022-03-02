import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';
import axios from "axios";



function ContactForm() {


  const SignUpURL = "http://127.0.0.1:8000/api/store";
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");

  function contact(event) {
      event.preventDefault();
      let data = {name,email,subject,message};
      axios
        .post(SignUpURL, data).then((response) => {
          console.log("test")
        });
    }

  return (
    <div className="App"> 
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField placeholder="Enter Your name" label="Full Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField placeholder="Subject" label="Subject" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" onClick= {contact} color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default ContactForm;