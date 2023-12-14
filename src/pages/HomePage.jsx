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
      <div className="flex flex-col items-center pt-24 pb-6">
        <p className="text-[#737373] text-xl pb-2">Featured Products</p>
        <h2 className="text-[#252B42] text-2xl font-bold pb-2">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-[#737373] text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <BestSellerProduct />
      <Carousel2 />
      <ProductIntroduction />
      <FeaturedPost />
      <Footer />
    </main>
  );
};

export default HomePage;
