import React, { useEffect, useState } from "react";
import { auth, providerFacebook } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import {Home} from "../../pages/Home";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";

export function LoginFacebook({handleClose}) {
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
    <div>
      {value ? (
        <Home />
      ) : (
        <Button variant="primary" onClick={() => {handleClick(); handleClose()}}><Facebook width={'18px'} height={'18px'}/>Signin With Facebook</Button>
      )}
    </div>
  );
}
