import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LoadingSpinner from "../shared/LoadingSpinner";
import ProductList from "./ProductList";
import "./Producten.scss";

const Producten = () => {
  const categorie = useParams().categorie;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedProducts, setLoadedProducts] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/producten?categorie=${categorie}`);
        console.log(response);
        const responseData = await response.json();
        console.log(responseData);

        if (!response.ok) throw new Error(responseData.message);

        setLoadedProducts(responseData.data.products);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, [categorie]);

  return (
    <div className="categorieen" id="categorieen">
      <div className="categorieen__box">
        {error && <p>${error.message}</p>}
        {/* {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )} */}

        <div className="categorieen__box--text">
          <h1>Oorbellen</h1>
          {/* Lengte van gevonden resultaten */}
          <p>135 Items gevonden</p>
        </div>
        {/* Maak component van sidebar */}
        <div className="categorieen__box--opties">
          <div className="categorieen--opties__box">
            <div className="categorieen--optie_1">
              <label>Kleur:</label>
              <select name="kleur" className="select__box">
                <option value="" selected disabled hidden>
                  Kies hier:
                </option>
                <option name="alles" value="alles">
                  Alles
                </option>
                <option name="rood" value="rood">
                  Rood
                </option>
                <option name="groen" value="groen">
                  Groen
                </option>
                <option name="blauw" value="blauw">
                  Blauw
                </option>
              </select>
            </div>
            <div className="categorieen--optie_1">
              <label>Maat:</label>
              <select name="Maat" className="select__box">
                <option value="" selected disabled hidden>
                  Kies hier:
                </option>
                <option name="alles" value="alles">
                  Alles
                </option>
                <option name="L" value="L">
                  L
                </option>
                <option name="S" value="S">
                  S
                </option>
              </select>
            </div>
            <div className="categorieen--optie_2">
              <label for="prijsLaag">Prijs laag - hoog</label>
              <input type="checkbox" name="laagHoog"></input>
            </div>
            <div className="categorieen--optie_2">
              <label for="prijsHoog">Prijs hoog - laag</label>
              <input type="checkbox" name="hoogLaag"></input>
            </div>
          </div>
        </div>
      </div>
      {!isLoading && loadedProducts && (
        <div className="producten__box">
          <div className="producten__box--opties">
            <div className="producten--opties active ">
              <p>Alles</p>
            </div>
            <div className="producten--opties">
              <p>Nieuw</p>
            </div>
          </div>
          <div className="producten">
            {/* Als er geen resultaat of 0 of error is geef een bericht aan de gebruiker */}
            <ul>
              {loadedProducts.map((product) => (
                <ProductList
                  key={product._id}
                  id={product._id}
                  image={product.image}
                  // naam={product.naam}
                  prijs={product.prijs}
                />
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Check of lengte van array 0 is */}
      {!isLoading && !loadedProducts && <h1>We hebben hier nog geen producten</h1>}
    </div>
  );
};

export default Producten;
