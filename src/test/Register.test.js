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

describe('Negative Test Register component', () => {
    it('givenWrongHeading_whenVisitedLoginPage_shouldNotRenderH3Tag', (done) => {
        const component = shallow(<Register />)
        expect(component.find('#h3tag').text()).not.toEqual('EMPLOYEE APP')
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

describe('Negative Test Form Component', () => {
    it('giveWrongnDataTestId_whenVisitedRegisterFormComponent_shouldNotRenderProperly', (done) => {
        const { queryByTestId } = render(<Register />);
        const form = queryByTestId('for');
        const firstname = queryByTestId('irstname');
        const lastname = queryByTestId('astname');
        const email = queryByTestId('emil');
        const password = queryByTestId('assword');
        const confirmpassword = queryByTestId('cnfirmpassword');
        const button = queryByTestId('butto')
        const text = queryByTestId('typogrphy');

        expect(form).not.toBeInTheDocument();
        expect(firstname).not.toBeInTheDocument();
        expect(lastname).not.toBeInTheDocument();
        expect(email).not.toBeInTheDocument();
        expect(password).not.toBeInTheDocument();
        expect(confirmpassword).not.toBeInTheDocument();
        expect(button).not.toBeInTheDocument();
        expect(text).not.toBeInTheDocument();
        done()
    })

    it('givenDataTestId_whenVisitedRegisterFormComponent_shouldNotBeNull', (done) => {
        const { getByTestId } = render(<Register />);
        const firstname = getByTestId('firstname');
        const lastname = getByTestId('lastname');
        const email = getByTestId('email');
        const password = getByTestId('password');
        const confirmpassword = getByTestId('confirmpassword');
        const button = getByTestId('button')

        expect(firstname).not.toBeNull();
        expect(lastname).not.toBeNull();
        expect(email).not.toBeNull();
        expect(password).not.toBeNull();
        expect(confirmpassword).not.toBeNull();
        expect(button).not.toBeNull();
        done()
    })
})