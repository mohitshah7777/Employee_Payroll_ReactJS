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

describe('Negative Test dashboard Component', () => {
    it('givenWrongDataTestId_whenVisitedFormComponent_shouldNotRenderProperly', (done) => {
        const { queryByTestId } = render(<Dashboard />);
        const appbar = queryByTestId('appba');
        const iconbutton = queryByTestId('ionbutton');
        const typography = queryByTestId('tpography');
        const logoutbutton = queryByTestId('lgoutbutton')

        expect(appbar).not.toBeInTheDocument();
        expect(iconbutton).not.toBeInTheDocument();
        expect(typography).not.toBeInTheDocument();
        expect(logoutbutton).not.toBeInTheDocument();
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

describe('Negative Test dashboard side navigation Component', () => {
    it('givenWrongDataTestId_whenVisitedDashboardSideNavigationComponent_shouldNotRenderProperly', (done) => {
        const { queryByTestId } = render(<Dashboard />);
        const drawer = queryByTestId('drwer');
        const drawerclosebutton = queryByTestId('drwerclosebutton');
        const listbutton = queryByTestId('listbuton');
        const addbutton = queryByTestId('addbuton')
        const editbutton = queryByTestId('editbuton');
        const deletebutton = queryByTestId('deletebuton');

        expect(drawer).not.toBeInTheDocument();
        expect(drawerclosebutton).not.toBeInTheDocument();
        expect(listbutton).not.toBeInTheDocument();
        expect(addbutton).not.toBeInTheDocument();
        expect(editbutton).not.toBeInTheDocument();
        expect(deletebutton).not.toBeInTheDocument();
        done()
    })
})