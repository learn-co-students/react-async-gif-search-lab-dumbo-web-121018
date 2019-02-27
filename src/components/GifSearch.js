import React from 'react';

export default class GifSearch extends React.Component  {

  state={
    search: ""
  }

  searchStateHandler = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  searchHandler = (event) => {
    event.preventDefault();
    this.props.searchAction(event, this.state.search);
    this.setState({
      search: ""
    })
  }

  render(){
    return (
      <form onSubmit={this.searchHandler}>
        <input type="text" value={this.state.search} onChange={this.searchStateHandler} />
        <button>Search</button>
      </form>
    )
  }
}
