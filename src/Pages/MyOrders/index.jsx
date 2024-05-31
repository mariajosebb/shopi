import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import OrdersCard from "../../Components/OrdersCard";
import Layout from "../../Components/Layout";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="min-h-[600px]">
        <div className="mb-4">
          <h1 className="font-medium text-xl"> My Orders </h1>
        </div>

        {context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              key={order.id}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
              date={order.date}
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default MyOrders;
