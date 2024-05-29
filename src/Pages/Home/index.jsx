import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
          <Card data={item} key={item.id} />
        ))
        )
      } else {
        return (
          <h1 className="text-center text-2xl">No results found</h1>
        )
      }
    
    }

  return (
    <Layout>
      <div className="mb-4">
        <h1 className="font-medium text-xl"> Home </h1>
      </div>
      <input
        className="border-2 border-black rounded-lg text-center w-80 p-1 mb-6 focus:outline-none"
        type="text"
        placeholder="Search a product"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      ></input>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
