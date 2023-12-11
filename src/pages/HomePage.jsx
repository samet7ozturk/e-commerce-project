import Header from "../components/Header";
import { Carousel1 } from "../layout/Carousel-1";
import EditorsPick from "../layout/EditorsPick";
import BestSellerProduct from "../layout/BestSellerProducts";
import { Carousel2 } from "../layout/Carousel-2";
import ProductIntroduction from "../layout/ProductIntroduction";
import FeaturedPost from "../layout/FeaturedPost";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <main className=" font-montserrat">
      <Header />
      <Carousel1 />
      <EditorsPick />
      <BestSellerProduct />
      <Carousel2 />
      <ProductIntroduction />
      <FeaturedPost />
      <Footer />
    </main>
  );
};

export default HomePage;
