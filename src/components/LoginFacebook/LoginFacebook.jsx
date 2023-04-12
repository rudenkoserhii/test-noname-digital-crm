import React, { useEffect, useState } from "react";
import { auth, providerFacebook } from "../../firebase";
import { signInWithPopup, g } from "firebase/auth";
import { Home } from "../../pages/Home";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";

export function LoginFacebook({ handleClose }) {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, providerFacebook).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <>
      {value ? (
        <Home />
      ) : (
        <Button
          className="d-flex justify-content-start align-items-center w-50"
          variant="primary"
          onClick={() => {
            handleClick();
            handleClose();
          }}
        >
          <Facebook className="d-block me-3" width={"18px"} height={"18px"} />
          <span>Signin With Facebook</span>
        </Button>
      )}
    </>
  );
}
