import { useState } from 'react';

function SinglePhoto({ img }) {
  const [flipped, setflipped] = useState(true);

  const handleClick = () => {
    if (flipped) {
      setflipped(false);
    } else {
      setflipped(true);
    }
  };

  return (
    <div className={flipped ? 'flipped' : ''}>
      <img
        src={img.src}
        alt="Photo"
        className="gallery-list_item-photo front-side "
        onClick={handleClick}
        flipped={flipped}
      />
      <div className="gallery-list_item-photo-back back-side">
        <p>
          {img.position} - {img.date}
        </p>
      </div>
    </div>
  );
}

export default SinglePhoto;
