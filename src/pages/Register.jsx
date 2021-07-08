import React from 'react';
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
    state = {
        formData: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
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
        const paperStyle = { padding: '20px 30px', width: 260, height: 'auto', margin: "40px auto" }
        const hStyle = { margin: '5px', color: '#3F51B5' }
        const btnstyle = { margin: '15px 65px', width: 125 }
        const textStyle = { margin: '5px 0' }
        const signUpStyle = { margin: '5px 5px' }

        const { formData, submitted } = this.state
        // const onSubmit = (formData) => console.log(formData)
        console.log(formData)

        return (
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <h3 style={hStyle}>EMPLOYEE PAYROLL APP</h3>
                        <h3>Register</h3>
                    </Grid>
                    <ValidatorForm useref='form' onSubmit={this.handleSubmit}>
                        <TextValidator
                            name='firstName'
                            onChange={this.handleChange}
                            style={textStyle}
                            value={formData.firstName}
                            validators={['required']}
                            errorMessages={["this field is required"]}
                            size='small'
                            label='First name'
                            placeholder='Enter first name'
                            variant='outlined'
                            fullWidth
                        />
                        <TextValidator
                            name='lastName'
                            style={textStyle}
                            size='small'
                            label='Last name'
                            placeholder='Enter last name'
                            variant='outlined'
                            fullWidth
                            onChange={this.handleChange}
                            value={formData.lastName}
                            validators={['required']}
                            errorMessages={["this field is required"]}
                        />
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
                        <TextValidator
                            style={textStyle}
                            size='small'
                            label='Confirm password'
                            placeholder='Enter password again'
                            type='password'
                            variant='outlined'
                            name='confirmPassword'
                            fullWidth
                            onChange={this.handleChange}
                            value={formData.confirmPassword}
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
                                (submitted && 'Registered!') || (!submitted && 'Sign up')
                            }</Button>

                        <Typography style={signUpStyle}> Already have an account?
                            <Link to={'/login'}>
                                Sign In
                            </Link>
                        </Typography>
                    </ValidatorForm>
                </Paper>
            </Grid>
        )
    }
}
