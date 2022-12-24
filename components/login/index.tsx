import { useState } from "react"
import { sendCode, getToken } from "lib/api";
import router from "next/router";
import { Input, Label, PrimaryButton } from "components/form/styled";
import { FormLogin } from "./styled";
import { Tiny } from "UI/text";

export function Login(){
    const [email, setEmail]= useState("")
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
    return <div>
        <FormLogin style={emailFormStyle} onSubmit={handlerEmailForm}>
            <Label htmlFor="">Email</Label>
            <Input style={{margin:"10px"}} type="email" name="email" />
            <PrimaryButton style={{alignSelf: "flex-end",margin: "5px"}}>Enviar</PrimaryButton>
        </FormLogin>
        <FormLogin style={codeFormStyle} onSubmit={handlerCodeForm}>
            <Label htmlFor="">Código</Label>
            <Input style={{margin:"5px"}} type="text" name="code" />
            <Tiny style={{alignSelf: "center"}}>Te enviamos un código a tu email</Tiny>
            <PrimaryButton style={{alignSelf: "flex-end",margin: "5px"}}>Enviar</PrimaryButton>
        </FormLogin>
    </div>
}