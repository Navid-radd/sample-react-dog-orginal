import About from './About/About';
import './App.css';
import Header from './Header/Header';
import Blog from './Blog/Blog'
import Article from './Article/Article';
import Gallery from './Gallery/Gallery';
import Dogsitting from './DogSitting/Dogsitting';
import Parallax from './Parallax/Parallax';
import News from './News/News';
import Footer from './Footer/Footer';

function App() {
  return (
    <body>

      <div className="App">

        <Header />
        <About />
        <Blog />
        <Article />
        <Gallery />
        <Dogsitting />
        <Parallax />
        <News />
        <Footer />
      </div>
    </body>
  );
}

export default App;
