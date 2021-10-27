import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Contact from "./components/footer/contact/Contact";
import Inspiratie from "./components/footer/inspiratie/Inspiratie";
import Retourneren from "./components/footer/retourneren/Retourneren";
import Login from "./components/auth/Login";
import Signup from "./components/auth/signup";
import Producten from "./components/producten/Producten";
import Winkelmand from "./components/winkelmand/Winkelmand";
import Bevestig from "./components/betalen/Bevestig";

import { authActions } from "./store/auth-slice";
import "./app.scss";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import { cartActions } from "./store/cart-slice";
import Succes from "./components/betalen/Succes";

let isInitial = true;

function App() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const cart = useSelector((state) => state.cart);
  const gebruiker = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Check een keer of er een token is wanneer de app start
  useEffect(() => {
    try {
      const storedData = JSON.parse(localStorage.getItem("gebruikerInfo"));
      if (storedData && storedData.token) {
        dispatch(
          authActions.login({
            gebruikerId: storedData.gebruikerId,
            token: storedData.token,
          })
        );
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }, [dispatch]);

  // Plaats winkelmand items in de localStorage
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cartItems"));

    if (storedData) {
      storedData.items.forEach((item) => {
        // check wat item.quantity is en op basis daarvan voor je x aantal x de dispatch uit
        const quantity = item.quantity;

        dispatch(
          cartActions.addItemToCart({
            id: item.id,
            prijs: item.prijs,
            image: item.image,
            naam: item.naam,
          })
        );
      });
    }
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingSpinner asOverlay />
      ) : (
        <>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/wachtwoordVergeten" exact>
              <Home />
            </Route>
            <Route path="/resetWachtwoord" exact>
              <Home />
            </Route>
            <Route path="/gebruikers/updateMijnWachtwoord" exact>
              <Home />
            </Route>
            <Route path="/gebruikers/all" exact>
              <Home />
            </Route>
            <Route path="/producten/:categorie" exact>
              <Producten />
            </Route>
            <Route path="/producten/nieuw" exact>
              <Home />
            </Route>
            <Route path="/gebruiker" exact>
              <Home />
            </Route>
            <Route path="/product/:productId" exact>
              <Home />
            </Route>
            <Route path="/winkelmand/bevestigen" exact>
              <Bevestig />
            </Route>
            <Route path="/succes" exact>
              <Succes />
            </Route>
            <Route path="/winkelmand" exact>
              <Winkelmand />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/inspiratie" exact>
              <Inspiratie />
            </Route>
            <Route path="/retourneren" exact>
              <Retourneren />
            </Route>
          </Switch>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
