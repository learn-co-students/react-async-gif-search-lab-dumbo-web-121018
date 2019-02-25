import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
  state={
    gifs: [],
    searchTerm: ""
  }

  componentDidMount(){
    this.fetchGIFs()
  }

  fetchGIFs = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&limit=3&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(gifObj => this.setState({ gifs: gifObj.data }))
  }

  searchGIFs = (e, search) => {
    e.preventDefault();
    this.setState({ searchTerm: search })
    this.fetchGIFs()
  }

  render() {
    return(
      <div className="container">
        <GifList gifs={this.state.gifs} />
        <GifSearch searchTerm={this.state.searchTerm} searchGIFs={this.searchGIFs} />
      </div>
    )
  }
}

export default GifListContainer;
