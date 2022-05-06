import './App.scss';
import { CarouselSlider } from './components/CarouselSlider';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeaderMob } from './components/HeaderMob';
import { SectionNews } from './components/SectionNews';
import { SectionProducts } from './components/SectionProducts';

function App() {
  return (
    <>
      {window.screen.width > 768 ? (
        <Header />
        ) : (
          <HeaderMob />
        )
      }
      <CarouselSlider />
      <SectionProducts />
      <SectionNews />
      <Footer />
    </>
  );
}

export default App;
