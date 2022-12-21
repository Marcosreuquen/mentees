import { PrimaryButton } from 'components/form/styled';
import { Login } from 'components/login';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export function LoginPopup() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <PrimaryButton onClick={() => setSmShow(true)}>
        Quiero ser mentor
      </PrimaryButton>
      <Modal 
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{
          borderBottom: "none",
          backgroundColor: "var(--gris-claro)"
        }} closeButton>
        </Modal.Header>
        <Modal.Body style={{
          borderRadius: "0 0 7px 7px",
          height: "145px",
          backgroundColor: "var(--gris-claro)"
        }}>
          <Login/>
        </Modal.Body>
      </Modal>
    </>
  );
}