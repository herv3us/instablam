import { useEffect, useState } from 'react';
import SinglePhoto from './SinglePhoto';

function Gallery({ gallery }) {
  const [flipped, setflipped] = useState(true);

  const handleClick = (photo) => {
    if (flipped) {
      setflipped(false);
    } else {
      setflipped(true);
    }
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
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
