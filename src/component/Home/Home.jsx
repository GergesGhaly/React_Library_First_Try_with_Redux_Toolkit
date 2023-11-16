import React, { useState } from "react";
import Search from "../Search/Search";
import Nav from "../Nav/Nav";
import Cardlist from "../Cardlist/Cardlist";
import Footer from "../Footer/Footer";

const Home = ({ Products }) => {
  const [search, setSearch] = useState('')
  return (
    <div>
      <Nav />
      <Search search={search} setSearch={setSearch}/>
      <Cardlist search={search} Products={Products}/>
      <Footer />
    </div>
  );
};

export default Home;
