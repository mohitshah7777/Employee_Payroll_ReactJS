import React from 'react'
import { TextField} from '@material-ui/core'

export default function Button(props){
    
    const {name, label, value, onChange, ...other} = props

    return(
        <TextField
            variant ="outlined"
            label={label}
            name={name}
            onChange={onChange}
            error
            helperText="Validation error"
            {...other}>
        </TextField>
    )
}