import { shallow } from 'enzyme';
import React from 'react';
import Login from '../pages/Login';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe('Test Login component', () => {
    it('check if h3 tag is rendered properly', () => {
        const component = shallow(<Login />)
        expect(component.find('#h3tag').text()).toEqual('EMPLOYEE PAYROLL APP')
    })
})

describe('Test Form Component', () => {
    it('check if form components displays properly', () => {
        const { getByTestId } = render(<Login />);
        const form = getByTestId('form');
        const email = getByTestId('email');
        const password = getByTestId('password');
        const button = getByTestId('button')
        const text = getByTestId('typography');

        expect(form).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(text).toBeInTheDocument();
    })

    it('check if form components has correct value', () => {
        const { getByTestId } = render(<Login />);
        const email = getByTestId('email');
        const password = getByTestId('password');
        const button = getByTestId('button')

        expect(email).toHaveTextContent('Email');
        expect(password).toHaveTextContent('Password');
        expect(button).toHaveTextContent('Sign In');
    })
})