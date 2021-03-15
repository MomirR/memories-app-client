import React from 'react';
import { makeStyles, Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from 'actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const c = styles();

    console.log(post);

    return (
        <Card className={c.card}>
            <CardMedia className={c.media} image={post.selectedFile} title={post.title} src="file" />
            <Box className={c.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </Box>

            <Box className={c.overlay2}>
                <Button
                    style={{ color: 'white' }}
                    size="small"
                    onClick={() => { setCurrentId(post._id) }}
                >
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </Box>

            <Box className={c.details}>
                <Typography variant="body2" color="textSecondary">
                    {post.tags.map(tag => `#${tag} `)}
                </Typography>
            </Box>

            <Typography className={c.title} variant="h5" gutterBottom>
                {post.title}
            </Typography>

            <CardContent>
                <Typography variant="body2" gutterBottom color="textSecondary">
                    {post.message}
                </Typography>
            </CardContent>

            <CardActions className={c.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

const styles = makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '0 16px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
});

export default Post;