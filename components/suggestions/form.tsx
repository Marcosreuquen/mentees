import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Label, Input, Textarea, AlertText } from "components/form/styled";
import { PrimaryButton } from "components/form/styled";
import { useForm } from "react-hook-form";
import { FormContainer } from "./styled";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendSuggestion } from "lib/api";
import { useRouter } from "next/router";
import css from "./index.module.css";

const schemaSuggestion = yup.object().shape({
  name: yup
    .string()
    .min(3, " · Debes ingresar un nombre válido.")
    .required(" · Debes ingresar tu nombre."),
  lastname: yup
    .string()
    .min(3, " · Debes ingresar un apellido válido.")
    .required(" · Debes ingresar tu apellido."),
  email: yup
    .string()
    .email(" · El email debe ser válido.")
    .required(" · Debes ingresar tu email."),
  suggestion: yup.string().min(6).required(" · Debes ingresar un comentario."),
});

export const SuggestionsForm = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schemaSuggestion),
  });

  const onSubmit: any = async (data: Suggestion) => {
    const name = capitalizeName(data.name);

    try {
      const res = await sendSuggestion(data);

      if (res.result) {
        toast.success(`Gracias ${name}, hemos recibido tu comentario.`, {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      router.push("/");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  return <>
      <ToastContainer />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
        <Label htmlFor="lastname">
          Apellido
          <Input
            id="lastname"
            type="text"
            {...register("lastname", { required: true })}
            aria-invalid={errors.lastname ? "true" : "false"}
          />
        </Label>
        {errors.lastname && <AlertText>{`${errors.lastname.message}`}</AlertText>}
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
        {errors.suggestion && (
          <AlertText>{`${errors.suggestion.message}`}</AlertText>
        )}
        <PrimaryButton className={css["form-button"]}>Enviar</PrimaryButton>
      </FormContainer>
    </>;
};

const capitalizeName = (name: string) => {
  const firstLetter = name[0];
  const restOfName = name.slice(1);
  const nameCapitalize = firstLetter.toUpperCase() + restOfName;

  return nameCapitalize;
};
