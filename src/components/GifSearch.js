import React, { Component } from 'react';

class GifSearch extends Component {
  state ={
    search: ""
  }

  enterSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  render(){
    return(
      <div className="gif-search">
        <form onSubmit={(e) => this.props.searchGIFs(e, this.state.search)}>
          <p>Enter a search term</p>
          <input type="text" placeholder={this.props.searchTerm} value={this.state.search} onChange={this.enterSearch}/>
          <button className="submit-button" type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default GifSearch
