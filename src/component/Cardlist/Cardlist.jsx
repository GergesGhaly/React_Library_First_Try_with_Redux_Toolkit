import React from "react";
import Card from "../Card/Card";
import "./Cardlist.css";

const Cardlist = ({ Products ,search}) => {
  return (
    <div className="Cardlist">
           {Products.filter((value) => value.titile.toLowerCase().includes(search.toLowerCase())).map((product) => (
            <div className="rwap">
              <Card product={product} />
            </div>
      ))}

    </div>
  );
};

export default Cardlist;
