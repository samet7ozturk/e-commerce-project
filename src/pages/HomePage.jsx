import Header from "../layout/Header";
import { CarouselTransition } from "../layout/Carousel";
import EditorsPick from "../layout/EditorsPick";

const HomePage = () => {
  return (
    <main className=" font-montserrat">
      <Header />
      <CarouselTransition />
      <EditorsPick />
    </main>
  );
};

export default HomePage;
