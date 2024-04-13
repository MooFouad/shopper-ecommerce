import React, { useContext, useState } from "react";
import logo from "./assets/logo.png";
import cartIcon from "./assets/cart_icon.png";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import "../App.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [toggleIcon, setToggleIcon] = useState(false);
  const {getTotalItem} = useContext(ShopContext)

  return (
    // nav container
    <div className="flex justify-between items-center p-[12px] max-md:px-[10px] shadow-sm max-md:flex-col">
      {/* logo & icon  */}

      <div className="nav-logo flex justify-between  max-md:w-[100vw] items-center gap-x-4 cursor-pointer md:px-10 max-md:px-4">
        <Link
          to="/"
          onClick={()=>setMenu('shop')}
          className="flex justify-center items-center gap-4 max-md:gap-2"
        >
          <img src={logo} alt="logo" className="md:w-[50px] max-md:w-[30px]" />
          <h1 className="uppercase bold md:text-4xl max-md:text-lg">Shopper</h1>
        </Link>
        {/* Mobile  cart */}
        <div className="nav-login-cart flex items-center gap-x-4 md:hidden">
          <Link to="/cart">
            <img src={cartIcon} alt="cart-item" width="28px" />
          </Link>
          <div className="cart-counter">{getTotalItem()}</div>
          <button
            onClick={() => {
              setToggleIcon(!toggleIcon);
              setMenu(menu);
            }}
            className="md:hidden"
          >
            {toggleIcon ? <IoCloseOutline /> : <CiMenuFries width="30px" />}
          </button>
        </div>
      </div>
      {/* Desktop Navigation */}
      <ul className="nav-menu md:flex items-center gap-4  max-md:hidden">
        <li
          onClick={() => setMenu("shop")}
          className="cursor-pointer text-gray-600 flex flex-col justify-center items-center gap-2 "
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => setMenu("men")}
          className="cursor-pointer text-gray-600 flex flex-col justify-center items-center gap-2"
        >
          <Link to="/men">Men</Link> {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => setMenu("women")}
          className="cursor-pointer text-gray-600 flex flex-col justify-center items-center gap-2"
        >
          <Link to="/women">Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => setMenu("kids")}
          className="cursor-pointer text-gray-600 flex flex-col justify-center items-center gap-2"
        >
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      {/* Mobile Navigation */}
      {toggleIcon && (
        <>
          <ul className="nav-menu md:hidden max-md:flex items-center gap-4 max-md:flex-col my-4">
            <li
              onClick={() => {
                setMenu("shop");
                setToggleIcon(false);
              }}
              className="cursor-pointer text-gray-600 flex flex-col justify-center items-center gap-2 "
            >
              <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("men");
                setToggleIcon(false);
              }}
              className="cursor-pointer text-gray-600 flex flex-col justify-center items-center gap-2"
            >
              <Link to="/men">Men</Link> {menu === "men" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("women");
                setToggleIcon(false);
              }}
              className="cursor-pointer text-gray-600 flex flex-col justify-center items-center gap-2"
            >
              <Link to="/women">Women</Link>
              {menu === "women" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("kids");
                setToggleIcon(false);
              }}
              className="cursor-pointer text-gray-600 flex flex-col justify-center items-center gap-2"
            >
              <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
            </li>
          </ul>
          <Link to="/login">
            <button className="border-solid border-2 px-8 py-1 rounded-xl bold text-lg text-gray-700 active:bg-gray-200"
            onClick={()=>setToggleIcon(false)}
            >
              Login
            </button>
          </Link>
        </>
      )}
      {/* Desktop login & cart */}
      <div className="nav-login-cart flex justify-center items-center gap-x-2 max-md:hidden">
        <Link to="/login">
          <button className="border-solid border-2 px-8 py-1 rounded-xl bold text-lg text-gray-700 active:bg-gray-200">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="cart-item" width="35px" />
        </Link>
        <div className="cart-counter ">{getTotalItem()}</div>
      </div>
    </div>
  );
};

export default Navbar;
