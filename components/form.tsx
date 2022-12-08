import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [requiredName, setRequiredName] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    // !data.name ? setRequiredName(true) : setRequiredName(false) ;
    // if (!data.name) {
    //     setRequiredName(true)
    //     console.log("No hay nombre");
    // }
    // if (!data.community) {
    //     setRequiredName(true)
    //     console.log("No hay community");
    // }
    // if (!data.description) {
    //     setRequiredName(true)
    //     console.log("No hay description");
    // }
    // if (!data.fieldOfExpertise) {
    //     setRequiredName(true)
    //     console.log("No hay fieldOfExpertise");
    // }
    // if (!data.img) {
    //     setRequiredName(true)
    //     console.log("No hay img");
    // }
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
          <InputImage type="file" {...register("img")} />
        </RightSide>
      </FormContainer>
      {errors.name?.type === "required" && (
        <AlertText role="alert"> · Debes ingresar tu nombre.</AlertText>
      )}

      {errors.community?.type === "required" && (
        <AlertText role="alert"> · Debes ingresar alguna comunidad.</AlertText>
      )}

      {errors.description?.type === "required" && (
        <AlertText role="alert"> · Agrega una breve descripción.</AlertText>
      )}

      {errors.fieldOfExpertise?.type === "required" && (
        <AlertText role="alert">
          {" "}
          · Indica en que area deseas mentorear.
        </AlertText>
      )}

      <Button type="submit" value="Quiero ser mentor" />
    </FormMentor>
  );
}

export const FormMentor = styled.form`
  /* background-color: #620404; */
  max-width: 540px;
  font-family: Poppins;
  font-weight: 700;
  padding: 10px 0;

  /*width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (min-width: 375px) {
    max-width: 500px;
    display: flex;
    flex-direction: row;
  } */
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  color: white;
  width: min-content;
`;

export const Input = styled.input`
  background-color: transparent;
  border-radius: 6px;
  border: 1.5px solid white;
  height: 40px;
  color: white;
  text-align: center;
  min-width: 250px;
  max-width: 250px;
  margin: 8px 0 0 0;
`;

export const InputImage = styled(Input)`
  height: 160px;
  margin: 0 0 8px 0;
`;

export const Textarea = styled.textarea`
  min-width: 250px;
  height: 160px;
  margin: 8px 0 0 0;
  background-color: transparent;
  border-radius: 6px;
  border: 1.5px solid white;
  color: white;
  font-family: Poppins;
  text-align: center;
`;

export const Button = styled.input`
  font-family: Poppins;
  font-size: 16px;
  color: white;
  background-color: transparent;
  border-radius: 6px;
  border: 1.5px solid white;
  height: 40px;
  min-width: 250px;
  display: block;
  margin: 20px auto 0 auto;
  font-weight: bold;
`;

export const AlertText = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 5px 0 0 0;
  color: white;
`;
