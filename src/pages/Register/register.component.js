import React from 'react';
import { Grid, Paper, Avatar, Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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
        const paperStyle = { padding: '20px 50px', width: 350, margin: "50px auto" }
        const avatarStyle = { backgroundColor: '#3F51B5' }
        const btnstyle = { margin: '20px 50px', width: 100, }
        const btn2style = { margin: '20px 5px', width: 100, }
        const textStyle = { margin: '8px 0' }
        const { formData, submitted } = this.state
        // const onSubmit = (formData) => console.log(formData)
        console.log(formData)

        return (
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><PersonIcon /></Avatar>
                        <p></p>
                        <h2>Register Employee</h2>
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

                        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth disabled={submitted}>  {
                            (submitted && 'Registered!')
                            || (!submitted && 'Sign up')
                        }</Button>
                        <Button type='reset' variant="contained" style={btn2style} fullWidth>cancel</Button>
                    </ValidatorForm>
                </Paper>
            </Grid>
        )
    }
}
