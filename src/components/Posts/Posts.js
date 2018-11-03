import React, { Component } from 'react';
import '../../App.css';

import moment from "moment";
import 'typeface-roboto';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAltOutlined';
// import ModeComment from '@material-ui/icons/ModeCommentOutlined';
import InsertComment from '@material-ui/icons/InsertCommentOutlined';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';

import FbImageLibrary from 'react-fb-image-grid';
import FacebookEmoji from 'react-facebook-emoji';


const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: '20px 0px'
    // height: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    borderTop: '1px solid rgba(66, 66, 66, 0.199)',
    maxWidth: '95%',
    padding: '3px 0px',
  },
  avatar: {
    // backgroundColor: red[500],
  },
});



class Post extends Component {

  // constructor(props) {
  //   super(props)
  // }

  likes(likes) {

    return <Typography variant='caption' className='fblikes' align='left'>
      {likes[0] + ',' + likes[1] + ' and ' + (likes.length - 2) + ' others'}
    </Typography>

  }


  render() {
    const { classes, fbPosts } = this.props;

    return (

      fbPosts.map((posts, index) => {
        return (

          <Card className={classes.card}>
            <CardHeader
              className='nomargin'
              avatar={
                <Avatar
                  alt=""
                  src={posts.photo}
                  className={classes.avatar}>
                </Avatar>
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title={<Typography color="primary" align='left' className='fbname'>{posts.name}</Typography>}
              subheader={<Typography variant='caption' align='left' className='fbdate'>{moment(posts.time).fromNow()}</Typography>}
            />

            <CardContent className='nomargin'>

              <Typography className='fbdesc' align='left'>
                {posts.desc}
              </Typography>
            </CardContent>

            {<FbImageLibrary

              images={posts.images}
            // countFrom={2}
            // hideOverlay={true}
            // onClickEach={({src, index}) => {console.log(src,index)}}
            // renderOverlay={() => <button>Show Image</button>}
            // overlayBackgroundColor={'green' or '#000000' or 'rgb(255, 26, 26)'}
            />}

            {this.likes(posts.likes)}

            <CardActions className={classes.actions}>

              <Paper className='fbreactsDiv'>
                <FacebookEmoji type="like" size="sm" /> &nbsp;
                <FacebookEmoji type="love" size="sm" /> &nbsp;
                <FacebookEmoji type="haha" size="sm" /> &nbsp;
                <FacebookEmoji type="wow" size="sm" /> &nbsp;
                {/* <FacebookEmoji type="yay" size="sm" /> */}
                <FacebookEmoji type="sad" size="sm" /> &nbsp;
                <FacebookEmoji type="angry" size="sm" />
              </Paper>
              <Button aria-label="Add to favorites" className='fbbtns'>
                <ThumbUpAlt /> &nbsp; &nbsp; <span className='btntext'> Like </span>
              </Button>
              <Button aria-label="Comment" className='fbbtns'>
                <InsertComment /> &nbsp; &nbsp; <span className='btntext'> Comment </span>
              </Button>
              <Button aria-label="Share" className='fbbtns'>
                <ShareIcon /> &nbsp; &nbsp; <span className='btntext'> Share </span>
              </Button>

            </CardActions>

          </Card>


        )
      })
    );

  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);
