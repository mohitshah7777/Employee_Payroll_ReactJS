/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LogoutIcon from '@material-ui/icons/Logout';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ViewListIcon from '@material-ui/icons/ViewList';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link, useHistory } from 'react-router-dom';
import PopUp from './Popup';
import Notification from '../components/Controls/Notifications';
import { BrowserRouter as Router } from "react-router-dom";
import Service from '../services/employee';
const service = new Service();
import useTable from './Controls/useTable'
import { makeStyles, Paper, TableBody, TableCell, TableRow } from '@material-ui/core'
import EmployeeForm from './EmployeeForm'
import ConfirmDialog from './Controls/ConfirmDialog'

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.grey[200],
    },
    pageContent: {
        marginTop: theme.spacing(11),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        // paddingTop: theme.spacing(1),
    },
    table: {
        Width: 500,
    },
    myClassName: {
        backgroundColor: "#3F51B5",
        position: "relative",
        "&:hover": {
            backgroundColor: "#DC143C"
        }
    },
    toolbar: {
        paddingRight: 24,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

const headCells = [
    { id: "firstName", label: "First Name" },
    { id: "lastName", label: "Last Name" },
    { id: "email", label: "Email" },
    { id: "department", label: "Department" },
    { id: "salary", label: "Salary" },
    { id: "actions", label: "Actions", disableSorting: true }
]

export default function Dashboard() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [records, setRecords] = React.useState([])
    // const [records1, setRecords1] = React.useState(0)
    const [action, setAction] = React.useState(null)
    const [openPopUp, setOpenPopUp] = React.useState(false);
    const [openPopUpAdd, setOpenPopUpAdd] = React.useState(false);
    const [notify, setNotify] = React.useState({ isOpen: false, message: '', type: '' })
    const history = useHistory();

    const [recordForEdit, setRecordForEdit] = React.useState(null)
    const [employeeId, setEmployeeId] = React.useState(null);
    const [confirmDialog, setConfirmDialog] = React.useState({ isOpen: false, title: '', subTitle: '' })

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogOut = () => {
        localStorage.removeItem('token');
        history.push('/');
    }

    useEffect(() => {
        getAllemployees()
    }, [setRecords])

    const getAllemployees = () => {
        service.getEmployee()
            .then((res) => {
                console.log(res.data.data)
                setRecords(res.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const addOrEdit = (employee, resetForm) => {
        if (action === 'add') {
            service.addEmployee(employee)
                .then((res) => {
                    setNotify({
                        isOpen: true,
                        message: 'Employee Added Successfully',
                        type: 'success'
                    })
                    getAllemployees();
                }).catch((error) => {
                    setNotify({
                        isOpen: true,
                        message: error.message,
                        type: 'error'
                    })
                })
            resetForm()
            setOpenPopUp(false)
        }
        else {
            const employeeData = {
                _id: employeeId,
                firstName: employee.firstName,
                lastName: employee.lastName,
                email: employee.email,
                department: employee.department,
                salary: employee.salary,
            };

            service.updateEmployee(employeeData)
                .then((res) => {
                    setNotify({
                        isOpen: true,
                        message: 'Updated Successfully',
                        type: 'success'
                    })
                    getAllemployees()
                }).catch((error) => {
                    setNotify({
                        isOpen: true,
                        message: error.message,
                        type: 'error'
                    })
                })
        }
        resetForm()
        setOpenPopUp(false)
        setRecordForEdit(null);
        setAction('add');
    }

    const openInPopUp = item => {
        setRecordForEdit(item)
        setOpenPopUp(true)
        setAction('update')
        setEmployeeId(item._id)
    }

    const deleteEmployee = (_id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        service.deleteEmployee(_id)
            .then((res) => {
                setNotify({
                    isOpen: true,
                    message: 'Deleted Successfully',
                    type: 'error'
                })
                getAllemployees()
            }).catch((error) => {
                setNotify({
                    isOpen: true,
                    message: error.message,
                    type: 'error'
                })
            })
    }

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells)

    return (
        <>
            <Router>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar data-testid="appbar" position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                        <Toolbar className={classes.toolbar}>
                            <IconButton
                                data-testid="iconbutton"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography data-testid="typography" component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                Dashboard
                            </Typography>
                            <IconButton data-testid="logoutbutton" onClick={handleLogOut} className={classes.myClassName} color="inherit">
                                <LogoutIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        data-testid="drawer"
                        variant="permanent"
                        classes={{
                            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                        }}
                        open={open}
                    >
                        <div className={classes.toolbarIcon}>
                            <IconButton data-testid="drawerclosebutton" onClick={handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            <ListItem data-testid="listbutton" button component={Link} to={'/dashboard'}>
                                <ListItemIcon>
                                    <ViewListIcon />
                                </ListItemIcon>
                                <ListItemText primary="List" />
                            </ListItem>
                            <ListItem className={'button'} button data-testid="addbutton" onClick={() => { setOpenPopUp(true); setRecordForEdit(null); setAction('add') }}>
                                <ListItemIcon>
                                    <AddBoxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem data-testid="editbutton" button>
                                <ListItemIcon>
                                    <EditIcon />
                                </ListItemIcon>
                                <ListItemText primary="Edit" />
                            </ListItem>
                            <ListItem data-testid="deletebutton" button>
                                <ListItemIcon>
                                    <DeleteIcon />
                                </ListItemIcon>
                                <ListItemText primary="Delete" />
                            </ListItem>
                        </List>
                    </Drawer>
                    <main className={classes.content}>

                        <Paper elevation={3} className={classes.pageContent}>
                            <TblContainer>
                                <TblHead />
                                <TableBody data-testid="tablebody">
                                    {
                                        recordsAfterPagingAndSorting().map(item => (
                                            <TableRow data-testid="tablerow" key={item._id}>
                                                <TableCell data-testid="tablecell" >{item.firstName}</TableCell>
                                                <TableCell data-testid="tablecell">{item.lastName}</TableCell>
                                                <TableCell data-testid="tablecell">{item.email}</TableCell>
                                                <TableCell data-testid="tablecell">{item.department}</TableCell>
                                                <TableCell data-testid="tablecell">{item.salary}</TableCell>
                                                <TableCell data-testid="tablecell">
                                                    <IconButton data-testid="editbutton"
                                                        edge="start"
                                                        size="small"
                                                        onClick={() => openInPopUp(item)}
                                                    >
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                    <IconButton data-testid="deletebutton"
                                                        size="small"
                                                        onClick={() =>
                                                            setConfirmDialog({
                                                                isOpen: true,
                                                                title: 'Are you sure to delete this record?',
                                                                subTitle: "You Can't undo this operation",
                                                                onConfirm: () => { deleteEmployee(item._id) }
                                                            })
                                                        }
                                                    >
                                                        <DeleteIcon color="secondary" />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </TblContainer>
                            <TblPagination />
                        </Paper>
                        <div className={classes.appBarSpacer} />
                    </main>
                </div>

                <PopUp
                    data-testid="popup"
                    title="Employee Form"
                    openPopUp={openPopUp}
                    setOpenPopUp={setOpenPopUp}
                ><EmployeeForm
                        addOrEdit={addOrEdit}
                        recordForEdit={recordForEdit} />
                </PopUp>
                <Notification
                    data-testid="notification"
                    notify={notify}
                    setNotify={setNotify}
                />
                <ConfirmDialog
                    confirmDialog={confirmDialog}
                    setConfirmDialog={setConfirmDialog}
                />
            </Router>
        </>
    );
}
