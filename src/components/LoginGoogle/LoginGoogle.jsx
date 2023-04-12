import React, { useEffect, useState } from "react";
import { auth, providerGoogle } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { Home } from "../../pages/Home";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as Google } from "../../assets/svg/google.svg";
import { useNavigate } from "react-router-dom";

export function LoginGoogle({ handleClose }) {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, providerGoogle).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/");
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
          variant="light"
          onClick={() => {
            handleClick();
            // handleClose();
          }}
        >
          <Google className="d-block me-3" width={"18px"} height={"18px"} />
          <span>Signin With Google</span>
        </Button>
      )}
    </>
  );
}
