import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Button } from '@material-ui/core';
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
        <Dialog  open={openPopUp} classes={{ paper: classes.dialogWrapper}}> 
            <DialogTitle>
            <div style={{display:'flex'}}>
                    <Typography variant="h6" component="div" style={{flexGrow:1}}>
                        {title}
                    </Typography>
                    <Button onClick={() => setOpenPopUp(false)}>
                        <CancelIcon  color="secondary"/>
                    </Button>
            </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>

    )

}