import React from 'react';
import Dashboard from '../components/Dashboard';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Test dashboard Component', () => {
    it('givenDataTestId_whenVisitedFormComponent_shouldRenderProperly', (done) => {
        const { getByTestId } = render(<Dashboard />);
        const appbar = getByTestId('appbar');
        const iconbutton = getByTestId('iconbutton');
        const typography = getByTestId('typography');
        const logoutbutton = getByTestId('logoutbutton')

        expect(appbar).toBeInTheDocument();
        expect(iconbutton).toBeInTheDocument();
        expect(typography).toBeInTheDocument();
        expect(logoutbutton).toBeInTheDocument();
        done();
    })
})

describe('Test dashboard side navigation Component', () => {
    it('givenDataTestId_whenVisitedDashboardSideNavigationComponent_shouldRenderProperly', (done) => {
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
        done()
    })
})