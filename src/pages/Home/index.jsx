import { CarouselSlider } from '../../components/CarouselSlider';
import { News } from '../../components/News';
import { SectionProducts } from '../../components/SectionProducts';

export function Home() {
  return (
    <>
      <CarouselSlider />
      <SectionProducts />
      <News />
    </>
  );
}
