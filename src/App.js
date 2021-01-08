import React from 'react';
import axios from "axios";
import Movie from "./Movie";


class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async () => {
    const {data : {data :{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    console.log(movies)
    this.setState({movies : movies,isLoading : false})
  }//async와 await은 기다려주는데 사용

  componentDidMount(){
      this.getMovies();
  };
  render(){
    const {isLoading, movies} = this.state;
    return <div>{isLoading ? "Loading" : movies.map(movie => {
      return <Movie
      key = {movie.id}
       id={movie.id}
       year={movie.year}
        title ={movie.title}
         summary={movie.summary}
          poster={movie.midium_cover_image} 
          genres={movie.genres} />
    })}</div>
  }
}

export default App;
