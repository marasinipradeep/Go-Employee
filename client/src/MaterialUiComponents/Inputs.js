import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, label, value,error=null, onChange,inputRef,type,...other } = props;
    return (
        <TextField
        required
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            inputRef={inputRef}
            type={type}
            fullWidth={true}
            {...other}
            {...(error && {error:true,helperText:error})}
        />
    )
}