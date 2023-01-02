import { LogoutButton, PrimaryButton } from 'components/form/styled';
import { Login } from 'components/login';
import { deleteToken } from 'lib/api';
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { getSavedToken } from 'lib/api';

export function LoginPopup() {
  const [smShow, setSmShow] = useState(false);
  const [token, setToken] = useState("" as any);

  useEffect(()=>{
    const token = getSavedToken(); 
    if (token) {
      setToken(token)
    } else {
      setToken(undefined)
    }
  }, [])
  
  return (
    <>
    {token?<div style={{display:"flex"}}>
      <PrimaryButton onClick={()=>{router.push("/mentor")}} >
      Mi Perfil
    </PrimaryButton>
    <LogoutButton
    onClick={()=>{
      deleteToken()
      router.push("/").then(()=>{
      })}}>
      Logout
    </LogoutButton>
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