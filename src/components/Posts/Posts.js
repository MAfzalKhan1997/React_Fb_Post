import React, { Component } from 'react';
import '../../App.css';

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
import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAltOutlined';
// import ModeComment from '@material-ui/icons/ModeCommentOutlined';
import InsertComment from '@material-ui/icons/InsertCommentOutlined';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import FbImageLibrary from 'react-fb-image-grid';

const styles = theme => ({
  card: {
    maxWidth: 600,
    // height: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Post extends Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { classes, images } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          className='nomargin'
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={<Typography color="primary" align='left' className='fbname'>Muhammad Afzal Khan</Typography>}
          subheader={<Typography variant='caption' align='left' className='fbdate'>September 14, 2016</Typography>}
        />
        {/* <CardMedia
          className={classes.media}
          image='https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'
          title="Contemplative Reptile"
          /> */}
        <CardContent className='nomargin'>
          
          <Typography className='fbdesc' align='left'>
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
        </CardContent>
        {<FbImageLibrary
        
          images={images}
        // countFrom={2}
        // hideOverlay={true}
        // onClickEach={({src, index}) => {console.log(src,index)}}
        // renderOverlay={() => <button>Show Image</button>}
        // overlayBackgroundColor={'green' or '#000000' or 'rgb(255, 26, 26)'}
        />}
        <CardActions className={classes.actions}>

          <Button aria-label="Add to favorites" className='fsbbtns'>
            <ThumbUpAlt /> &nbsp; <span className='helo'> Like </span>
          </Button>
          <Button aria-label="Comment"  className='fbbtns'>
            <InsertComment /> &nbsp; <span className='helo'> Comment </span>
          </Button>
          <Button aria-label="Share" className='fbbtns'>
            <ShareIcon /> &nbsp; <span className='helo'> Share </span>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);
