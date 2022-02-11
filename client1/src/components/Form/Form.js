import React from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';

const Form = () => {

    const handleSubmit = () => {

    }
    return (
        <Paper className="paper">
            <form autoComplete="off" noValidate clasName="form" onSubmit={handleSubmit}>
                <Typography>Creating a Memory</Typography>
                <TextField name="creatot" varient="outlined" label="Creator" fullWidth />
            </form>
        </Paper>
    )
};

export default Form;    
