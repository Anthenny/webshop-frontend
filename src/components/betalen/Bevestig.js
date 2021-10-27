// react imports
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";

// eigen files
import LoadingSpinner from "../shared/LoadingSpinner";

// Component waarin we de gebruiker een kans geven om zijn/haar gegevens te bewerken. Als de gebruiker al is ingelogd pakken we deze gegevens van de state en vullen we deze in
const Bevestig = () => {
  const gebruiker = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const naamInputRef = useRef();
  const emailInputRef = useRef();
  const adressInputRef = useRef();
  const plaatsInputRef = useRef();
  const totalAmountInputRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setIsLoading(false);
  }, [gebruiker]);

  const bevestigGegevensHandler = async (e) => {
    e.preventDefault();

    const enteredNaam = naamInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredAdress = adressInputRef.current.value;
    const enteredPlaats = plaatsInputRef.current.value;
    const enteredTotalAmount = totalAmountInputRef.current.value;

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/winkelmand/plaats-bestelling", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          naam: enteredNaam,
          email: enteredEmail,
          adress: enteredAdress,
          plaats: enteredPlaats,
          cart,
          totalAmount: enteredTotalAmount,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) throw new Error(responseData.message);

      // clear state van de winkelmand
      dispatch(cartActions.clearCart());
      // clear local storage winkelmand
      localStorage.removeItem("cartItems");
      setIsLoading(false);
      history.push("/succes");
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  };

  const welGebruiker = () => {
    return isLoading ? (
      <LoadingSpinner asOverlay />
    ) : (
      <>
        <h1>Beste,</h1>
        <p>
          Omdat wij een klein bedrijf zijn vragen we u om het totale bedrag over te maken naar:
          REKENINGNUMMER. Bevestig uw gegevens en wij versturen het product zodra wij de betaling
          binnen hebben.
        </p>

        <p>Heeft u vragen? Aarzel niet en email naar: EMAIL</p>
        <form>
          <input type="text" ref={naamInputRef} value={gebruiker.gebruikerInfo.gebruikerNaam} />
          <input type="email" ref={emailInputRef} value={gebruiker.gebruikerInfo.gebruikerEmail} />
          <input type="text" ref={adressInputRef} value={gebruiker.gebruikerInfo.gebruikerAdress} />
          <input type="text" ref={plaatsInputRef} value={gebruiker.gebruikerInfo.gebruikerPlaats} />
          <input type="text" ref={totalAmountInputRef} value={cart.totalAmount} />
          <button onClick={bevestigGegevensHandler}>bevestig gegevens</button>
        </form>
      </>
    );
  };

  const geenGebruiker = () => {
    return isLoading ? (
      <LoadingSpinner asOverlay />
    ) : (
      <>
        <h1>Beste,</h1>
        <p>
          Omdat wij een klein bedrijf zijn vragen we u om het totale bedrag over te maken naar:
          REKENINGNUMMER. Bevestig uw gegevens en wij versturen het product zodra wij de betaling
          binnen hebben.
        </p>

        <p>Heeft u vragen? Aarzel niet en email naar: EMAIL</p>
        <form>
          <input type="text" ref={naamInputRef} placeholder="vul uw naam in" />
          <input type="text" ref={emailInputRef} placeholder="vul uw email in" />
          <input type="text" ref={adressInputRef} placeholder="vul uw adress in" />
          <input type="text" ref={plaatsInputRef} placeholder="vul uw plaats in" />
          <input type="text" ref={totalAmountInputRef} value={cart.totalAmount} />
          <button onClick={bevestigGegevensHandler}> bevestig gegevens</button>
        </form>
      </>
    );
  };

  return (
    <div>
      {gebruiker.isLoggedIn && welGebruiker()}
      {!gebruiker.isLoggedIn && geenGebruiker()}
    </div>
  );
};

export default Bevestig;
