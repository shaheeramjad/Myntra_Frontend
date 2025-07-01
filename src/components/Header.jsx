import { IoMdPerson } from "react-icons/io";
import { FaShieldHeart } from "react-icons/fa6";
import { BsBagHeartFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { searchActions } from "../store/searchSlice";

const Header = () => {
  const bagItems = useSelector((store) => store.bag) || [];
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation();

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchActions.setSearchQuery(searchInput));
  };

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#" className="nav_link">Men</a>
        <a href="#" className="nav_link">Women</a>
        <a href="#" className="nav_link">Kids</a>
        <a href="#" className="nav_link">Home & Living</a>
        <a href="#" className="nav_link">Beauty</a>
        <a href="#" className="nav_link">Studio <sup>New</sup></a>
      </nav>
      <form className="search_bar" onSubmit={handleSearch}>
        <span className="material-symbols-outlined search_icon">Search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button type="submit" className="search_btn">Search</button>
      </form>
      <div className="action_bar">
        <div className="action_container">
          <IoMdPerson />
          <span className="action_name">Profile</span>
        </div>
        <div className="action_container">
          <FaShieldHeart />
          <span className="action_name">Wishlist</span>
        </div>
        <Link className={`action_container${location.pathname === "/bag" ? " active" : ""}`} to="/bag">
          <BsBagHeartFill />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bagItems.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;