import React, { useState } from 'react'
import { makeStyles, Table, TableCell, TableHead, TablePagination, TableRow } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    table : {
        marginTop: theme.spacing(3),
        '& thead th' : {
            fontWeight: '600',
            color: "white",
            backgroundColor: theme.palette.primary.main,
        },
        '& tbody td': {
            fontWeight: '400',
        },
        '& tbody tr:hover': {
            backgroundColor: '#C0C0C0',
            cursor: 'pointer'
        },
    },
}))


export default function useTable(records, headCells) {

    const classes = useStyles()

    const pages = [5, 10, 25]
    // eslint-disable-next-line
    const [ page, setPage ] = useState(0)
    // eslint-disable-next-line
    const [ rowsPerPage, setRowsPerPage ] = useState(pages[0])


    const TblContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TblHead = props => {
        return (<TableHead>
            <TableRow>
                {
                    headCells.map(headCell => (<TableCell key={headCell._id}>
                        {headCell.label}
                    </TableCell>))
                }
            </TableRow>
        </TableHead>)
    }

    const handleChangePage = (event, newPage) =>{
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const TblPagination = () => (<TablePagination 
        component="div"
        rowsPerPageOptions = {pages}
        rowsPerPage = {rowsPerPage}
        page={page}
        count={records.length}   
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    )

    const recordsAfterPagingAndSorting = () => {
        return records.slice(page*rowsPerPage, (page+1)*rowsPerPage)
    }

    return {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }
}