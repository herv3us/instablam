import { useEffect, useState } from 'react';
import SinglePhoto from './SinglePhoto';

function Gallery({ gallery }) {
  const [flipped, setflipped] = useState(true);
  const [onePhoto, setOnePhoto] = useState(null);

  const handleClick = (photo) => {
    onePhoto ? null : setOnePhoto(photo);
    console.log(photo, onePhoto);

    if (flipped) {
      setflipped(false);
    } else {
      setflipped(true);
    }
  };

  useEffect(() => {}, [onePhoto]);

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
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
