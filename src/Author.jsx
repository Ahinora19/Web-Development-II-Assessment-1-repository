
function Author() {
  return (
    <section className="author-section" id="story">
      <div className="author-text">
        <h2>The Author</h2>
        <p>
          Sapien leo scelerisque per convallis torquent nunc.
          Lobortis eleifend a nam sit turpis nostra.
          Tempus suspendisse libero curae faucibus lobortis
          litora bibendum praesent! Eget quam magna, diam
          commodo interdum sapien magnis.
        </p>
      </div>

      <img
        src="/assets/profile_picture.jpg"
        alt="Author profile"
        className="author-image"
      />

      <div className="author-social">
        <a href="https://www.facebook.com/" aria-label="Facebook">
          <img src="/assets/facebook-icon.png" alt="Facebook" />
        </a>

        <a href="https://www.instagram.com/" aria-label="Instagram">
          <img src="/assets/instagram-icon.svg" alt="Instagram" />
        </a>

        <a href="https://www.twitter.com/" aria-label="Twitter">
          <img src="/assets/twitter-icon.svg" alt="Twitter" />
        </a>
      </div>
    </section>
  );
}

export default Author;
