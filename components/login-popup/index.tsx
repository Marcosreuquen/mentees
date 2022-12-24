import { PrimaryButton } from 'components/form/styled';
import { Login } from 'components/login';
import { useMe } from 'hooks/mentor';
import { deleteToken } from 'lib/api';
import router from 'next/router';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export function LoginPopup() {
  const user = useMe()
  const [smShow, setSmShow] = useState(false);
  console.log(user, "user");
  
  return (
    <>
    {user?<div style={{display:"flex"}}>
      <PrimaryButton onClick={()=>{router.push("/mentor")}} >
      Mi Perfil
    </PrimaryButton>
    <Button style={{
          backgroundColor: "var(--gris)",
          border: "none",
          margin: "0 5px"
    }} onClick={()=>{
      deleteToken()
      router.push("/").then(()=>{
        router.reload()
      })}}>
      Logout
    </Button>
      </div>
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
        }} closeButton>
        </Modal.Header>
        <Modal.Body style={{
          borderRadius: "0 0 7px 7px",
          height: "145px",
          backgroundColor: "var(--gris-claro)",
        }}>
          <Login/>
        </Modal.Body>
      </Modal>
    </>
  );
}