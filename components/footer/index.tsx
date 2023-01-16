import { PrimaryButton } from "components/form/styled";
import { useRouter } from "next/router";
import { Body } from "UI/text";
import { FooterConteiner } from "./styled";

export const Footer  = () => {
    const router = useRouter()



    return <FooterConteiner>
            <div style={{maxWidth:"var(--max-width)", display: "flex", alignItems: "center"}}>
                <Body size="1rem" style={{margin:"0px 20px 0 5px"}}>Tu experiencia puede ayudarnos a mejorar. Si tenes alguna sugerencia podes enviarla por acá. </Body>
                <PrimaryButton onClick={()=>{router.push("/suggestions")}} >
                    Sugerencias
                </PrimaryButton>
            </div>
        </FooterConteiner>
};