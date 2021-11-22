import SinglePhoto from './SinglePhoto';

function Gallery({ gallery, setGallery }) {
  const handleDelete = (id) => {
    const newGallery = gallery.filter((photo) => photo.id !== id);
    setGallery(newGallery);
  };

  return (
    <div className="gallery">
      <ul className="gallery-list">
        {gallery.map((img) => (
          <li className="gallery-list_item" key={img.id}>
            <SinglePhoto img={img} />
            <button onClick={() => handleDelete(img.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
