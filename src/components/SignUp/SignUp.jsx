import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginGoogle } from '../LoginGoogle/LoginGoogle';


export const SignUp = () => {
const navigate = useNavigate();

  const [show, setShow] = useState(true);

  const handleClose = () => {
setShow(false);
// navigate('/')
};
  // const handleShow = () => setShow(true);
  return (

<>
      <Modal
        show={show}
        onHide={()=>{handleClose(); navigate('/')}}
        backdrop="static"
        keyboard={false}
id={'2'}

      >
        <Modal.Header className="flex-column-reverse" closeButton >
          <Modal.Title className='text-center'>Sign up with e-mail & password</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column justify-content-center align-items-center gap-3" >

          <LoginGoogle handleClose={handleClose} />
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