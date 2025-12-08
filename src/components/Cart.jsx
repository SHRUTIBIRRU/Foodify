import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="w-6/12 mx-auto  p-2 m-2">
      <h1 className="text-2xl text-center font-bold">Cart</h1>

      {cartItems.length === 0 ? (
        <h1 className="text-xl text-center font-semiboldr">
          😐 Oops!! No items Added to Cart. Please add Items to the Cart!
        </h1>
      ) : (
        <>
          <button
            className="p-2 bg-gray-300 rounded-lg text-black-800 font-bold cursor-pointer"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <ItemList items={cartItems} />
        </>
      )}
    </div>
  );
};

export default Cart;
