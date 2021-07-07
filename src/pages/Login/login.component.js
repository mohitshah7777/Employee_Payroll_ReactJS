import React from 'react';
import { Grid, Paper, Button, Typography, Link } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class Login extends React.Component {
    state = {
        formData: {
            email: '',
            password: ''
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    render() {
        const paperStyle = { padding: '10px 30px', width: 260, height: '78vh', margin: "0px auto" }
        const hStyle = { margin: '5px' ,color: '#3F51B5' }
        const btnstyle = { margin: '15px 65px', width: 125 }
        const textStyle = { margin: '5px 0px' }
        const signInStyle = { margin: '0px 5px' }
        const forgotStyle = { margin: '0px 60px' }
        const { formData, submitted } = this.state
        console.log(formData)

        return (
            <Grid>
                <Paper  style={paperStyle}>
                    <Grid align='center'>
                        <h3 style={hStyle}>EMPLOYEE PAYROLL APP</h3>
                        <h3>Login</h3>
                    </Grid>
                    <ValidatorForm useref='form' onSubmit={this.handleSubmit}>
                        <TextValidator
                            style={textStyle}
                            size='small'
                            label='Email'
                            placeholder='Enter email'
                            variant='outlined'
                            name='email'
                            fullWidth
                            onChange={this.handleChange}
                            value={formData.email}
                            validators={['required', 'isEmail']}
                            errorMessages={["this field is required", "Email is not valid"]}
                        />
                        <TextValidator
                            style={textStyle}
                            size='small'
                            label='Password'
                            placeholder='Enter password'
                            type='password'
                            variant='outlined'
                            name='password'
                            fullWidth
                            onChange={this.handleChange}
                            value={formData.password}
                            validators={['required']}
                            errorMessages={["this field is required"]}
                        />
                       <Button
                            type='submit'
                            color='primary'
                            variant="contained"
                            style={btnstyle}
                            fullWidth
                            disabled={submitted}>{
                                (submitted && 'Logged In!') || (!submitted && 'Sign In')
                            }</Button>
                            <Typography style={forgotStyle}>
                     <Link href="#" >
                        Forgot password?
                </Link>
                </Typography>
                <Typography style={signInStyle}> Do you have an account? 
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
                    </ValidatorForm>
                </Paper>
            </Grid>
        )
    }
}
