import React from 'react';
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

const useStyles = makeStyles({
  root: {
    maxWidth: 1800,
    marginBottom: 25,
    marginLeft: 50,
    backgroundColor: 'pink',
  },
  media: {
    height: 140,
  },
});

const Post = (props) => {
  const { title, id, body } = props.post;

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <h4 style={{ marginLeft: '15px' }}>
        user id:{id}
        {/* <Link to={`/post/${id}`}> Show details of {id}</Link> */}
      </h4>
      <br />
      <CardActions>
        <Button variant="contained" color="secondary">
          <Link to={`/post/${id}`}> Show more of {id}</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
