import Card from "react-bootstrap/Card";
import styled from "styled-components";

export const CardContainer = styled(Card)`
  background-color: transparent;
  border: 2px solid var(--blanco);
`;

export const CardBody = styled(Card.Body)`
  padding: 10px;
`;

export const CardSubtitle = styled.div`
  margin: 0 0 8px 0;
`;

export const CardDescription = styled.div`
  margin: 0 0 12px 0;
  height: 86px;
  overflow: scroll;
  overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 1em;
    }
    
    ::-webkit-scrollbar-track {
        box-shadow: var(--scrollbar-track-card);
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: var(--scrollbar-thumb-card);
        outline: 1px solid grey;
        border-radius: 3px;
    }
`;

export const CardShortDescription = styled.div`
    min-height: 86px;
`

export const CardImg = styled(Card.Img)`
  max-height: 160px;
  object-fit: cover;
`;

export const CardImgPopUp = styled(CardImg)`
max-height: 210px;
max-width: 70%;
border-radius: 15px;
`
export const CardImgPopUpConteiner = styled.div`
display: flex;
justify-content: center;
height: 210px;
align-items: center;
`
export const ComunityButton = styled.a`
  color: var(--blanco);
  background-color: transparent;
  border-radius: 6px;
  border: 1.5px solid var(--blanco);
  padding: 5px;
  min-width: auto;
  display: block;
  font-weight: bold;
  cursor: pointer;
  text-align: center;

  user-select: none;
  text-decoration: none;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;

  :hover {
    transition-duration: 0.1s;
    background-color: #3a3a3a;
    color: var(--blanco);
  }
`;

export const ComunityButtonPopUp = styled(ComunityButton)`
:hover {
    transition-duration: 0.1s;
    background-color: var(--gris);
    color: var(--blanco);
  }
`
export const TextLink = styled.p`
    color: var(--link);
    cursor: pointer;
    width: fit-content; 
`