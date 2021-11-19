// import { nanoid } from 'nanoid';

function Gallery({ gallery }) {
  console.log(gallery.map((img) => img.id));

  return (
    <div className="gallery">
      <ul className="gallery-list">
        {gallery.map((img) => (
          <li className="gallery-list_item" key={img.id}>
            <img src={img.src} alt="Photo" />
            <p>
              {img.position} - {img.date}
            </p>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
