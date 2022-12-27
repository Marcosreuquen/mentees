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

export const PrimaryButton = styled.button`
  font-size: 16px;
  color: var(--blanco);
  background-color: transparent;
  border-radius: 6px;
  border: 1.5px solid var(--blanco);
  height: 40px;
  font-weight: bold;
  cursor: pointer;

  user-select:none;
  text-decoration: none;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s; 

  :hover {
  transition-duration: 0.1s;
  background-color: #3A3A3A;
  color:white;
}
:active {
            box-shadow:1px 6px 50px 30px rgba(190, 184, 184, 0.24);
            transform: translateY(4px);
        }
`;

export const LogoutButton = styled(PrimaryButton)`
background-color: var(--gris);
border: none;
margin: 0 5px;

:hover {
  transition-duration: 0.1s;
  background-color:#ccc1c1; ;
  color:#3A3A3A;;
}
`
export const AlertText = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 5px 0 0 0;
  color: var(--blanco);
`;
