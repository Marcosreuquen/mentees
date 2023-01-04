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
        aria-labelledby="example-modal-sizes-title-lg"
    >
        <Modal.Header style={{backgroundColor: "var(--gris)", color:"white"}} closeButton>
            <Modal.Title style={{color:"white"}} id="example-modal-sizes-title-lg">
                {name}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{background: "var(--background-gradient_gris)", height: "500px"}}>
            <div>
                <CardImgPopUpConteiner >
                    <CardImgPopUp variant="top" src={imgUrl} />   
                </CardImgPopUpConteiner>
                <CardBody>
                    <CardSubtitle>
                        <Body size="2.5rem">{fieldOfExpertise}</Body>
                    </CardSubtitle>
                    <CardDescription style={{height: "150px"}}>
                        <Body size="1rem">{description}</Body>
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

