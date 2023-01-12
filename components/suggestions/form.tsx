import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Label, Input, Textarea, AlertText } from 'components/form/styled';
import { PrimaryButton } from 'components/form/styled';
import { useForm } from 'react-hook-form';
import {FormContainer} from "./styled";
import css from "./index.module.css";

const schemaSuggestion = yup.object().shape({
  name: yup
    .string()
    .min(3, " · Debes ingresar un nombre válido.")
    .required(" · Debes ingresar tu nombre."),
  lastName: yup
    .string()
    .min(3, " · Debes ingresar un apellido válido.")
    .required(" · Debes ingresar tu apellido."),
  email: yup
    .string()
    .email(" · El email debe ser válido.")
    .required(" · Debes ingresar tu email."),
  suggestion: yup
    .string()
    .min(6)
    .required(" · Debes ingresar un comentario."),
});

export const SuggestionsForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schemaSuggestion),
  });
    
// data: {
// email:"hcosin@gmail.com"
// lastName:"Cosin"
// name: "Hernan"
// suggestion:"Hola hola "
// }
  const onSubmit: any = async (data: any) => {
    console.log(data);
  }

   return <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="name">
        Nombre
        <Input
         id="name"
        type="text" 
        {...register("name", { required: true })}
        aria-invalid={errors.name ? "true" : "false"}
        />
      </Label>
      {errors.name && <AlertText>{`${errors.name.message}`}</AlertText>}
      <Label htmlFor="lastName">
        Apellido
        <Input
         id="lastName"
        type="text" 
        {...register("lastName", { required: true })}
        aria-invalid={errors.lastName ? "true" : "false"}
        />
      </Label>
      {errors.lastName && <AlertText>{`${errors.lastName.message}`}</AlertText>}
      <Label htmlFor="email">
        Email
        <Input
         id="email"
        type="email" 
        {...register("email", { required: true })}
        aria-invalid={errors.email ? "true" : "false"}
        />
      </Label>
      {errors.email && <AlertText>{`${errors.email.message}`}</AlertText>}
      <Label htmlFor="suggestion">
        Comentario
        <Textarea 
        id="suggestion"
        {...register("suggestion", { required: true })}
        aria-invalid={errors.suggestion ? "true" : "false"}
        />
      </Label>
      {errors.suggestion && <AlertText>{`${errors.suggestion.message}`}</AlertText>}
      <PrimaryButton className={css["form-button"]}>Enviar</PrimaryButton>
    </FormContainer>
}
