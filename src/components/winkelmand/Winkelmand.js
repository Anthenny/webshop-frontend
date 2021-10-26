import React from "react";
import { useSelector } from "react-redux";

// Eigen imports
import WinkelmandList from "./WinkelmandList";
import "./winkelmand.scss";

const WinkelMand = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="winkelmand">
      <h1>Winkelmand</h1>
      <div className="winkelmand_box">
        <ul>
          {/* Check of er producten zijn anders geen producten in uw winkelmand */}
          {cartItems.map((item) => (
            <WinkelmandList
              key={item.id}
              id={item.id}
              naam={item.naam}
              prijs={item.prijs}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
              image={item.image}
            />
          ))}
        </ul>
        <div className="afreken_box">
          <div className="totaal">
            <h1>Totaal</h1>
            <p>$ {cartTotalAmount.toFixed(2)} </p>
          </div>
          <div className="btn_afrekenen">
            <button>Reken af</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinkelMand;
