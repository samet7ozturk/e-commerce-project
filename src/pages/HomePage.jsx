import Header from "../layout/Header";
import { CarouselTransition } from "../layout/Carousel";
import EditorsPick from "../layout/EditorsPick";
import BestSellerProduct from "../layout/BestSellerProducts";

const HomePage = () => {
  return (
    <main className=" font-montserrat">
      <Header />
      <CarouselTransition />
      <EditorsPick />
      <BestSellerProduct />
    </main>
  );
};

export default HomePage;
