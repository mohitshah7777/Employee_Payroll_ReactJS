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
    it('givenDataTestId_whenVisitedLoginPage_shouldRenderH3TagProperty', (done) => {
        const component = shallow(<Login />)
        expect(component.find('#h3tag').text()).toEqual('EMPLOYEE PAYROLL APP')
        done()
    })
})

describe('Negative Test Login component', () => {
    it('givenWrongHeading_whenVisitedLoginPage_shouldNotRenderH3Tag', (done) => {
        const component = shallow(<Login />)
        expect(component.find('#h3tag').text()).not.toEqual('EMPLOYEE APP')
        done()
    })
})

describe('Negative Test Form Component', () => {
    it('givenWrongDataTestId_whenVisitedLoginFormComponent_shouldNotRenderProperly', (done) => {
        const { queryByTestId } = render(<Login />);
        const form = queryByTestId('for');
        const email = queryByTestId('emil');
        const password = queryByTestId('pssword');
        const button = queryByTestId('buton')
        const text = queryByTestId('typoraphy');

        expect(form).not.toBeInTheDocument();
        expect(email).not.toBeInTheDocument();
        expect(password).not.toBeInTheDocument();
        expect(button).not.toBeInTheDocument();
        expect(text).not.toBeInTheDocument();
        done()
    })

    it('givenDataTestId_whenVisitedLoginFormComponent_shouldNotBeNull', (done) => {
        const { getByTestId } = render(<Login />);
        const email = getByTestId('email');
        const password = getByTestId('password');
        const button = getByTestId('button')

        expect(email).not.toBeNull();
        expect(password).not.toBeNull();
        expect(button).not.toBeNull();
        done()
    })
})