import React, { Component } from 'react'
import { UncontrolledCarousel } from 'reactstrap';
import './Banner.css'
const items = [
    {
        src: 'https://s3.ap-southeast-1.amazonaws.com/store-front.arifootballstore.com/arifootball/cms/media/MANU19-LP.jpg',
        altText: 'Slide 1',
        caption: '',
        header: ''
      },
      {
        src: 'https://s3.ap-southeast-1.amazonaws.com/store-front.arifootballstore.com/arifootball/cms/media/JUV-AW-LP.jpg',
        altText: 'Slide 2',
        caption: '',
        header: ''
      },
      {
        src: 'https://s3.ap-southeast-1.amazonaws.com/store-front.arifootballstore.com/arifootball/cms/media/BARCELONA-T-HP.jpg',
        altText: 'Slide 3',
        caption: '',
        header: ''
      },
    {
      src: 'https://s3.ap-southeast-1.amazonaws.com/store-front.arifootballstore.com/arifootball/cms/media/CHE-T-LP.jpg',
      altText: 'Slide 4',
      caption: 'NEW ARRIVALS',
      header: ''
    },
    {
      src: 'https://s3.ap-southeast-1.amazonaws.com/store-front.arifootballstore.com/arifootball/cms/media/PSGT20-LP.jpg',
      altText: 'Slide 5',
      caption: '=',
      header: ''
    },
    {
      src: 'https://s3.ap-southeast-1.amazonaws.com/store-front.arifootballstore.com/arifootball/cms/media/shippinglandingpage.jpg',
      altText: 'Slide 6',
      caption: '',
      header: ''
    }
  ];
export default class Banner extends Component {
    render() {
        return (
            <div>
                <UncontrolledCarousel items={items}/>
            </div>
        )
    }
}
