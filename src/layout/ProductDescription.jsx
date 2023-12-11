import img from "../assets/product-description.png";

const ProductDescription = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="flex gap-10 h-[91px] items-center">
        <p className="text-[#737373] text-sm font-semibold">Description</p>
        <p className="text-[#737373] text-sm font-bold">
          Additional Information
        </p>
        <p className="text-[#737373] text-sm font-bold">Reviews</p>
        <p className="text-[#23856D] text-sm font-bold">(0)</p>
      </div>
      <hr />
      <div className="flex">
        <div className="flex w-1/3">
          <img src={img} alt="img" className="cursor-pointer" />
        </div>
        <div className="flex flex-col w-1/3">
          <h2 className="text-[#252B42] text-2xl font-bold">
            the quick fox jumps over
          </h2>
          <p className="text-[#737373] text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-[#737373] text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-[#737373] text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="flex flex-col w-1/3">
          <div>
            <h2 className="text-[#252B42] text-2xl font-bold">
              the quick fox jumps over
            </h2>
            <p className="text-[#737373] text-sm font-bold">
              the quick fox jumps over the lazy dog
            </p>
            <p className="text-[#737373] text-sm font-bold">
              the quick fox jumps over the lazy dog
            </p>
            <p className="text-[#737373] text-sm font-bold">
              the quick fox jumps over the lazy dog
            </p>
            <p className="text-[#737373] text-sm font-bold">
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <div>
            <h2 className="text-[#252B42] text-2xl font-bold">
              the quick fox jumps over
            </h2>
            <p className="text-[#737373] text-sm font-bold">
              the quick fox jumps over the lazy dog
            </p>
            <p className="text-[#737373] text-sm font-bold">
              the quick fox jumps over the lazy dog
            </p>
            <p className="text-[#737373] text-sm font-bold">
              the quick fox jumps over the lazy dog
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDescription;
