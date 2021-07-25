/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';
import Register from '../pages/Register';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe('Test Register component', () => {
    it('givenDataTestId_whenVisitedLoginPage_shouldHave3TagProperty', (done) => {
        const component = shallow(<Register />)
        expect(component.find('#h3tag').text()).toEqual('EMPLOYEE PAYROLL APP')
        done()
    })
})

describe('Test Form Component', () => {
    it('givenDataTestId_whenVisitedRegisterFormComponent_shouldRenderProperly', (done) => {
        const { getByTestId } = render(<Register />);
        const form = getByTestId('form');
        const firstname = getByTestId('firstname');
        const lastname = getByTestId('lastname');
        const email = getByTestId('email');
        const password = getByTestId('password');
        const confirmpassword = getByTestId('confirmpassword');
        const button = getByTestId('button')
        const text = getByTestId('typography');

        expect(form).toBeInTheDocument();
        expect(firstname).toBeInTheDocument();
        expect(lastname).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(confirmpassword).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(text).toBeInTheDocument();
        done()
    })

    it('givenDataTestId_whenVisitedRegisterFormComponent_shouldHaveCorrectValues', (done) => {
        const { getByTestId } = render(<Register />);
        const firstname = getByTestId('firstname');
        const lastname = getByTestId('lastname');
        const email = getByTestId('email');
        const password = getByTestId('password');
        const confirmpassword = getByTestId('confirmpassword');
        const button = getByTestId('button')

        expect(firstname).toHaveTextContent('First name');
        expect(lastname).toHaveTextContent('Last name');
        expect(email).toHaveTextContent('Email');
        expect(password).toHaveTextContent('Password');
        expect(confirmpassword).toHaveTextContent('Confirm password');
        expect(button).toHaveTextContent('Sign up');
        done()
    })
})