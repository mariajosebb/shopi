import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { ShoppingCartContext } from "../../Context";

import "./styles.css";
import { useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const context = useContext(ShoppingCartContext);
  const redirectToHome = () => {
    context.closeProductDetail();
    navigate("/");
  };

  return (
    <aside className={`mt-14 flex-col  bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <IoClose
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => redirectToHome()}
          ></IoClose>
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow.images}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="text-xl font-bold">
          ${context.productToShow.price}
        </span>
        <span className="text-lg font-medium text-center my-2">
          {context.productToShow.title}
        </span>
        <span className="font-light text-justify my-2">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetailPage;
