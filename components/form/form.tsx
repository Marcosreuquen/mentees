import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FormMentor,
  FormContainer,
  LeftSide,
  RightSide,
  Label,
  Input,
  InputImage,
  Textarea,
  PrimaryButton,
  AlertText,
} from "./styled";
import { useState } from "react";
import Image from "next/image";
import css from "./index.module.css";
import AvatarSvg from "public/avatar.svg";
import { convertBase64 } from "lib/base64";
import { createMentor } from "lib/api";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  image: yup
    .mixed()
    .test("required", " · Debes selecionar una foto", (value) => {
      return value && value.length;
    })
    .test(
      "fileSize",
      " · El archivo es demasiado grande.",
      (value, context) => {
        return value && value[0] && value[0].size <= 2000000;
      }
    )
    .test("type", "· El archivo debe ser .jpg o .jpeg.", function (value) {
      return value && value[0] && value[0].type === "image/jpeg";
    }),
  name: yup
    .string()
    .min(2, " · El nombre debe contener al menos 2 caracteres.")
    .required(" · Debes ingresar tu nombre."),
  community: yup.string().url(" · Debes ingresar una url válida para tu comunidad.").required(" · Debes ingresar alguna comunidad."),
  description: yup.string().required(" · Agrega una breve descripción."),
  fieldOfExpertise: yup
    .string()
    .required(" · Indica en que area deseas mentorear."),
  email: yup
    .string()
    .email(" · El email debe ser válido.")
    .required(" · Debes ingresar tu email."),
});

export default function Form() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [userImageBase64, setUserImageBase64] = useState(null as any);

  const onChange = async (e: any) => {
    const file = e.target.files[0];
    const convertedBase64 = await convertBase64(file);
    
    setUserImageBase64(convertedBase64)
  };

  const onSubmit = async (data: any) => {
    data.image = userImageBase64;
    console.log(data);

    try {
      const res = await createMentor( {
          name: data.name,
          category: data.fieldOfExpertise,
          community: data.community,
          description: data.description,
          email: data.email,
          image: data.image,
        }
        )
        
        console.log(res);

        if (res.result.message == "Mentor Created") {
          toast.success("¡Gracias! Recibimos tu información.", {
            position: toast.POSITION.TOP_CENTER
          });
          reset()
          setUserImageBase64(null)
        } else {
          toast.error("Ocurrió un error, vuelve a intentar", {
            position: toast.POSITION.TOP_CENTER
          });
        }
    } catch (e) {
      throw e;
    }
  };

  return (
    <FormMentor onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <LeftSide>
          <Label htmlFor='name'>
            Nombre y Apellido
            <Input
              id='name'
              type='text'
              placeholder="Juli Gomez"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
          </Label>
          <Label htmlFor='community'>
            Comunidad
            <Input
              id='community'
              type='text'
              placeholder="https://discord.com/mi_comunidad"
              {...register("community", { required: true })}
              aria-invalid={errors.community ? "true" : "false"}
            />
          </Label>
          <Label htmlFor='description'>
            Sobre ti
            <Textarea
              id='description'
              {...register("description", { required: true })}
              aria-invalid={errors.description ? "true" : "false"}
            />
          </Label>
        </LeftSide>
        <RightSide>
          <Label htmlFor='fieldOfExpertise'>
            Area de expertise
            <Input
              id='fieldOfExpertise'
              type='text'
              placeholder="Front-end React"
              {...register("fieldOfExpertise", { required: true })}
              aria-invalid={errors.fieldOfExpertise ? "true" : "false"}
            />
          </Label>
          <Label htmlFor='email'>
            Email
            <Input
              id='email'
              type='email'
              placeholder="ju_gomez@gmail.com"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
          </Label>
          <Label htmlFor='image-input' className={css["image-label"]}>
            Foto de perfil
            <InputImage
              type='file'
              {...register("image")}
              className={css["image-input"]}
              onChange={onChange}
            />
            {userImageBase64 ? (
              <Image
                src={userImageBase64}
                className={css.preview}
                width='150'
                height='150'
                style={{ objectFit: "cover" }}
                alt='User profile image'
              />
            ) : (
              <Image
                src={AvatarSvg}
                width='150'
                height='150'
                style={{ objectFit: "cover" }}
                className={css.preview}
                alt='Empty user avatar'
              />
            )}
          </Label>
        </RightSide>
      </FormContainer>

      {/* ERRORS MESSAGES */}
      {errors.name && <AlertText>{`${errors.name.message}`}</AlertText>}

      {errors.community && (
        <AlertText>{`${errors.community.message}`}</AlertText>
      )}

      {errors.description && (
        <AlertText>{`${errors.description.message}`}</AlertText>
      )}

      {errors.fieldOfExpertise && (
        <AlertText>{`${errors.fieldOfExpertise.message}`}</AlertText>
      )}

      {errors.email && <AlertText>{`${errors.email.message}`}</AlertText>}

      {errors.image && <AlertText>{`${errors.image.message}`}</AlertText>}

      <PrimaryButton>Guardar</PrimaryButton>
    </FormMentor>
  );
}
