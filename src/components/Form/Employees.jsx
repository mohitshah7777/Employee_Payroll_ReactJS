import { makeStyles, Paper, TableBody, TableCell, TableRow } from '@material-ui/core'
import React, { useState } from 'react'
import { useEffect } from 'react'
import useTable from '../Controls/useTable'
import Service from '../../services/employee';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PopUp from '../Popup';
import UpdateForm from './UpdateForm';
import Notification from '../Controls/Notifications';
import ConfirmDialog from '../Controls/ConfirmDialog';
import { IconButton } from '@material-ui/core';
const service = new Service();


const useStyles = makeStyles(theme => ({
    pageContent: {
        marginTop: theme.spacing(11),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        // paddingTop: theme.spacing(1),
        
    }
}))

const headCells = [
    { id: "firstName", label: "First Name" },
    { id: "lastName", label: "Last Name" },
    { id: "email", label: "Email" },
    { id: "department", label: "Department" },
    { id: "salary", label: "Salary" },
    { id: "actions", label: "Actions", disableSorting: true }
]

export default function AddParent() {

    const classes = useStyles()
    // eslint-disable-next-line no-unused-vars
    // const [a, setA] = useState(0);
    const [records, setRecords] = useState([])
    const [openPopUp, setOpenPopUp] = React.useState(false);
    const [recordForEdit, setRecordForEdit] = React.useState(null)
    const [employeeId, setEmployeeId] = useState(null);
    const [notify, setNotify] = useState({isOpen: false, message:'', type:''})
    const [confirmDialog, setConfirmDialog] = useState({isOpen:false, title:'', subTitle: ''})

    useEffect(() => {
        service.getEmployee()
            .then((res) => {
                console.log(res.data.data)
                setRecords(res.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    },[])

    const editEmployee = (employee, resetForm) => {
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
                type:'success'
            })
        }).catch((error) => {
            alert(error)
        })
        resetForm()
        setOpenPopUp(false)
    }

    const openInPopUp = item => {
        setRecordForEdit(item)
        setOpenPopUp(true)
        setEmployeeId(item._id)
    }

    const onDelete = (_id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        service.deleteEmployee(_id)
        .then((res) => {
            setNotify({
                isOpen: true,
                message: 'Deleted Successfully',
                type:'error'
            })
        }).catch((error) => {
            alert(error)
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
            <Paper elevation={3} className={classes.pageContent}>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item => (
                                <TableRow key={item._id}>
                                    <TableCell>{item.firstName}</TableCell>
                                    <TableCell>{item.lastName}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.department}</TableCell>
                                    <TableCell>{item.salary}</TableCell>
                                    <TableCell>
                                        <IconButton 
                                            edge="start" 
                                            size="small" 
                                            onClick = {() => openInPopUp(item)}
                                        >
                                        <EditIcon color="primary" />
                                        </IconButton>
                                        <IconButton 
                                            size="small" 
                                            onClick = {() => 
                                                setConfirmDialog({
                                                    isOpen:true,
                                                    title: 'Are you sure to delete this record?',
                                                    subTitle: "You Can't undo this operation",
                                                    onConfirm: () => {onDelete(item._id)}
                                                })
                                                // onDelete(item._id)
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
            <PopUp
            title="Update Employee"
            openPopUp={openPopUp}
            setOpenPopUp={setOpenPopUp}
        ><UpdateForm 
            editEmployee = {editEmployee}
            recordForEdit={recordForEdit}/>
        </PopUp>
        <Notification 
        notify={notify}
        setNotify={setNotify  }
        />
        <ConfirmDialog 
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
        />
        </>
    )
}