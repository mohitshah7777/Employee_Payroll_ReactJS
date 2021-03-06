import React, { useState } from 'react'
import { makeStyles, Table, TableCell, TableHead, TablePagination, TableRow, TableSortLabel } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    table : {
        // width:'95%',
        // display:'block',
        overflowX:'auto',
        marginTop: theme.spacing(3),
        '& thead th' : {
            fontWeight: '600',
            color: "white",
            backgroundColor: "#00AEC3",
        },
        '& tbody td': {
            fontWeight: '400',
        },
        '& tbody tr:hover': {
            backgroundColor: '#EEEEEE',
        },
    },
}))


export default function useTable(records, headCells) {

    const classes = useStyles()

    const pages = [5, 10, 25]
    const [ page, setPage ] = useState(0)
    const [ rowsPerPage, setRowsPerPage ] = useState(pages[0])
    const [ order, setOrder ] = useState()
    const [ orderBy, SetOrderBy ] = useState()

    const TblContainer = props => (
        <Table size="medium" className={classes.table}>
            {props.children}
        </Table>
    )

    const TblHead = props => {

        const handleSortRequest = cellId => {
            const isAsc = orderBy === cellId && order === "asc";
            setOrder(isAsc ? 'desc' : 'asc')
            SetOrderBy(cellId)
        }

        return (
            <TableHead data-testid="tablehead">
            <TableRow data-testid="tablerow">
                {
                    headCells.map(headCell => (
                    <TableCell key={headCell.id} 
                        sortDirection={orderBy === headCell.id ? order: false}>
                        {headCell.disableSorting ? headCell.label :
                        <TableSortLabel 
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick = { () => {handleSortRequest(headCell.id)}}>
                        {headCell.label}
                        </TableSortLabel>}
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

    function stableSort(array, comparator){
        const stablizedThis = array.map((el, index) => [el, index])
        stablizedThis.sort((a,b) => {
            const order = comparator(a[0], b[0]);
            if(order!==0) return order;
            return a[1] - b[1];
        })
        return stablizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy){
        return order === 'desc' ?
            (a, b) => descendingComparator(a,b, orderBy)
            : (a, b) => -descendingComparator(a,b, orderBy)
    }

    function descendingComparator(a, b, orderBy){
        if(b[orderBy] < a[orderBy]){
            return -1;
        }
        if(b[orderBy] > a[orderBy]){
            return 1;
        }
        return 0;
    }

    const recordsAfterPagingAndSorting = () => {
        return stableSort(records, getComparator(order, orderBy)).slice(page*rowsPerPage, (page+1)*rowsPerPage)
    }

    return {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }
}