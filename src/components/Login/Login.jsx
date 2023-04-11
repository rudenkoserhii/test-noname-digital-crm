import { LoginEmail } from "../LoginEmail/LoginEmail";
import { LoginFacebook } from "../LoginFacebook/LoginFacebook";
import { LoginGoogle } from "../LoginGoogle/LoginGoogle";
import { LoginPhone } from "../LoginPhone/LoginPhone";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (

<>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login what ever you want</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<LoginGoogle handleClose={handleClose}/>
<LoginFacebook handleClose={handleClose}/>
<LoginEmail handleClose={handleClose}/>
<LoginPhone handleClose={handleClose}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
};