import React, { useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
// import Controls from '../Controls/Controls'
import { Button } from '@material-ui/core';
import Service from '../../services/employee'
const service = new Service();

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    salary: ''
}


export default function AddForm() {

    const [values, setValues] = useState(initialValues)

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetForm =() => {
        setValues(initialValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)

        service.addEmployee(values)
            .then((res) => {
                alert(res.data.message)
            }).catch((error) => {
                alert(error)
            })

        resetForm()
        
    }

    const textStyle = { margin: '5px 0' }
    const btnstyle = { margin: '25px 110px', width: 150 }
    return (
        <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
                data-testid="firstname"
                name='firstName'
                onChange={handleChange}
                style={textStyle}
                value={values.firstName}
                validators={['required', 'matchRegexp:^[a-zA-Z]{2,}']}
                errorMessages={["field is required", "Minimum 2 characters"]}
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
                onChange={handleChange}
                value={values.lastName}
                validators={['required', 'matchRegexp:^[a-zA-Z]{2,}']}
                errorMessages={["field is required", "Minimum 2 characters"]}
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
                onChange={handleChange}
                value={values.email}
                validators={['required', 'isEmail']}
                errorMessages={["field is required", "Email is not valid",]}
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
                onChange={handleChange}
                value={values.department}
                validators={['required']}
                errorMessages={["field is required"]}
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
                onChange={handleChange}
                value={values.salary}
                validators={['required', 'matchRegexp:^[0-9]{2,}']}
                errorMessages={["field is required", "Only numeric values allowed"]}
            />
            <Button
                data-testid="button"
                type='submit'
                color='primary'
                variant="contained"
                style={btnstyle}
                onSubmit={handleSubmit}
                fullWidth>
                Submit
            </Button>



        </ValidatorForm>
    )
}

