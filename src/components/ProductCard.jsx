import svg from "../assets/product-colors.svg";

const ProductCard = () => {
  return (
    <main>
      <div className="flex flex-col items-center pb-12">
        <h2 className="text-[#252B42] text-base leading-3 font-bold pt-8 pb-4">
          Graphic Design
        </h2>
        <p className="text-[#737373] text-sm pb-4">English Department</p>
        <div className="flex gap-2 pb-4">
          <p className="text-[#BDBDBD] text-sm">$16.48</p>
          <p className="text-[#23856D] text-sm">$6.48</p>
        </div>
        <img src={svg} alt="svg" />
      </div>
    </main>
  );
};

export default ProductCard;
