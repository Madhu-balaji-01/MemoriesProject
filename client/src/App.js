import React, {useState, useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

// Importing hook - allows us to dispatch an action (get/post etc)
import {useDispatch} from 'react-redux';
import {getPosts} from  './actions/posts'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles'

// Image import
import memories from './images/memories.png'

// We need to share data between posts and forms, and App.js is the only parent component of both 
const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxwidth = "lg">
            <AppBar className={classes.appBar} position="static" color = "inherit">
                <Typography className={classes.heading} variant = "h2" align = "center">Memories</Typography>
                <img src = {memories} className={classes.image} alt = 'memories' height = "60"/>    
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems ="stretch" spacing={3}>
                        {/* full width on extra small devices, 7 out of 12 spaces on small devices */}
                        <Grid item xs={12} sm={7}> 
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>

                        <Grid item xs={12} sm={4}> 
                            <Form currentId= {currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
