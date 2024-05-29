import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);
  const {
    data: { category, description, images, price, title },
  } = data || {};
  let imageUrl = images;
  if (images.length > 0) {
    imageUrl = images[0];
  }
  try{
    imageUrl = JSON.parse(imageUrl);
    return <></>
  }catch(e){
  //  console.info('Could not parse, its ok',)
  }

  const showProduct = (ProductDetail) => {
    context.openProductDetail()
    context.setProductToShow(ProductDetail)
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    console.log(context.cartProducts);
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.closeProductDetail()
    context.openCheckoutSideMenu()
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (
        <div
        className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
        <FaCheck className="h-6 w-6 text-white" />
      </div>
      )
    } else {
        return (
          <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white/60 w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, data.data)}>
          <FaPlus className="h-6 w-6 text-black" />
        </div>
      )}
  }

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-o.5">
          {category?.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={imageUrl}
          alt={description}
        ></img>
      {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
};

export default Card;
