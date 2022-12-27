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
  ButtonsContainer,
  DeleteButton,
} from "./styled";
import { useEffect, useState } from "react";
import Image from "next/image";
import css from "./index.module.css";
import AvatarSvg from "public/avatar.svg";
import { convertBase64 } from "lib/base64";
import { createMentor, updateMentor, deleteMentor, deleteToken } from "lib/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

// schema with required image for new mentor data
const schemaNewMentor = yup.object().shape({
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
  community: yup
    .string()
    .url(" · Debes ingresar una url válida para tu comunidad.")
    .required(" · Debes ingresar alguna comunidad."),
  description: yup.string().required(" · Agrega una breve descripción."),
  fieldOfExpertise: yup
    .string()
    .required(" · Indica en que area deseas mentorear."),
  email: yup
    .string()
    .email(" · El email debe ser válido.")
    .required(" · Debes ingresar tu email."),
});

// schema with non-requiered image for existing mentor with image
const schemaMentor = yup.object().shape({
  image: yup.string().nullable(),
  name: yup
    .string()
    .min(2, " · El nombre debe contener al menos 2 caracteres.")
    .required(" · Debes ingresar tu nombre."),
  community: yup
    .string()
    .url(" · Debes ingresar una url válida para tu comunidad.")
    .required(" · Debes ingresar alguna comunidad."),
  description: yup.string().required(" · Agrega una breve descripción."),
  fieldOfExpertise: yup
    .string()
    .required(" · Indica en que area deseas mentorear."),
  email: yup
    .string()
    .email(" · El email debe ser válido.")
    .required(" · Debes ingresar tu email."),
});

export default function Form({ mentorData }: { mentorData?: MentorData }) {
  const [userImageBase64, setUserImageBase64] = useState(null as any);
  const schema = getSchema(mentorData, schemaMentor, schemaNewMentor);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // setting default values if mentor user already exists
  useEffect(() => {
    {
      !mentorData ? null : setValue("name", mentorData.name as string);
    }
    {
      !mentorData
        ? null
        : setValue("community", mentorData.community as string);
    }
    {
      !mentorData
        ? null
        : setValue("description", mentorData.description as string);
    }
    {
      !mentorData
        ? null
        : setValue("fieldOfExpertise", mentorData.category as string);
    }
    {
      !mentorData ? null : setValue("email", mentorData.email as string);
    }
    {
      !mentorData ? null : setUserImageBase64(mentorData.image);
      setValue("image", userImageBase64);
    }
  }, [mentorData]);

  const onChange = async (e: any) => {
    const file = e.target.files[0];
    const convertedBase64 = await convertBase64(file);

    setUserImageBase64(convertedBase64);
  };

  async function handleDeleteAccount(e: any) {
    e.preventDefault();
    const deleteConfirm = confirm(
      "¿Estás seguro/a que deseas eliminar la cuenta?"
    );

    if (deleteConfirm) {
      const res = await deleteMentor(mentorData?.id as string);
      if (res.message == "Deleted successfully") {
        toast.success("Se ha eliminado su cuenta correctamente.", {
          position: toast.POSITION.TOP_CENTER,
        });

        setTimeout(() => {
          deleteToken();
          router.push("/");
        }, 5000);
      }
    }
  }

  const onSubmit: any = async (data: any) => {
    data.image = userImageBase64;

    if (mentorData) {
      try {
        const res = await updateMentor(
          {
            name: data.name,
            category: data.fieldOfExpertise,
            community: data.community,
            description: data.description,
            email: data.email,
            image: data.image,
          },
          mentorData.id
        );

        if (res.message == "Updated successfully") {
          toast.success("Se ha actualizado tu información.", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const res = await createMentor({
          name: data.name,
          category: data.fieldOfExpertise,
          community: data.community,
          description: data.description,
          email: data.email,
          image: data.image,
        });

        if (res.message == "Mentor Created") {
          toast.success("Se ha creado tu cuenta correctamente", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <FormMentor onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <LeftSide>
          <Label htmlFor="name">
            Nombre y Apellido
            <Input
              id="name"
              type="text"
              placeholder="Juli Gomez"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
              defaultValue={mentorData ? mentorData.name : ""}
            />
          </Label>
          <Label htmlFor="community">
            Comunidad
            <Input
              id="community"
              type="text"
              placeholder="https://discord.com/mi_comunidad"
              {...register("community", { required: true })}
              aria-invalid={errors.community ? "true" : "false"}
              defaultValue={mentorData ? mentorData.community : ""}
            />
          </Label>
          <Label htmlFor="description">
            Sobre ti
            <Textarea
              id="description"
              {...register("description", { required: true })}
              aria-invalid={errors.description ? "true" : "false"}
              defaultValue={mentorData ? mentorData.description : ""}
            />
          </Label>
        </LeftSide>
        <RightSide>
          <Label htmlFor="fieldOfExpertise">
            Area de expertise
            <Input
              id="fieldOfExpertise"
              type="text"
              placeholder="Front-end React"
              {...register("fieldOfExpertise", { required: true })}
              aria-invalid={errors.fieldOfExpertise ? "true" : "false"}
              defaultValue={mentorData ? mentorData.category : ""}
            />
          </Label>
          <Label htmlFor="email">
            Email
            <Input
              id="email"
              type="email"
              placeholder="ju_gomez@gmail.com"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
              defaultValue={mentorData ? mentorData.email : ""}
            />
          </Label>
          <Label htmlFor="image-input" className={css["image-label"]}>
            Foto de perfil
            <InputImage
              type="file"
              {...register("image")}
              className={css["image-input"]}
              onChange={onChange}
            />
            {userImageBase64 ? (
              <Image
                src={userImageBase64}
                className={css.preview}
                width="150"
                height="150"
                style={{ objectFit: "cover" }}
                alt="User profile image"
              />
            ) : (
              <Image
                src={AvatarSvg}
                width="150"
                height="150"
                style={{ objectFit: "cover" }}
                className={css.preview}
                alt="Empty user avatar"
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

      <ButtonsContainer
        style={{ display: "flex", flexDirection: "row", columnGap: "15px" }}
      >
        {mentorData ? (
          <DeleteButton onClick={handleDeleteAccount}>
            Eliminar cuenta
          </DeleteButton>
        ) : null}
        <PrimaryButton>Guardar</PrimaryButton>
      </ButtonsContainer>
    </FormMentor>
  );
}

// auxiliar to use schema validation base on mentor data
// if mentor exists returns schema without image requiered
// if mentor doesn't exists return schema with image requiered
const getSchema = (mentorData: any, schema1: any, schema2: any) => {
  if (mentorData) {
    return schema1;
  } else {
    return schema2;
  }
};
