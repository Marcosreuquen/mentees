import styled from "styled-components";
import Image from "next/image";
import LogoSvg from "/public/logowhite.svg"
import css from "./index.module.css";
import { useRouter } from "next/router";
import { HeaderContainer } from "./styled";
import { Example, LoginPopup } from "components/login-popup";

export const Header = () => {
    const router = useRouter()

    function handleLogoClick () {
        router.push("/")
    }

    return <HeaderContainer>
        <Image onClick={handleLogoClick} src={LogoSvg} className={css.logo} alt="Mentees Logo" />
        <LoginPopup/>
    </HeaderContainer>
};
