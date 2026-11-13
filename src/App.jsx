
import Header from './Header';
import Article from './Article';
import Gallery from './Gallery';
import Author from './Author';
import Comments from './Comments';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <main id="blog">

        <Article />
        <Gallery />
        <Author />
        <Comments />
      </main>

      <Footer />
    </>
  );
}

export default App;
 