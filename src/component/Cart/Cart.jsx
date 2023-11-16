import React from "react";
import "./Cart.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../../store/bookSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { book } = useSelector((state) => state);

  const totalPrice = book.reduce((acc, item) => {
    acc += item.price * item.quant;
    return acc;
  }, 0);

  return (
    <div className="cart-warper">
      <Nav />
      <div className="container-cart">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>

          {book?.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <div className="cart-info">
                    <img src={item.img_cover} alt="" />
                    <div>
                      <p>{item.titile}</p>
                      <span>${item.price}</span>
                      <br />
                      <button onClick={() => dispatch(removeItem(item))}>
                        remove
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <input type="number" value={item.quant} min="1" />
                </td>
                <td>${item.price * item.quant}</td>
              </tr>
            );
          })}
        </table>

        <div class="total-price">
          {totalPrice > 0 ? (
            <table>
              <tr>
                <td>
                  <h4>Total</h4>
                </td>
                <td>${totalPrice}</td>
              </tr>
            </table>
          ) : null}

          {totalPrice > 0 ? (
            <button onClick={() => dispatch(clearCart())}>clear Cart</button>
          ) : null}

          {totalPrice > 0 ? (
            <a href="#" class="checkout btn">
              Checkout
            </a>
          ) : (
            <Link to="/">Cart Empty Add Some Books</Link>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
