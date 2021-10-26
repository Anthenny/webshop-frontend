import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";

const WinkelmandList = (props) => {
  const dispatch = useDispatch();

  const { id, naam, prijs, quantity, totalPrice, image } = props;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        naam,
        prijs,
        quantity,
        totalPrice,
        image,
      })
    );
  };
  return (
    <li className="WinkelMandProduct">
      <div className="product_beschrijving">
        <img src={image} alt="product foto" />
        <div className="product_beschrijving-text">
          <p>{naam}</p>
          <p>{prijs}</p>
        </div>
      </div>
      <div className="product_aantal-box">
        <button onClick={addItemHandler}>+</button>
        <p>{quantity}</p>
        <button onClick={removeItemHandler}>-</button>
      </div>
      <div className="btn_verwijderen">
        <button>
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default WinkelmandList;
