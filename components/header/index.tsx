import styled from "styled-components";
import Image from "next/image";
import LogoSvg from "/public/logowhite.svg"
// import LogoSvg from "/public/logo.svg"
import css from "./index.module.css";
import { Button } from "components/form/styled";
import { useRouter } from "next/router";
import { HeaderContainer } from "./styled";

export const Header = () => {
    const router = useRouter()
    
    function handleMentorClick () {
        router.push("/mentor")
    }

    function handleLogoClick () {
        router.push("/")
    }

    return <HeaderContainer>
        <Image onClick={handleLogoClick} src={LogoSvg} className={css.logo} alt="Mentees Logo" />
        <Button onClick={handleMentorClick}>Quiero ser mentor</Button>
    </HeaderContainer>
};
