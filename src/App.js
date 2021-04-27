// react router imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// component imports
import Header from "./Components/Header";
import Home from "./Components/Home";
import ProductInfo from "./Components/ProductInfo";
import AboutUs from "./Components/AboutUs";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="wrapper">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/product/:productId">
              <ProductInfo />
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default App;
