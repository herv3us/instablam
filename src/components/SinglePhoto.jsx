function SinglePhoto({ img, flipped }) {
  return (
    <div>
      <div className={flipped ? 'flipped' : ''}>
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
    </div>
  );
}

export default SinglePhoto;
