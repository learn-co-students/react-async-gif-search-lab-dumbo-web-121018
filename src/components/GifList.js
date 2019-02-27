import React from 'react';

export default class GifList extends React.Component  {
  render(){

    const items = this.props.objs.map((item, index) => <li key={index}><img alt="" src={item.images.original.url} /></li>)

    return (
      <ul>
        {items}
      </ul>
    )
  }
}
