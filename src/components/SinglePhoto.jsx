import { useState } from 'react';

function SinglePhoto({ img }) {
  const [flipped, setflipped] = useState(true);

  const handleClick = () => {
    flipped ? setflipped(false) : setflipped(true);
  };

  return (
    <div className={flipped ? 'flipped' : ''} onClick={handleClick}>
      <img
        src={img.src}
        alt="Photo"
        className="gallery-list_item-photo front-side "
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
