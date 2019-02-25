import React from 'react';

const GifList = props => {
  const gifs = props.gifs.map(gif => {return <li key={gif.id}><img  alt={gif.title} src={gif.images.original.url} /></li>})
  return (
    <ul className="gif-list">
      {gifs}
    </ul>
  )
}

export default GifList
