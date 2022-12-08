import styled from "styled-components";
import Image from "next/image";
import LogoSvg from "/public/logo.svg"
import css from "./index.module.css";

export const Header = () => {
    return <HeaderContainer>
        <Image src={LogoSvg} className={css.logo} alt="Mentees Logo" />
    </HeaderContainer>
};

export const HeaderContainer = styled.header`
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 10px;
    display: flex;
    justify-content: center;
`