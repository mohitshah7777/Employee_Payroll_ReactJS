import React from 'react';
import PopUp from '../components/Popup';
import { DialogContent } from '@material-ui/core';
import EmployeeForm from '../components/EmployeeForm';
import Dashboard from '../components/Dashboard';
import '@testing-library/jest-dom'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })


describe('Test Popup Component', () => {
    it('givenPopup_whenTested_shouldBeRendered', () => {
        const wrapper = shallow(<Dashboard />);
        const popup = wrapper.find(PopUp);
        expect(popup).toHaveLength(1);
    })
    
    it('givenPopup_whenClicked_shouldOpenAndClosePopUp', () => {
        const wrapper = shallow(<Dashboard />);
        const isOpenFalse = wrapper.find(PopUp).prop('openPopUp')
       
        wrapper.find('.button').first().simulate('click')
        const isOpenTrue = wrapper.find(PopUp).prop('openPopUp')
        
        expect(isOpenFalse).toBe(false);
        expect(isOpenTrue).toBe(true);
    })

    it('givenPopup_whenOpened_shouldRenderChildren', () => {
        const wrapper = shallow(<PopUp>modal content</PopUp>);
        expect(wrapper.find(DialogContent).prop('children')).toBe('modal content');
    })
    
    it('givenPopup_whenOpened_shouldRenderAddForm', () => {
        const wrapper = shallow(<Dashboard />);
        const form = wrapper.find(EmployeeForm);
        expect(form).toHaveLength(1);  
    })
})

describe('Negative Test Popup Component', () => {
    it('givenWrongPopupLength_whenTested_shouldNotBeRendered', () => {
        const wrapper = shallow(<Dashboard />);
        const popup = wrapper.find(PopUp);
        expect(popup).not.toHaveLength(2);
    })
    
    it('givenWrongPopupBooleanValue_whenClicked_shouldNotOpenAndClosePopUp', () => {
        const wrapper = shallow(<Dashboard />);
        const isOpenFalse = wrapper.find(PopUp).prop('openPopUp')
       
        wrapper.find('.button').first().simulate('click')
        const isOpenTrue = wrapper.find(PopUp).prop('openPopUp')
        
        expect(isOpenFalse).not.toBe(true);
        expect(isOpenTrue).not.toBe(false);
    })

    it('givenWrongChildrenPopup_whenOpened_shouldNotRenderChildren', () => {
        const wrapper = shallow(<PopUp>modal content</PopUp>);
        expect(wrapper.find(DialogContent).prop('children')).not.toBe('modal conten');
    })
    
    it('givenWrongPopupLength_whenOpened_shouldNotRenderAddForm', () => {
        const wrapper = shallow(<Dashboard />);
        const form = wrapper.find(EmployeeForm);
        expect(form).not.toHaveLength(2);  
    })
})