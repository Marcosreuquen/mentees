import { Input, Label } from "components/form/styled";
import { getToken, sendCode } from "lib/api";
import router from "next/router";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { PrimaryButton } from "UI/buttons";
import { Body, Tiny } from "UI/text";
import { userTypeSet } from "utils/atoms/atoms";
import { EmailButtonsContainer, FormLogin } from "./styled";

export function MenteesLogin () {
    const setUserTypeSet = useSetRecoilState(userTypeSet);

    const [email, setEmail]= useState("");

    function handleBackButton() {
        setUserTypeSet(false);
    }

    function handlerEmailForm(e:any){
        e.preventDefault()
        const email = e.target.email.value;
        console.log(email,"envia el email");
        
        sendCode(email)
        setEmail(email)
    }
    async function handlerCodeForm(e:any){
        e.preventDefault()
        const code = e.target.code.value;
        try {
            getToken(email,code).then(()=>{
                router.push("/mentor")
            })
        } catch (error) {
            console.log(error);
        }
    }

    const emailFormStyle = {
        display: email? "none":"",
    };

    const codeFormStyle = {
        display: email? "":"none",
        bottom: "35px"
    };

    return <>
            <FormLogin style={emailFormStyle} onSubmit={handlerEmailForm}>
                <Body>Ingresar como Mentees</Body>
                <Label htmlFor="email">Email</Label>
                <Input style={{margin:"10px"}} type="email" name="email" id="email"/>
                <EmailButtonsContainer>
                    <PrimaryButton onClick={handleBackButton}>Atras</PrimaryButton>
                    <PrimaryButton>Enviar</PrimaryButton>
                </EmailButtonsContainer>
            </FormLogin>
            <FormLogin style={codeFormStyle} onSubmit={handlerCodeForm}>
                <Label htmlFor="code">Código</Label>
                <Input style={{margin:"5px"}} type="text" name="code" id="code"/>
                <Tiny style={{alignSelf: "center"}}>Te enviamos un código a tu email</Tiny>
                <PrimaryButton style={{alignSelf: "flex-end",margin: "5px"}}>Enviar</PrimaryButton>
            </FormLogin>
    </>
  };