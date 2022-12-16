import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import styled from 'styled-components';

export const CardContainer = styled(Card)`
    background-color: transparent;
    border: 2px solid var(--blanco);
`

export const CardBody = styled(Card.Body)`
    padding: 10px;
`

export const CardDescription = styled(Card.Text)`
    height: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
`

export const CardImg = styled(Card.Img)`
    max-height: 160px;
    object-fit: cover;
`
export const ComunityButton = styled.a`
    color: var(--blanco);
    background-color: transparent;
    border-radius: 6px;
    border: 1.5px solid var(--blanco);
    padding: 5px;
    min-width: 250px;
    display: block;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    
    user-select:none;
    text-decoration: none;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s; 

    :hover {
        transition-duration: 0.1s;
        background-color: #3A3A3A;
        color: var(--blanco);
    }
`