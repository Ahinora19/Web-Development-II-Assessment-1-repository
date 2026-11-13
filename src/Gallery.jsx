
function Gallery() {
  const albums = [
    { image: 'all-encores.jpg', title: 'All Encores' },
    { image: 'articulation.jpg', title: 'Articulation' },
    { image: 'blurred.jpg', title: 'Blurred' },
    { image: 'encores-2.jpg', title: 'Encores 2' },
    { image: 'eulogy-for-evolution.jpg', title: 'Eulogy for Evolution' }
  ];

  return (
    <section className="gallery" id="artists">
      <div className="featured-album">
        <img
          src="/assets/the-cell.jpg"
          alt="The Cell featured album"
        />
      </div>

      <div className="small-albums">
        {albums.slice(0, 4).map((album) => (
          <img
            key={album.image}
            src={`/assets/${album.image}`}
            alt={album.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
