import React, { Component } from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 3.5
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating:4.5
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating:5
  }
];


class App extends Component {
  constructor(){
    super();
    // 1
    console.log("constructor");
  };

  componentDidMount(){
    // 3
    console.log("componentDidMount")
  }

  componentDidUpdate(){
    // render()가 다시 조회딜때마다 실행
    console.log("componentDidUpdate")
  }

  state = {
    count:0,
  };

  add = () => {
    let count = this.state.count;
    count++;
    
    this.setState({
      count:count
    })

  };

  minus = () => {
    this.setState(current => ({
      count: current.count - 1
    }))
  }

  render() {
    // 2
    console.log('render')
    return (
      <div>
        <h1>The number is {this.state.count} </h1>
        <button onClick = {this.add}>Add</button>
        <button onClick = {this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
