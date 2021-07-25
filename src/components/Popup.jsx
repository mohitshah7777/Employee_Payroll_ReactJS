import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
// import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles(theme => ({
    dialogWrapper : {
        padding: theme.spacing(0),
        position: 'absolute',  
    }
}))

export default function Popup(props){

    const classes = useStyles();
    const {title, children, openPopUp, setOpenPopUp} = props
    
    return(
        <>
        <Dialog data-testid="dialog" open={openPopUp} classes={{ paper: classes.dialogWrapper}}> 
            <DialogTitle data-testid="title">
            <div style={{display:'flex'}}>
                    <Typography data-testid="typography" variant="h6" component="div" style={{flexGrow:1}}>
                        {title}
                    </Typography>
                    <IconButton data-testid="cancelbutton" size="small" onClick={() => setOpenPopUp(false)}>
                        <CancelIcon style={{fill: "#B22222"}}/>
                    </IconButton>
            </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    </>
    )

}