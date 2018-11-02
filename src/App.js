import React, { Component } from 'react';
import './App.css';

import AppBar from './components/AppBar/AppBar';
import Posts from './components/Posts/Posts';

import 'typeface-roboto';

// import FbImageLibrary from 'react-fb-image-grid';

class App extends Component {
  render() {

    const images = ['https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
      'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
      'https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg',
      'https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg',
      'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=350',
      'a'
    ]


    return (
      <center>
        <div>

          <AppBar />
          <div className='fbpost'>
          <Posts images={images}/>              
          </div>
          
        </div>
      </center>
    );
  }
}

export default App;
