import React, { useEffect, useState } from "react";
import { auth, providerEmail } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import {Home} from "../../pages/Home";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Email } from "../../assets/svg/mail.svg";


export function LoginEmail({handleClose}) {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, providerEmail).then((data) => {
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
        <Button variant="danger" onClick={() => {handleClick(); handleClose()}}><Email width={'18px'} height={'18px'}/>Signin With Email</Button>
      )}
    </div>
  );
}
