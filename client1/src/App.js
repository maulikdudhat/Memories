import React, { useEffect } from "react";
import './app.css'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from "./components/Form/Form.js";
import memories from './components/images/memories.jpg'
import useStyle from './style'
import { getPosts } from './actions/posts'
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])
    return (

        <Container maxWidth="lg">
            <AppBar position="static" color="inherit" className="header">
                <Typography varient="h2" align="center" className="header-text">Happy Memories</Typography>
                <img src={memories} alt="memories" height="60" width="60" className="header-img"></img>
            </AppBar>

            <Grow in >
                <Container>
                    <Grid container alignItems="stretch" spacing={2} >
                        <Grid xs={12} sm={8}>
                            <Posts />
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container >


    )
}

export default App; 