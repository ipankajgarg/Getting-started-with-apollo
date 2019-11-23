import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { userInfo } from "os";

function Header(props) {
  const { container } = styles;

  const history = useHistory();

  const location = useLocation();

  const signout = () => {
    localStorage.clear();
    history.push("/login");
  };

  if (location.pathname !== "/login")
    return (
      <div onClick={signout} style={container}>
        Signout
      </div>
    );
  else {
    return <div style={container}>Welcome</div>;
  }
}

const styles = {
  container: {
    padding: "30px 30px 0px 0px",
    textAlign: "right",
    color: "#1890FF",
    cursor: "pointer"
  }
};

export default Header;
