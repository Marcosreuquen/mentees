import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
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
  Button,
  AlertText,
} from "./styled";

const schema = yup.object().shape({
  image: yup.mixed()
    .test('required', " · Debes selecionar una foto", (value) =>{
      return value && value.length
    } )
    .test("fileSize", " · El archivo es demasiado grande", (value, context) => {
      return value && value[0] && value[0].size <= 2000000;
    })
    .test("type", "· El archivo debe ser .jpg o .jpeg", function (value) {
      return value && value[0] && value[0].type === "image/jpeg";
    }),
    name: yup.string().min(2, "El nombre debe contener al menos 2 caracteres").required(" · Debes ingresar tu nombre."),
    community: yup.string().required(" · Debes ingresar alguna comunidad."),
    description: yup.string().required(" · Agrega una breve descripción."),
    fieldOfExpertise: yup.string().required(" · Indica en que area deseas mentorear."),
});

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    
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
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
          </Label>
          <Label htmlFor="community">
            Comunidad
            <Input
              id="community"
              type="text"
              {...register("community", { required: true })}
              aria-invalid={errors.community ? "true" : "false"}
            />
          </Label>
          <Label htmlFor="description">
            Sobre ti
            <Textarea
              id="description"
              {...register("description", { required: true })}
              aria-invalid={errors.description ? "true" : "false"}
            />
          </Label>
        </LeftSide>
        <RightSide>
          <Label htmlFor="fieldOfExpertise">
            Area de expertise
            <Input
              id="fieldOfExpertise"
              type="text"
              {...register("fieldOfExpertise", { required: true })}
              aria-invalid={errors.fieldOfExpertise ? "true" : "false"}
            />
          </Label>
          <InputImage type="file" {...register("image")} />
        </RightSide>
      </FormContainer>
      
      {/* ERRORS MESSAGES */}
      {errors.name && <AlertText>{`${errors.name.message}`}</AlertText>}

      
      {errors.community && <AlertText>{`${errors.community.message}`}</AlertText>}

      
      {errors.description && <AlertText>{`${errors.description.message}`}</AlertText>}

      
      {errors.fieldOfExpertise && <AlertText>{`${errors.fieldOfExpertise.message}`}</AlertText>}

      {errors.image && <AlertText>{`${errors.image.message}`}</AlertText>}

      <Button type="submit" value="Quiero ser mentor" />
    </FormMentor>
  );
}
