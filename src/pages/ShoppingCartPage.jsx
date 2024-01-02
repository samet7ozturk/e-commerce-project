import { useSelector } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";

const ShoppingCartPage = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    for (const cartItem of cart) {
      totalPrice += cartItem.product.price * cartItem.count;
    }
    return totalPrice;
  };

  const totalCartPrice = calculateTotalPrice(shoppingCart.cart).toFixed(2);

  return (
    <main className=" font-montserrat">
      <Header />
      <div className="flex flex-col gap-2">
        {shoppingCart?.cart.map((cartItem) => (
          <div
            key={cartItem.product.id}
            className="flex items-center gap-4 py-2 pl-2  border"
          >
            <div className="flex gap-1">
              <img
                src={cartItem.product.images[0].url}
                alt="Ürün Resmi"
                className="w-10 h-14"
              />
              <div
                variant="small"
                color="gray"
                className="font-semibold flex items-center text-[#737373] text-center"
              >
                {cartItem.product.name}
              </div>
            </div>
            <div>
              <div variant="small" color="gray" className="flex gap-2">
                <p className="text-[#23A6F0] font-bold">Piece:</p>
                <button
                  onClick={() => decreaseCount(cartItem.product)}
                  className="border bg-[#23A6F0] w-4"
                >
                  -
                </button>
                {cartItem.count}
                <button
                  onClick={() => increaseCount(cartItem.product)}
                  className="border w-4"
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <div variant="small" color="gray" className="">
                <p className="text-[#23A6F0] font-bold">Price</p>
                {(cartItem.product.price * cartItem.count).toFixed(2)}
              </div>
            </div>
            <button onClick={() => deleteItem(cartItem.product)}>Delete</button>
          </div>
        ))}
        {<p>Total Price: {totalCartPrice}</p>}
      </div>
      <Footer />
    </main>
  );
};

export default ShoppingCartPage;
