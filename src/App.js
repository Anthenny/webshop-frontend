import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

import "./app.scss";
import Contact from "./components/footer/contact/Contact";
import Inspiratie from "./components/footer/inspiratie/Inspiratie";
import Retourneren from "./components/footer/retourneren/Retourneren";
import Login from "./components/auth/Login";
import Signup from "./components/auth/signup";
import Producten from "./components/producten/Producten";

function App() {
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
          <Home />
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
