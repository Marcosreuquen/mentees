import { PrimaryButton } from 'components/form/styled';
import { Login } from 'components/login';
import { useMe } from 'hooks/mentor';
import router from 'next/router';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export function LoginPopup() {
  const user = useMe()
  const [smShow, setSmShow] = useState(false);
   
  return (
    <>
    {user?<PrimaryButton onClick={()=>{router.push("/mentor")}}>
      Mi Perfil
    </PrimaryButton>
    :
    <PrimaryButton onClick={() => setSmShow(true)}>
        Quiero ser mentor
      </PrimaryButton>}
      <Modal 
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{
          borderBottom: "none",
          backgroundColor: "var(--gris-claro)",
          width: "300px"
        }} closeButton>
        </Modal.Header>
        <Modal.Body style={{
          borderRadius: "0 0 7px 7px",
          height: "145px",
          backgroundColor: "var(--gris-claro)",
          width: "300px"
        }}>
          <Login/>
        </Modal.Body>
      </Modal>
    </>
  );
}