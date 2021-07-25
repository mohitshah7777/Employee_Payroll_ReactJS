import React from 'react';
import EmployeeForm from '../components/Form/EmployeeForm'
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