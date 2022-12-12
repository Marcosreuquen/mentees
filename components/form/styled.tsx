import styled from "styled-components";

export const FormMentor = styled.form`
  max-width: 540px;
  font-weight: 700;
  padding: 10px 0;
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
  color: var(--blanco);
  width: min-content;
`;

export const Input = styled.input`
  background-color: transparent;
  border-radius: 6px;
  border: 1.5px solid var(--blanco);
  height: 40px;
  color: var(--blanco);
  text-align: center;
  min-width: 250px;
  max-width: 250px;
  margin: 8px 0 0 0;

  &:focus {
    border: 2px solid;
  }
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
  border: 1.5px solid var(--blanco);
  color: var(--blanco);
  text-align: center;
`;

export const Button = styled.input`
  font-size: 16px;
  color: var(--blanco);
  background-color: transparent;
  border-radius: 6px;
  border: 1.5px solid var(--blanco);
  height: 40px;
  min-width: 250px;
  display: block;
  margin: 20px auto 0 auto;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--blanco);
  }
`;

export const AlertText = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 5px 0 0 0;
  color: var(--blanco);
`;
