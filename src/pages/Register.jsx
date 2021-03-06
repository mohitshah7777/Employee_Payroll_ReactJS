import React from 'react';
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router} from "react-router-dom";
import Service from '../services/user'
const service = new Service();

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

    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.formData.password) {
                return false;
            }
            return true;
        });
    }

    componentWillUnmount() {
        ValidatorForm.removeValidationRule('isPasswordMatch')
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        if (event.target.name === 'password') {
            this.form.isFormValid(false);
        }
        this.setState({ formData });
    }

    handleRedirect = () => {
        this.props.history.push('/')
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            firstName: this.state.formData.firstName,
            lastName: this.state.formData.lastName,
            email: this.state.formData.email,
            password: this.state.formData.password,
            confirmPassword: this.state.formData.confirmPassword
        };
        console.log(user);

        service.registerAxios(user)
            .then((res) => {
                alert(res.data.message)
            }).catch((error) => {
                alert(error.message)
            })

        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        })

        this.setState({
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        })
        this.props.history.push('/')
    }

    render() {
        const paperStyle = { padding: '20px 30px', width: 260, height: 'auto', margin: "40px auto" }
        const hStyle = { margin: '5px', color: '#3F51B5' }
        const btnstyle = { margin: '15px 65px', width: 125 }
        const textStyle = { margin: '5px 0' }
        const signUpStyle = { margin: '5px 5px' }

        const { formData, submitted } = this.state
        console.log(formData)

        return (
            <Router>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <h3 id="h3tag" style={hStyle}>EMPLOYEE PAYROLL APP</h3>
                        <h3>Register</h3>
                    </Grid>
                    <ValidatorForm data-testid="form" ref={r => (this.form = r)} onSubmit={this.handleSubmit}>
                        <TextValidator
                            data-testid="firstname"
                            name='firstName'
                            onChange={this.handleChange}
                            style={textStyle}
                            value={formData.firstName}
                            validators={['required', 'matchRegexp:^[a-zA-Z]{2,}']}
                            errorMessages={["this field is required", "Minimum 2 characters"]}
                            size='small'
                            label='First name'
                            placeholder='Enter first name'
                            variant='outlined'
                            fullWidth
                            autoComplete='off'
                        />
                        <TextValidator
                            data-testid="lastname"
                            name='lastName'
                            style={textStyle}
                            size='small'
                            label='Last name'
                            placeholder='Enter last name'
                            variant='outlined'
                            fullWidth
                            onChange={this.handleChange}
                            value={formData.lastName}
                            validators={['required', 'matchRegexp:^[a-zA-Z]{2,}']}
                            errorMessages={["this field is required", "Minimum 2 characters"]}
                            autoComplete='off'
                        />
                        <TextValidator
                            data-testid="email"
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
                            errorMessages={["this field is required", "Email is not valid",]}
                            autoComplete='off'
                        />
                        <TextValidator
                            data-testid="password"
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
                            autoComplete='off'
                            validators={['required', 'matchRegexp:^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{7,15}$']}
                            errorMessages={["this field is required", "Password must contain atleast 1 uppercase, 1 lowercase, 1 special character, 8 characters"]}
                        />
                        <TextValidator
                            data-testid="confirmpassword"
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
                            autoComplete='off'
                            validators={['isPasswordMatch', 'required']}
                            errorMessages={['password mismatch', 'this field is required']}
                        />
                        <Button
                            data-testid="button"
                            type='submit'
                            color='primary'
                            variant="contained"
                            style={btnstyle}
                            onSubmit={this.handleSubmit}
                            fullWidth
                            disabled={submitted}>{
                                (submitted && 'Registered!') || (!submitted && 'Sign up')
                            }</Button>

                        <Typography data-testid="typography" style={signUpStyle}> Already have an account?

                            <Link to={'/'} onClick={this.handleRedirect} style={{ color: '#1A73E8', textDecoration: 'inherit' }}>
                                Sign In
                            </Link>
                        </Typography>
                    </ValidatorForm>
                </Paper>
            </Grid>
            </Router>
        )
    }
}
