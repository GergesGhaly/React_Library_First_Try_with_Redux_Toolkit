import React, { useEffect } from "react";
import "./Carddetail.css";
import HTMLFlipBook from "react-pageflip";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/bookSlice";

const Carddetail = ({ Products }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { book } = useSelector((state) => state);

  console.log(book);

  return (
    <div className="wraper">
      <Nav />
      {Products.filter((ind) => ind.id == id).map((product, idx) => (
        <div className="card-page" key={idx}>
          <div className="card-book">
            <HTMLFlipBook width={500} height={700}>
              <div className="demoPage">
                <img src={product.img_cover} />
              </div>
              <div className="demoPage">
                <img src={product.img_fhr2} />
              </div>
              <div className="demoPage">
                <img src="https://freepdf-books.com/doc-images/6266.png" />
              </div>
              <div className="demoPage">
                <img src={product.img_fhr3} />
              </div>
            </HTMLFlipBook>
          </div>
          <div className="rightsid">
            <div className="detaiL">
              <h1>{product.titile}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                accusamus maiores maxime ex pariatur doloremque impedit placeat?
                Eligendi tempore corrupti tenetur nulla? Natus tempora,
                assumenda dolorum quo ipsam sapiente incidunt. Quo veniam eaque
                quasi, obcaecati, qui sequi unde expedita illo quidem asperiores
                rem recusandae fuga id! Voluptates enim eos eum, officiis
                facilis nisi rerum ullam aliquid corporis cum consequuntur
                recusandae illo molestias dignissimos velit eligendi iure veniam
                mollitia excepturi magnam dolorum neque quis. Laborum est
                nostrum atque libero aliquid ullam voluptate saepe eveniet
                quisquam amet consequatur totam molestiae, explicabo vero
                perferendis aspernatur ipsa facilis incidunt! Repellat ipsum
                temporibus consequuntur aperiam!
              </p>
              <button onClick={() => dispatch(addItem(product))}>
                Add TO Cart
              </button>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Carddetail;
