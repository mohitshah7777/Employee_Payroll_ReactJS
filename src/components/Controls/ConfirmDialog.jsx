import React from 'react'
import { Dialog, DialogActions, DialogContent, IconButton, Typography } from '@material-ui/core';
import { DialogTitle, makeStyles } from '@material-ui/core';
import Controls from './Controls'
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
    dialog:{
        position:'absolute',
        top:theme.spacing(5)
    },
    dialogContent:{
        textAlign:'center'
    },
    dialogTitle:{
        textAlign:'center'
    },
    dialogAction:{
        justifyContent:'center'
    },
    titleIcon: {
        backgroundColor: 'white',
        color: theme.palette.secondary.main,
        '& .MuiSvgIcon-root': {
            fontSize: '5rem',
        }
    }
}))

export default function ConfirmDialog(props) {
    
    // eslint-disable-next-line no-unused-vars
    const { confirmDialog, setConfirmDialog } = props
    const classes = useStyles();

    return(
        <Dialog open={confirmDialog.isOpen} classes={{paper: classes.dialog}}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableFocusRipple className={classes.titleIcon}>
                    <InfoIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6'>
                    {confirmDialog.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Controls.Button 
                    text="No"
                    color="default"  
                    onClick={() => setConfirmDialog({...confirmDialog, isOpen:false})}  
                />
                <Controls.Button
                    text="Yes"
                    color="secondary"    
                    onClick = {confirmDialog.onConfirm}
                />
            </DialogActions>
        </Dialog>
    )
}