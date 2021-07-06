import React, { Component } from 'react';
import { Grid, Paper, TextField, Avatar, Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const Register = () => {
    const paperStyle = { padding: '20px 50px', width: 350, margin: "50px auto" }
    const avatarStyle = { backgroundColor: '#3F51B5' }
    const btnstyle = { margin: '20px 50px', width: 100, }
    const btn2style = { margin: '20px 5px', width: 100, }
    const textStyle = { margin: '8px 0' }

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><PersonIcon /></Avatar>
                    <p></p>
                    <h2>Register Employee</h2>
                </Grid>
                <form>
                    <TextField style={textStyle} size='small' label='First name' placeholder='Enter first name' variant='outlined' fullWidth required />
                    <TextField style={textStyle} size='small' label='Last name' placeholder='Enter last name' variant='outlined' fullWidth required />
                    <TextField style={textStyle} size='small' label='Email' placeholder='Enter email' variant='outlined' fullWidth required />
                    <TextField style={textStyle} size='small' label='Password' placeholder='Enter password' type='password' variant='outlined' fullWidth required />
                    <TextField style={textStyle} size='small' label='Confirm password' placeholder='Enter password again' type='password' variant='outlined' fullWidth required />                </form>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign up</Button>
                <Button type='reset' color='grey' variant="contained" style={btn2style} fullWidth>cancel</Button>
            </Paper>
        </Grid>
    )
}

export default Register