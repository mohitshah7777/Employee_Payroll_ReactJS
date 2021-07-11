import React from 'react';
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import {loginAxios} from '../services/user'

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
        const user = {
            email: this.state.formData.email,
            password: this.state.formData.password,
        };
        console.log(user);

        loginAxios(user);

        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });

        this.setState({
            formData: {
                email: '',
                password: ''
            }
        })
    }

    render() {
        const paperStyle = { padding: '20px 30px', width: 260, height: 440, margin: "40px auto" }
        const hStyle = { margin: '5px', color: '#3F51B5' }
        const btnstyle = { margin: '15px 65px', width: 125 }
        const textStyle = { margin: '5px 0px' }
        const signInStyle = { margin: '15px 5px' }
        const forgotStyle = { margin: '0px 0px', fontSize: '14px' }
        const { formData, submitted } = this.state
        console.log(formData)

        return (
            <Grid>
                <Paper elevation={20} style={paperStyle}>
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
                        <Typography style={forgotStyle}>
                            <Link style={{ color: '#1A73E8', textDecoration: 'inherit' }} href="#" >
                                Forgot password?
                            </Link>
                        </Typography>
                        <Button
                            type='submit'
                            color='primary'
                            variant="contained"
                            style={btnstyle}
                            fullWidth
                            disabled={submitted}>{
                                (submitted && 'Logged In!') || (!submitted && 'Sign In')
                            }</Button>
                        <Typography style={signInStyle}> Do you have an account?
                            <Link to={'/register'} style={{ color: '#1A73E8', textDecoration: 'inherit' }}>
                                Sign Up
                            </Link>
                        </Typography>
                    </ValidatorForm>
                </Paper>
            </Grid>
        )
    }
}
