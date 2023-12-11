import Header from "../components/Header";
import BestSellerProduct from "../layout/BestSellerProducts";
import Footer from "../components/Footer";

const ProductPage = () => {
  return (
    <main className=" font-montserrat">
      <Header />
      <BestSellerProduct />
      <Footer />
    </main>
  );
};

export default ProductPage;
