import Header from "../components/Header";
import { Carousel1 } from "../layout/Carousel-1";
import EditorsPick from "../layout/EditorsPick";
import BestSellerProduct from "../layout/BestSellerProducts";
import { Carousel2 } from "../layout/Carousel-2";

const HomePage = () => {
  return (
    <main className=" font-montserrat">
      <Header />
      <Carousel1 />
      <EditorsPick />
      <BestSellerProduct />
      <Carousel2 />
    </main>
  );
};

export default HomePage;
