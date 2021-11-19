import { useState } from 'react';
import SinglePhoto from './SinglePhoto';

function Gallery({ gallery, setGallery }) {
  const [flipped, setflipped] = useState(true);

  const handleClick = (photo) => {
    if (flipped) {
      setflipped(false);
    } else {
      setflipped(true);
    }
  };

  const handleDelete = (id) => {
    let newGallery = [...gallery];
    newGallery.map((photo) => {
      if (photo.id === id) {
        newGallery.pop(photo);
        setGallery(newGallery);
      }
    });
  };

  return (
    <div className="gallery">
      <ul className="gallery-list">
        {gallery.map((img) => (
          <li
            className="gallery-list_item"
            key={img.id}
            onClick={() => handleClick(img.id)}
          >
            <SinglePhoto
              key={img.id}
              onClick={handleClick}
              img={img}
              flipped={flipped}
            />
            <button onClick={() => handleDelete(img.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
