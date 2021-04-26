// react router imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// variable and function imports
import { useSelector } from "react-redux";
// component imports
import Header from "./Components/Header";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";

const App = () => {
  const products = useSelector((state) => state);

  console.log(products);

  return (
    <>
      <Router>
        <Header />
        <main className="wrapper">
          <Switch>
            <Route exact path="/">
              <Home />
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
