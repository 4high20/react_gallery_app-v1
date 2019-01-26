import React from 'react';
import GalleryItem from './GalleryItem';
import NoResults from './NoResults';

const Gallery = (props) => {

  const results = props.data;
  let photos;
  if(results.length > 0){
    photos = results.map(photo =>
          <GalleryItem
            id={photo.id}
            farm={photo.farm}
            server={photo.server}
            secret={photo.secret}
            text={photo.title}
            key={photo.id}
          />);
  } else {
    photos = <NoResults />
  }
    return(
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {photos}
        </ul>
      </div>
    );
};

export default Gallery;
