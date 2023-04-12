import { LoginEmail } from "../LoginEmail/LoginEmail";
import { LoginFacebook } from "../LoginFacebook/LoginFacebook";
import { LoginGoogle } from "../LoginGoogle/LoginGoogle";
import { LoginPhone } from "../LoginPhone/LoginPhone";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Login = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    navigate('/')
  };
  // const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          handleClose();
          navigate("/");
        }}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header className="flex-column-reverse" closeButton>
          <Modal.Title className="text-center">
            Login what ever you want
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column justify-content-center align-items-center gap-3">
          <LoginGoogle handleClose={handleClose} />
          <LoginFacebook handleClose={handleClose} />
          <LoginEmail handleClose={handleClose} />
          <LoginPhone handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer className="d-flex flex-column justify-content-center align-items-center">
          <Button className="w-50" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
