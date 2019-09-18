import React, { Component } from 'react'
import { UncontrolledCarousel } from 'reactstrap';
import './Banner.css'
const items = [
    {
        src: 'https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        altText: 'Slide 1',
        caption: 'eiei',
        header: ''
      },
      {
        src: 'https://www.vijittresort.com/wp-content/uploads/2019/07/vijitt-home-slide02.jpg',
        altText: 'Slide 2',
        caption: '',
        header: ''
      },
      {
        src: 'https://www.vijittresort.com/wp-content/uploads/2019/07/vijitt-home-slide03.jpg',
        altText: 'Slide 3',
        caption: '',
        header: ''
      },
    {
      src: 'https://www.vijittresort.com/wp-content/uploads/2019/07/vijitt-home-slide04.jpg',
      altText: 'Slide 4',
      caption: '',
      header: ''
    },
    {
      src: 'https://www.vijittresort.com/wp-content/uploads/2019/07/vijitt-home-slide05.jpg',
      altText: 'Slide 5',
      caption: '',
      header: ''
    },
    {
      src: 'https://www.vijittresort.com/wp-content/uploads/2019/07/vijitt-home-slide06.jpg',
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
