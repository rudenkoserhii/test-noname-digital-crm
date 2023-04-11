import React, { useEffect, useState } from "react";
import { auth, providerGoogle } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import {Home} from "../../pages/Home";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Google } from "../../assets/svg/google.svg";


export function LoginGoogle({handleClose}) {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, providerGoogle).then((data) => {
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
        <Button variant="light" onClick={() => {handleClick(); handleClose()}}><Google width={'18px'} height={'18px'}/>Signin With Google</Button>
      )}
    </div>
  );
}
