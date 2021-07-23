import React from 'react';
import Dashboard from '../components/Dashboard';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })


describe('Test dashboard Component', () => {
    it('check if dashboard header element rendered properly', () => {
        const { getByTestId } = render(<Dashboard />);
        const appbar = getByTestId('appbar');
        const iconbutton = getByTestId('iconbutton');
        const typography = getByTestId('typography');
        const logoutbutton = getByTestId('logoutbutton')

        expect(appbar).toBeInTheDocument();
        expect(iconbutton).toBeInTheDocument();
        expect(typography).toBeInTheDocument();
        expect(logoutbutton).toBeInTheDocument();
    })
})

describe('Test dashboard side navigation Component', () => {
    it('check if dashboard side navigation element rendered properly', () => {
        const { getByTestId } = render(<Dashboard />);
        const drawer = getByTestId('drawer');
        const drawerclosebutton = getByTestId('drawerclosebutton');
        const listbutton = getByTestId('listbutton');
        const addbutton = getByTestId('addbutton')
        const editbutton = getByTestId('editbutton');
        const deletebutton = getByTestId('deletebutton');

        expect(drawer).toBeInTheDocument();
        expect(drawerclosebutton).toBeInTheDocument();
        expect(listbutton).toBeInTheDocument();
        expect(addbutton).toBeInTheDocument();
        expect(editbutton).toBeInTheDocument();
        expect(deletebutton).toBeInTheDocument();
    })
})