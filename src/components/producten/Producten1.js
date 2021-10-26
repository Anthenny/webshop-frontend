import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import LoadingSpinner from "../shared/LoadingSpinner";
import ProductItem from "./ProductItem1";

const Producten = () => {
  const Product = [
    {
      id: 1,
      image: "./img/leeuwDesk.png",
      naam: "leeuw",
      prijs: 9.99,
    },
  ];
  const dispatch = useDispatch();
  const { id, naam, prijs } = Product[0];

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        naam,
        prijs,
      })
    );
  };

  const categorie = useParams().categorie;
  console.log(categorie);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState();
  //   const [loadedProducts, setLoadedProducts] = useState();

  //   useEffect(() => {
  //     const sendRequest = async () => {
  //       setIsLoading(true);
  //       try {
  //         const response = await fetch(`http://localhost:8000/producten?categorie=${categorie}`);
  //         console.log(response);
  //         const responseData = await response.json();
  //         console.log(responseData);

  //         if (!response.ok) throw new Error(responseData.message);

  //         setLoadedProducts(responseData.data);
  //       } catch (err) {
  //         setError(err.message);
  //       }
  //       setIsLoading(false);
  //     };
  //     sendRequest();
  //   }, [categorie]);
  return (
    <>
      {/* <div>
        {error && <p>`${error.message}`</p>}
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
      </div>
      {!isLoading && loadedProducts && <p>U heeft producten</p>}
      {!isLoading && !loadedProducts && <p>U heeft GEEN producten</p>} */}
      <ul>
        {Product.map((product) => (
          <li>
            <h1>
              {/* {key={product.id}} */}
              {product.id}
              {product.naam}
              {product.prijs}
              <button onClick={addToCartHandler}>Add to Cart</button>
            </h1>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Producten;
