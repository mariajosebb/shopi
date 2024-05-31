import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { totalPrice } from "../../Utils";

const Layout = ({ children }) => {
  const context = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const handlerClickMyOrders = () => {
    handleCheckout();
    navigate("/my-orders/last");
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date().toDateString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

  return (
    <div className="flex flex-col items-center mt-20">
      {children}
      <footer className="h-14 sticky bottom-0 bg-white flex lg:hidden">
        <ul className="flex gap-5 justify-center items-center">
          <li className="text-gray-400 font-semibold">maria@becerra.dev</li>
          <li onClick={handlerClickMyOrders}> My Orders</li>
          <li className="flex items-center justify-center gap-2">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-black"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <div>{context.cartProducts.length}</div>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
