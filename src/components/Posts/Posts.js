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
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';

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
  lightTooltip: { 
    background: theme.palette.common.black,
    color: theme.palette.text.white,
    // boxShadow: theme.shadows[1],
    fontSize: 13,
  },
});



class Post extends Component {

  constructor(props) {
    super(props)

    this.state = {
      reactsDiv: [false, false, false, false],
    }
  }

  likes(likes) {

    return <Typography variant='caption' className='fblikes' align='left'>
      {likes[0] + ',' + likes[1] + ' and ' + (likes.length - 2) + ' others'}
    </Typography>

  }

  showReactsDiv(param, index) {
    const { reactsDiv } = this.state;
    reactsDiv[index] = param;

    this.setState({
      reactsDiv,
    })
  }

  render() {
    const { classes, fbPosts, addlike } = this.props;
    const { reactsDiv } = this.state;

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
              {reactsDiv[index] === true ?

                <Paper className='fbreactsDiv'
                  onMouseEnter={() => this.showReactsDiv(true, index)
                  }
                  onMouseLeave={() => this.showReactsDiv(false, index)
                  }
                >
                  <Tooltip TransitionComponent={Zoom} placement="top" title="Like" classes={{ tooltip: classes.lightTooltip }}>
                    <span onClick={() => (addlike(index, 'liked'), this.showReactsDiv(false, index))} className='fbreacts'>
                      <FacebookEmoji type="like" size="sm" /></span>
                  </Tooltip>

                  <Tooltip TransitionComponent={Zoom} placement="top" title="Love" classes={{ tooltip: classes.lightTooltip }}>
                    <span onClick={() => (addlike(index, 'love'), this.showReactsDiv(false, index))} className='fbreacts'>
                      <FacebookEmoji type="love" size="sm" /></span>
                  </Tooltip>

                  <Tooltip TransitionComponent={Zoom} placement="top" title="Haha" classes={{ tooltip: classes.lightTooltip }}>
                    <span onClick={() => (addlike(index, 'haha'), this.showReactsDiv(false, index))} className='fbreacts'>
                      <FacebookEmoji type="haha" size="sm" /></span>
                  </Tooltip>

                  <Tooltip TransitionComponent={Zoom} placement="top" title="Wow" classes={{ tooltip: classes.lightTooltip }}>
                    <span onClick={() => (addlike(index, 'wow'), this.showReactsDiv(false, index))} className='fbreacts'>
                      <FacebookEmoji type="wow" size="sm" /></span>
                  </Tooltip>

                  <Tooltip TransitionComponent={Zoom} placement="top" title="Sad" classes={{ tooltip: classes.lightTooltip }}>
                    <span onClick={() => (addlike(index, 'sad'), this.showReactsDiv(false, index))} className='fbreacts'>
                      <FacebookEmoji type="sad" size="sm" /></span>
                  </Tooltip>

                  <Tooltip TransitionComponent={Zoom} placement="top" title="Angry" classes={{ tooltip: classes.lightTooltip }}>
                    <span onClick={() => (addlike(index, 'angry'), this.showReactsDiv(false, index))} className='fbreacts'>
                      <FacebookEmoji type="angry" size="sm" /></span>
                  </Tooltip>

                </Paper> : null
              }
              <Button aria-label="Add to favorites" className='fbbtns'
                onClick={() => (addlike(index, 'like'), this.showReactsDiv(false, index))
                }
                onTouchStart={() => this.showReactsDiv(true, index)
                }
                onMouseEnter={() => this.showReactsDiv(true, index)
                }
                onMouseLeave={() => this.showReactsDiv(false, index)
                }
              // onTouchEnd={() => {
              //   this.showReactsDiv(false);
              // }}
              // onBlur={() => {
              //   this.showReactsDiv(false);
              // }}
              >
                {posts.react ? <span className='btnreact' ><FacebookEmoji type={posts.react} size="xs" /></span> :
                  <ThumbUpAlt />} &nbsp; &nbsp; <span className='btntext'>{posts.react ? posts.react === 'like' ? 'Liked' : posts.react : 'Like'}</span>
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
