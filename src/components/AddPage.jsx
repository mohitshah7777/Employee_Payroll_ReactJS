import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class AddEmployee extends React.Component {
    state = {
        formData: {
            firstName: '',
            lastName: '',
            email: '',
            department: '',
            salary: ''
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            firstName: this.state.formData.firstName,
            lastName: this.state.formData.lastName,
            email: this.state.formData.email,
            department: this.state.formData.department,
            salary: this.state.formData.salary,
        };
        console.log(user);

        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        })

        this.setState({
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                department: '',
                salary: '',
            }
        })
    }

    render() {
        const paperStyle = { padding: '5px 30px', width: 260, margin: "40px auto" }
        const hStyle = { margin: '25px', color: '#3F51B5' }
        const btnstyle = { margin: '25px 0px' }
        const textStyle = { margin: '5px 0' }

        const { formData, submitted } = this.state
        console.log(formData)

        return (
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <h3 id="h3tag" style={hStyle}>Add Employee</h3>
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
                        />
                        <TextValidator
                            data-testid="department"
                            style={textStyle}
                            size='small'
                            label='Department'
                            placeholder='Enter department'
                            variant='outlined'
                            name='department'
                            fullWidth
                            onChange={this.handleChange}
                            value={formData.department}
                            validators={['required']}
                            errorMessages={["this field is required"]}
                        />
                        <TextValidator
                            data-testid="salary"
                            style={textStyle}
                            size='small'
                            label='Salary'
                            placeholder='Enter Salary'
                            variant='outlined'
                            name='salary'
                            fullWidth
                            onChange={this.handleChange}
                            value={formData.salary}
                            validators={['required','matchRegexp:^[0-9]{2,}']}
                            errorMessages={["this field is required", "Only numeric values allowed"]}
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
                                (submitted && 'Added!') || (!submitted && 'Submit')
                            }</Button>
                    </ValidatorForm>
                </Paper>
            </Grid>
        )
    }
}
