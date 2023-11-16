import React from "react";
import "./Card.css";
import HTMLFlipBook from "react-pageflip";
import { Link } from "react-router-dom";
import Products from "../../Data";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/bookSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
        <div className="card" key={product.id}>
          <Link to={`/Carddetail/${product.id}`}>
            <div className="card-img">
              <img src={product.img_cover} />
            </div>
          </Link>
          <div className="card-ifo">
            <div className="title">
              <h4>{product.titile}</h4>
            </div>
            <div className="pric">
              <span>$</span>
              <h3>{product.price}</h3>
            </div>
            {/* <button>Show Details</button> */}
            <button onClick={() => dispatch(addItem(product))}>
              Add TO Cart
            </button>
          </div>
        </div>
  );
};

export default Card;
