import React, { useEffect, useState } from "react";
import { auth, providerPhone } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { Home } from "../../pages/Home";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as Phone } from "../../assets/svg/phone.svg";

export function LoginPhone({ handleClose }) {
  // const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const handleClick = () => {
    // setShow(true)
    signInWithPopup(auth, providerPhone).then((data) => {
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
          variant="success"
          onClick={() => {
            handleClick();
            handleClose();
          }}
        >
          <Phone className="d-block me-3" width={"18px"} height={"18px"} />
          <span>Signin With Phone</span>
        </Button>
      )}
      {/* {show && <><label for="phone">Phone<input type="phone" id='phone'/></label><button type='button'>Send</button></>} */}
    </>
  );
}
