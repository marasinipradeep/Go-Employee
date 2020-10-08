import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, label, value,error=null, onChange,inputRef,type } = props;
    return (
        <TextField
           
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            inputRef={inputRef}
            type={type}
            {...(error && {error:true,helperText:error})}
        />
    )
}