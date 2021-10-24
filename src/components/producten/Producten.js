import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LoadingSpinner from "../shared/LoadingSpinner";

const Producten = () => {
  const categorie = useParams().categorie;
  console.log(categorie);
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

        setLoadedProducts(responseData.data);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, [categorie]);
  return (
    <>
      <div>
        {error && <p>`${error.message}`</p>}
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
      </div>
      {!isLoading && loadedProducts && <p>U heeft producten</p>}
      {!isLoading && !loadedProducts && <p>U heeft GEEN producten</p>}
    </>
  );
};

export default Producten;
