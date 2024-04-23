import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { items } from "./Data"; // Assuming items is imported from an external source

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((e) => e.category === category);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((e) => e.price >= price);
    setData(element);
  };

  // Reset function to set data to original items
  const resetFilter = () => {
    setData(items); // Resetting to original items
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <>
      <nav className="sticky-top">
        <div className="nav-section-1">
          <Link to={"/"} className="logo">
            AmAzA
          </Link>
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search Products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          <Link to={"/cart"} className="add-to-cart">
            <button type="button" className="btn btn-primary position-relative">
              <FaShoppingCart />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span clasNames="visually-hidden"></span>
              </span>
            </button>
          </Link>
        </div>

        {location.pathname == "/" && (
          <div className="nav-section-2">
            <div className="items">Filter by{"->"}</div>
            <div className="items" onClick={resetFilter}>
              No Filter
            </div>
            <div className="items" onClick={() => filterByCategory("mobiles")}>
              Mobiles
            </div>
            <div className="items" onClick={() => filterByCategory("laptops")}>
              Laptops
            </div>
            <div className="items" onClick={() => filterByCategory("tablets")}>
              Tablets
            </div>
            <div className="items" onClick={() => filterByPrice(20000)}>
              {">="}20000
            </div>
            <div className="items" onClick={() => filterByPrice(40000)}>
              {">="}40000
            </div>
            <div className="items" onClick={() => filterByPrice(60000)}>
              {">="}60000
            </div>
            <div className="items" onClick={() => filterByPrice(80000)}>
              {">="}80000
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
