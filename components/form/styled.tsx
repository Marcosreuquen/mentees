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
  padding: 0 0 0 5px;

  &:focus {
    border: 2px solid;
  }
`;

export const RadioInput = styled.input`
  width: 1.25rem;
`

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
  padding: 20px;
`;

export const AlertText = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 5px 0 0 0;
  color: var(--blanco);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
`;

interface BulletButtonProps {
  active?: string;
}

export const BulletButton = styled.p<BulletButtonProps>`
  color: ${(props) => (props.active ? "var(--negro)" : "var(--blanco)")};
  background-color: ${(props) =>
    props.active ? "var(--blanco)" : "transparent"};
  cursor: ${(props) => (props.active ? "default" : "pointer")};
  font-size: 16px;
  border-radius: 6px;
  border: 1.5px solid var(--blanco);
  height: 40px;
  font-weight: bold;
  margin: 0;
  padding: 5px;
`;
