import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "hooks/useUserInfo";
// import { useAuth } from "hooks/useAuth";
import avatar from "assets/avatar.png";
import "pages/singIn/singIn.scss";

function SingIn() {
  const { setIsLoggedIn, setUserName, isLoggedIn } = useUserInfo();
  const [userInfo, setUserInfo] = useState("");
  const [userError, setError] = useState("");
  const navigate = useNavigate();

  console.log(isLoggedIn);

  const handleUserNameValue = (e) => {
    setUserInfo(e.target.value);
  };

  const handleLogIn = (e) => {
    e.preventDefault();

    if (userInfo.length >= 4 && userInfo.length <= 16) {
      setUserName(userInfo);
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userName", userInfo);
      navigate("/booksCatalog");
    } else if (userInfo.length <= 4) {
      setError(`Символів має бути більше 4`);
    } else if (userInfo.length >= 16) {
      setError(`Символів має бути менше 16`);
    }
  };

  if (isLoggedIn) {
    navigate("/booksCatalog");
  } else {
    return (
      <div className="login-block ">
        <div className="user-picture">
          <img src={avatar} alt="" />
        </div>

        <form className="loginForm" onSubmit={handleLogIn}>
          <label htmlFor="username">Username</label>
          <div style={{ color: "red", fontSize: "12px", margin: "10px" }}>
            {userError}
          </div>
          <input
            className="loginFormInput"
            type="text"
            id="username"
            name="username"
            placeholder="type Username"
            value={userInfo}
            required
            onChange={handleUserNameValue}
          />
          <button className="blackBtn" type="submit" onClick={handleLogIn}>
            Sign-In
          </button>
        </form>
      </div>
    );
  }
}

export { SingIn };
