import img from "../assets/product-description.png";
import svg from "../assets/right-arrow.svg";

const ProductDescription = () => {
  return (
    <main className="flex flex-col items-center px-12">
      <div className="flex gap-10 h-[91px] items-center">
        <p className="text-[#737373] text-sm font-semibold">Description</p>
        <p className="text-[#737373] text-sm font-bold">
          Additional Information
        </p>
        <div className="flex gap-2">
          <p className="text-[#737373] text-sm font-bold">Reviews</p>
          <p className="text-[#23856D] text-sm font-bold">(0)</p>
        </div>
      </div>
      <hr />
      <div className="flex gap-12 flex-wrap justify-center">
        <div className="flex w-[332px]">
          <img
            src={img}
            alt="img"
            className="cursor-pointer rounded-xl shadow-[15px_10px_0px_7px_#00000008]"
          />
        </div>
        <div className="flex flex-col w-[332px]">
          <h2 className="text-[#252B42] text-2xl font-bold">
            the quick fox jumps over
          </h2>
          <p className="text-[#737373] text-sm pt-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-[#737373] text-sm pt-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-[#737373] text-sm pt-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="flex flex-col w-[332px]">
          <div>
            <h2 className="text-[#252B42] text-2xl font-bold">
              the quick fox jumps over
            </h2>
            <p className="text-[#737373] text-sm font-bold flex gap-4 pt-6">
              <img src={svg} alt="svg" className="" />
              the quick fox jumps over the lazy dog
            </p>
            <p className="text-[#737373] text-sm font-bold flex gap-4 pt-4">
              <img src={svg} alt="svg" className="" />
              the quick fox jumps over the lazy dog
            </p>
            <p className="text-[#737373] text-sm font-bold flex gap-4 pt-4">
              <img src={svg} alt="svg" className="" />
              the quick fox jumps over the lazy dog
            </p>
            <p className="text-[#737373] text-sm font-bold flex gap-4 pt-4">
              <img src={svg} alt="svg" className="" />
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <div>
            <h2 className="text-[#252B42] text-2xl font-bold flex pt-6">
              the quick fox jumps over
            </h2>
            <p className="text-[#737373] text-sm font-bold flex gap-4 pt-6">
              <img src={svg} alt="svg" className="" />
              the quick fox jumps over the lazy dog
            </p>
            <p className="text-[#737373] text-sm font-bold flex gap-4 pt-4">
              <img src={svg} alt="svg" className="" />
              the quick fox jumps over the lazy dog
            </p>
            <p className="text-[#737373] text-sm font-bold flex gap-4 pt-4">
              <img src={svg} alt="svg" className="" />
              the quick fox jumps over the lazy dog
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDescription;
