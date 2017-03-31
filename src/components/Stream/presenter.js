import React from 'react';

function Stream({ tracks = []}) {
  return (
    <div>
      {
        tracks.map((track, key) => {return <div className='track' key={key}>{track.title}</div>})
      }
    </div>
  );
}

Stream.propTypes = {
  tracks: React.PropTypes.array.isRequired
};


export default Stream;