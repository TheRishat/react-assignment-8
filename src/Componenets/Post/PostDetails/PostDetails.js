import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import Coments from '../Coments/Coments';

const useStyles = makeStyles({
  root: {
    maxWidth: 1800,
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 50,
    backgroundColor: 'pink',
  },
  media: {
    height: 140,
  },
});

const PostDetails = () => {
  const classes = useStyles();
  const { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <h4 style={{ marginLeft: '15px' }}>
        user id:{postId}
        {/* <Link to={`/post/${id}`}> Show details of {id}</Link> */}
      </h4>
      <br />
      <Coments></Coments>
    </Card>
  );
};

export default PostDetails;
