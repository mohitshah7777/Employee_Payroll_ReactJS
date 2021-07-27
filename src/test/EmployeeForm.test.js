import React from 'react';
import EmployeeForm from '../components/EmployeeForm'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Test Employee form Component', () => {
    it('givenDataTestId_whenVisitedFormComponent_shouldRenderProperly', (done) => {
        const { getByTestId } = render(<EmployeeForm />);
        const form = getByTestId('form');
        const firstname = getByTestId('firstname');
        const lastname = getByTestId('lastname');
        const email = getByTestId('email')
        const department = getByTestId('department')
        const salary = getByTestId('salary')
        const button = getByTestId('button')

        expect(form).toBeInTheDocument();
        expect(firstname).toBeInTheDocument();
        expect(lastname).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(department).toBeInTheDocument();
        expect(salary).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        done();
    })
})

describe('Negative Test Employee form Component', () => {
    it('givenWrongDataTestId_whenVisitedFormComponent_shouldNotRenderProperly', (done) => {
        const { queryByTestId } = render(<EmployeeForm />);
        const form = queryByTestId('for');
        const firstname = queryByTestId('firstnam');
        const lastname = queryByTestId('lastnam');
        const email = queryByTestId('emai')
        const department = queryByTestId('dpartment')
        const salary = queryByTestId('salry')
        const button = queryByTestId('buton')

        expect(form).not.toBeInTheDocument();
        expect(firstname).not.toBeInTheDocument();
        expect(lastname).not.toBeInTheDocument();
        expect(email).not.toBeInTheDocument();
        expect(department).not.toBeInTheDocument();
        expect(salary).not.toBeInTheDocument();
        expect(button).not.toBeInTheDocument();
        done();
    })
})