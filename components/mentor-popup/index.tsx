import { 
    CardBody,
    CardDescription, 
    CardImgPopUp, 
    CardImgPopUpConteiner, 
    CardSubtitle, 
    ComunityButtonPopUp } from 'components/mentor-card/styled';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Body, Title } from 'UI/text';

export function MentorPopup({
    children,
    name,
    fieldOfExpertise,
    description,
    imgUrl,
    community,
}:any) {

const [lgShow, setLgShow] = useState(false);
return (
    <>
    <div onClick={() => setLgShow(true)}>{children}</div>
    <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        contentClassName="mentor-popup-conteiner"
    >
        <Modal.Header style={{backgroundColor: "var(--gris)", color:"white", borderBottom:"none"}} closeButton>
            <Modal.Title style={{color:"white", fontSize: "40px", margin: "10px 0"}} id="example-modal-sizes-title-lg">
                {name}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{background: "var(--background-gradient_gris)", height: "500px", border:"none"}}>
            <div>
                <CardImgPopUpConteiner >
                    <CardImgPopUp variant="top" src={imgUrl} />   
                </CardImgPopUpConteiner>
                <CardBody>
                    <CardSubtitle>
                        <Body size="2.5rem">{fieldOfExpertise}</Body>
                    </CardSubtitle>
                    <CardDescription style={{height: "150px"}}>
                        <Body size="1rem" style={{margin: "0 15px 0 0"}}>{description}</Body>
                    </CardDescription>
                    <ComunityButtonPopUp href={community} target="_blank">
                        Ir a la comunidad
                    </ComunityButtonPopUp>
                </CardBody>
            </div>
        </Modal.Body>
    </Modal>
    </>
);
}

