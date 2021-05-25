import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';


class App extends Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // console.log(movies.data.data.movies);
    // 무친... ES6문법중 하나
    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

    this.setState({
      isLoading: false,
      movies: movies
    })
  }
  
  componentDidMount(){
    this.getMovies();
    
  }

  renderMovies = () => {
    this.state.movies.map(movie => {
      console.log(movie);
      return(
        <Movie 
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary}  
          poster={movie.medium_cover_image}
        />
      )
    })
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <div>
        {
          isLoading ? "Loading..." : movies.map(movie => {
            return(
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary}  
                poster={movie.medium_cover_image}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
