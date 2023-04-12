import React, { useEffect, useState } from "react";
import { auth, providerEmail } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { Home } from "../../pages/Home";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as Email } from "../../assets/svg/mail.svg";
// import { signInWithEmailAndPassword } from "firebase/auth";

export function LoginEmail({ handleClose }) {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, providerEmail).then((data) => {
      // requireDisplayName: true,
      // signInMethod: getEmailSignInMethod(),
      // disableSignUp: {
      //   status: getDisableSignUpStatus()
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
          variant="danger"
          onClick={() => {
            handleClick();
            handleClose();
          }}
        >
          <Email className="d-block me-3" width={"18px"} height={"18px"} />
          <span>Signin With Email</span>
        </Button>
      )}
    </>
  );
}
