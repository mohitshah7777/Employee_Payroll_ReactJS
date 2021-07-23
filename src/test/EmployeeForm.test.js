import React from 'react';
import EmployeeForm from '../components/Form/EmployeeForm'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })


describe('Test Employee form Component', () => {
    it('check if dashboard header element rendered properly', () => {
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
    })
})