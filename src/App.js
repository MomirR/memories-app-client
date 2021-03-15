import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, makeStyles, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import { Form, Posts } from 'components';
import memories from 'images/memories.png';
import './index.css';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const c = styles();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={c.appBar} position="static" color="inherit">
                <Typography className={c.heading} variant="h2" align="center">Memories</Typography>
                <img className={c.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={c.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} md={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

const styles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontFamily: `'Montserrat', 'sans-serif'`,
        color: 'rgba(0,183,255, 1)',
        [theme.breakpoints.up('xs')]: {
            fontSize: theme.spacing(4)
        },
        [theme.breakpoints.up('md')]: {
            fontSize: theme.spacing(6)
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: theme.spacing(8)
        }
    },
    image: {
        marginLeft: '15px',
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: "column-reverse"
        }
    }
}));

export default App;