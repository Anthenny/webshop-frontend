import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

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
import "./app.scss";

let isInitial = true;

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    const sendCartData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:8000/winkelmand/", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        });

        // Je hebt responseData nodig voor de evt error message
        const responseData = await response.json();

        if (!response.ok) {
          if (!response.ok) throw new Error(responseData.message);
        }

        // Als we geen errors hebben wil ik naar de volgende pagina waar ik alle waarder nog een keer laad en de bevestig bestelling/ ik heb het overgemaakt knop is.
        console.log("Data met succes verstuurd");
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    sendCartData();
  }, [cart]);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
