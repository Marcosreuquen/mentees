import * as yup from 'yup';
import styled from 'styled-components';
import { Label, Input, Textarea } from 'components/form/styled';
import { PrimaryButton } from 'components/form/styled';

export const SuggestionsForm = () => {
    
    function handleSubmit (e: any) {
        e.preventDefault();

    }

   return <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Nombre y apellido
        <Input id="name" type="text"/>
      </Label>
      <Label htmlFor="email">
        Email
        <Input id="email" type="email"/>
      </Label>
      <Label htmlFor="comment">
        Comentario
        <Textarea id="comment"/>
      </Label>
      <PrimaryButton>Enviar</PrimaryButton>
    </FormContainer>
}

export const FormContainer = styled.form`

`