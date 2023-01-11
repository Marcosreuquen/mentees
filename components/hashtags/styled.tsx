import { Tiny } from "UI/text";
import styled from "styled-components";

export const HashtagsContainer = styled.section`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;

    @media(min-width: 467px) {
        grid-template-columns: auto auto auto auto;
    }
    
    @media(min-width: 600px) {
        grid-template-columns: auto auto auto auto auto auto;
    }
`

export const TinyHashtag = styled(Tiny)`
    border: 1.5px solid var(--blanco);
    border-radius: 5px;
    padding: 0 5px;
    cursor: pointer;
    line-height: unset;

    &:hover {
        color: var(--negro);
        font-weight: bold;
        background-color: var(--blanco);
    }
`
