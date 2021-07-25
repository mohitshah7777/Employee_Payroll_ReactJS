/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';
import Login from '../pages/Login';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe('Test Login component', () => {
    it('givenDataTestId_whenVisitedLoginPage_shouldHave3TagProperty', (done) => {
        const component = shallow(<Login />)
        expect(component.find('#h3tag').text()).toEqual('EMPLOYEE PAYROLL APP')
        done()
    })
})

describe('Test Form Component', () => {
    it('givenDataTestId_whenVisitedLoginFormComponent_shouldRenderProperly', (done) => {
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
        done()
    })

    it('givenDataTestId_whenVisitedLoginFormComponent_shouldHaveCorrectValues', (done) => {
        const { getByTestId } = render(<Login />);
        const email = getByTestId('email');
        const password = getByTestId('password');
        const button = getByTestId('button')

        expect(email).toHaveTextContent('Email');
        expect(password).toHaveTextContent('Password');
        expect(button).toHaveTextContent('Sign In');
        done()
    })
})