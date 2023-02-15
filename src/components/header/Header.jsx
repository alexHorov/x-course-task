import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CustomLink } from "components/customLink/CustomLink";
import { useUserInfo } from "hooks/useUserInfo";
import avatarImage from "assets/avatar.png";
import cartImage from "assets/cart.svg";
import "components/header/header.scss";

function Header() {
  const { userName, setUserName, isLoggedIn, setIsLoggedIn, cartStore } =
    useUserInfo();

  const navigation = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    setUserName("");
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("userName", "");
    navigation("/");
  };

  return (
    <div className="header">
      <div className="header__left-block">
        <CustomLink to="booksCatalog">
          <h2>X-course task/Horovyi Oleksandr</h2>
        </CustomLink>
      </div>
      <div className="header__right-block">
        <NavLink to="/cart" href="http://" className="header__cart">
          {cartStore.length > 0 ? (
            <div className="cart__quantity">
              <span>{cartStore.length}</span>
            </div>
          ) : null}

          <img src={cartImage} alt="cart" />
        </NavLink>
        <NavLink to="singIn">
          <button to="singIn" className="sing_out" onClick={handleLogOut}>
            {isLoggedIn ? "Sing-Out" : "Sing-In"}
          </button>
        </NavLink>
        <NavLink to="singIn" href="http://" className="">
          <img className="header__avatar" src={avatarImage} alt="avatar" />
        </NavLink>
        <p className="header__userName">
          {userName !== "" ? userName : "UserName"}
        </p>
      </div>
    </div>
  );
}

export { Header };
