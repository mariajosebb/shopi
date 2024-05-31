import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { IoReturnDownBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import OrderCard from "../../Components/OrderCard";
import Layout from "../../Components/Layout";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;

  return (
    <Layout>
      <div className="min-h-[600px]">
        <div className="flex justify-center items-center relative w-80 mb-6">
          <Link to="/my-orders" className="absolute left-0">
            <IoReturnDownBack className="h-6 w-6 text-black cursor-pointer" />
          </Link>
          <h1> My Order </h1>
        </div>
        <div className="flex flex-col w-80">
          {context?.order?.[index]?.products?.map?.((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.images[0]}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default MyOrder;
