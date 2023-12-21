import img1 from "../assets/product-introduction-1.png";
import img2 from "../assets/product-introduction-2.png";
import svg1 from "../assets/buynow-button.svg";
import svg2 from "../assets/readmore-button.svg";

const ProductIntroduction = () => {
  return (
    <main className="flex justify-center flex-wrap px-0 flex-col-reverse xl:flex-row">
      <div>
        <img src={img1} alt="img1" className="pt-8 xl:pt-0 hidden xl:block" />
        <img src={img2} alt="img2" className="pt-8 xl:pt-0 block xl:hidden" />
      </div>
      <div className="flex flex-col justify-center text-center xl:px-0 px-[15%] xl:pt-0 pt-28">
        <div className="flex flex-col items-center xl:items-start">
          <p className="text-[#BDBDBD] font-bold pb-8">SUMMER 2020</p>
          <h2 className="text-[#252B42] text-[40px] font-bold pb-8">
            Part of the Neural Universe
          </h2>
          <p className="flex flex-wrap text-[#737373] text-xl pb-6">
            We know how large objects will act, but things on a small scale.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="flex gap-6 xl:gap-2 flex-wrap xl:flex-nowrap justify-center">
            <img
              src={svg1}
              alt="svg1"
              className="cursor-pointer hover:scale-110 hover:drop-shadow-lg transition duration-300"
            />
            <img
              src={svg2}
              alt="svg2"
              className="cursor-pointer hover:scale-110 hover:drop-shadow-lg transition duration-300"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductIntroduction;
