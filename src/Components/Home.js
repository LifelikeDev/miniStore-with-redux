import ProductsPage from "./ProductsPage";

const Home = () => {
  return (
    <>
      <h3>
        Hello from the world of Redux and all the reducers you can think of...
      </h3>

      <button className="btn">Change State</button>

      <ProductsPage />
    </>
  );
};

export default Home;
