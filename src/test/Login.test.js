import { shallow } from 'enzyme';
import React from 'react';
import Login from '../pages/Login';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe('Given Login component', () => {
    test('then h3 tag should render properly', () => {
        const component = shallow(<Login />)
        expect(component.find('#h3tag').text()).toEqual('EMPLOYEE PAYROLL APP')
    })
})