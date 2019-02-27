import React from 'react';
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

export default class GifListContainer extends React.Component {

  state={
    data: []
  }

  searchAction = (event, term) => {

    const url1 = "http://api.giphy.com/v1/gifs/search?q="
    const url2 = "&api_key=dc6zaTOxFJmzC&rating=g"
    if (term !== "") {
      fetch(url1 + term + url2)
      .then(res => res.json())
      .then(obj => this.setState({
        data: obj.data.slice(0,3)
      }))
    }

  }

  render(){
    return(
      <div>
        <GifSearch searchAction={this.searchAction}/>
        <GifList objs={this.state.data}/>
      </div>
    )
  }
}
