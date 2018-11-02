import React, { Component } from 'react';
import './App.css';

import AppBar from './components/AppBar/AppBar';
import Posts from './components/Posts/Posts';

import 'typeface-roboto';

// import FbImageLibrary from 'react-fb-image-grid';


class App extends Component {

  constructor() {
    super()

    this.state = {

      fbPosts: [
        {
          photo: 'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/35480773_1690613501035186_3359411986004705280_n.jpg?_nc_cat=103&_nc_ht=scontent.fkhi1-1.fna&oh=e5bdba2cb579f5527348dc52734f6ceb&oe=5C768E61',
          name: 'Muhammad Afzal Khan',
          time: Date.now(),
          desc: '1st name China_Port :P 2nd name SSUET_Port :D SSUET Sports_Gala <3',
          images: [
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/37390739_1737948582968344_2537555988026753024_n.jpg?_nc_cat=101&_nc_ht=scontent.fkhi1-1.fna&oh=423debc62351676291493ac81de1b5f6&oe=5C764DA2',
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/37336518_1737948656301670_3987028521812754432_n.jpg?_nc_cat=108&_nc_ht=scontent.fkhi1-1.fna&oh=26e1f303c45117408ec0452064db7ae2&oe=5C4A9C21',
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/37274238_1737948809634988_8172533959184351232_n.jpg?_nc_cat=111&_nc_ht=scontent.fkhi1-1.fna&oh=56b4d531aba249f4d222634c4175559c&oe=5C7D3D94',
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/37376103_1737948942968308_6587255062010003456_n.jpg?_nc_cat=108&_nc_ht=scontent.fkhi1-1.fna&oh=4a5cd5c73bdcf3c6a0fba221d61faca0&oe=5C75D9D2',
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/37390739_1737948582968344_2537555988026753024_n.jpg?_nc_cat=101&_nc_ht=scontent.fkhi1-1.fna&oh=423debc62351676291493ac81de1b5f6&oe=5C764DA2',
            '', '', ''

          ],
          likes: ['Muhammad Afzal Khan', 'Muhammad Usama', 'Asad', 'Umair', 'Taha', '', '', '', '', '', '', '', ''],

        },
        {
          photo: 'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/35480773_1690613501035186_3359411986004705280_n.jpg?_nc_cat=103&_nc_ht=scontent.fkhi1-1.fna&oh=e5bdba2cb579f5527348dc52734f6ceb&oe=5C768E61',
          name: 'Muhammad Afzal Khan',
          time: Date.now()-31231131,
          desc: 'Eid Mubarak :)',
          images: ['https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/39999669_1801223866640815_4201991549078208512_n.jpg?_nc_cat=104&_nc_ht=scontent.fkhi1-1.fna&oh=5a042863013e24c7427261fa6b7e1631&oe=5C7FC00A',
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/39948188_1801223913307477_3608225591855153152_n.jpg?_nc_cat=110&_nc_ht=scontent.fkhi1-1.fna&oh=37acc36154e134b27cb3cf8177817efa&oe=5C7E9381',
          ],
          likes: ['Taha Jamal', 'Muhammad Afzal Khan', 'Muhammad Usama', 'Asad', 'Umair', '', '', ''],
        },
        {
          photo: 'https://avatars2.githubusercontent.com/u/36229784?s=400&v=4',
          name: 'Muhammad Usama',
          time: Date.now()-312311312,
          desc: '4th semister is just about to be end. But the bonding between us will never <3 ; )',
          images: [
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43120241_929929693878238_5418292275459391488_n.jpg?_nc_cat=103&_nc_ht=scontent.fkhi1-1.fna&oh=5ce1c787594ae856b70b30c5e8823c5c&oe=5C409AF9',
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43110265_929929720544902_8616425280266829824_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=c2d0b7e26d51acdfe348bae55d6f4914&oe=5C748ADF',
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43076098_929929703878237_823805582417854464_n.jpg?_nc_cat=103&_nc_ht=scontent.fkhi1-1.fna&oh=3c7d744eafd865f78b0fc2d1ef54d013&oe=5C3DCA7E',
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43085545_929929687211572_2319497947198259200_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=f4fe4c1dbbb17d7cec05fc86d2031571&oe=5C832548',
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43120241_929929693878238_5418292275459391488_n.jpg?_nc_cat=103&_nc_ht=scontent.fkhi1-1.fna&oh=5ce1c787594ae856b70b30c5e8823c5c&oe=5C409AF9',
          ],
          likes: ['Muhammd Asad Sheikh', 'Muhammad Usama', 'Taha Jamal', 'Muhammad Afzal Khan', 'Umair', '', '', '', '', ''],
        },
        {
          photo: 'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/35480773_1690613501035186_3359411986004705280_n.jpg?_nc_cat=103&_nc_ht=scontent.fkhi1-1.fna&oh=e5bdba2cb579f5527348dc52734f6ceb&oe=5C768E61',
          name: 'Muhammad Afzal Khan',
          time: Date.now()-3123113121,
          desc: 'BBQ Night wid Czns, Late n8 Scene :D',
          images: [
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/39753179_1801707203259148_3706996525264535552_n.jpg?_nc_cat=105&_nc_ht=scontent.fkhi1-1.fna&oh=b82ae87e513bb84184707cab5b3b0b1f&oe=5C4949F7',
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/40131029_1801707256592476_4929030461755228160_n.jpg?_nc_cat=100&_nc_ht=scontent.fkhi1-1.fna&oh=f35b6676968dc47a8d0d1060d338eeb1&oe=5C445595',
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/35480773_1690613501035186_3359411986004705280_n.jpg?_nc_cat=103&_nc_ht=scontent.fkhi1-1.fna&oh=e5bdba2cb579f5527348dc52734f6ceb&oe=5C768E61',
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/40008562_1801707339925801_7144795091805143040_n.jpg?_nc_cat=111&_nc_ht=scontent.fkhi1-1.fna&oh=6353f818bcd854c26e76348def24807b&oe=5C7C2D02',
            'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/40004145_1801224036640798_3908046731824070656_n.jpg?_nc_cat=108&_nc_ht=scontent.fkhi1-1.fna&oh=646b341af9e2ae40e1e4a89d358ec8e9&oe=5C7B4444',

          ],
          likes: ['Umair Serwar', 'Muhammd Asad Sheikh', 'Muhammad Usama', 'Taha Jamal', 'Muhammad Afzal Khan', '', '', '', ''],

        }
      ]

    };

  }

  render() {

    const { fbPosts } = this.state;
    return (
      <center>
        <div>

          <AppBar />
          <div className='fbpost'>
            <Posts fbPosts={fbPosts} />
          </div>

        </div>
      </center>
    );
  }
}

export default App;
