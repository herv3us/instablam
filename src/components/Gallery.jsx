import { nanoid } from 'nanoid';

function Gallery() {
  const gallery = [
    {
      src: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80',
      position: 'Göteborg',
      date: '2021-11-18',
      id: nanoid(10),
    },
    {
      src: 'https://images.unsplash.com/photo-1455762279210-ae6b56c7ad7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
      position: 'Göteborg',
      date: '2021-11-18',
      id: nanoid(10),
    },
  ];

  console.log(gallery.map((img) => img.id));

  return (
    <div className="gallery">
      <ul className="gallery-list">
        {gallery.map((img) => (
          <li className="gallery-list_item">
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
