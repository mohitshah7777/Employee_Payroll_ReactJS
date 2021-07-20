import { makeStyles, Paper, TableBody, TableCell, TableRow } from '@material-ui/core'
import React, { useState } from 'react'
import { useEffect } from 'react'
// import Add from './EmployeeForm'
import useTable from '../Controls/useTable'
import Service from '../../services/employee';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PopUp from '../Popup';
import UpdateForm from './UpdateForm';
import { Button } from '@material-ui/core';
const service = new Service();


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(12),
        padding: theme.spacing(2),
        // marginBottom: theme.spacing(5),
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
    // eslint-disable-next-line
    const [records, setRecords] = useState([])
    const [openPopUp, setOpenPopUp] = React.useState(false);

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

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells)

    return (
        <>
            <Paper className={classes.pageContent}>
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
                                    <TableCell align="center">
                                        <Button onClick = {() => setOpenPopUp(true)}>
                                            <EditIcon color="primary" />
                                        </Button>
                                        <Button>
                                            <DeleteIcon color="secondary" />
                                        </Button>
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
        ><UpdateForm />
        </PopUp>
        </>
    )
}