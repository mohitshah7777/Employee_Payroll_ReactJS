import React from 'react';
import { Snackbar, makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
    root:{
        top:theme.spacing(1)
    }
}))

export default function Notification(props) {

    const classes = useStyles()
    // eslint-disable-next-line no-unused-vars
    const { notify, setNotify } = props

    const handleClose = (event, reason) => {
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <Snackbar 
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{vertical:'top', horizontal: 'center'} }
            onClose={handleClose}
        >
            <Alert 
                severity={notify.type}
                onClose={handleClose}
            >
                {notify.message}
            </Alert>
        </Snackbar>
    )
}