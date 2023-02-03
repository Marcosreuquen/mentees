import styled from "styled-components";

export const PrimaryButton = styled.button`
  font-size: 16px;
  color: var(--blanco);
  background-color: transparent;
  border-radius: 6px;
  border: 1.5px solid var(--blanco);
  height: 40px;
  font-weight: bold;
  cursor: pointer;

  user-select: none;
  text-decoration: none;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;

  :hover {
    transition-duration: 0.1s;
    background-color: #3a3a3a;
    color: white;
  }
  :active {
    box-shadow: 1px 6px 50px 30px rgba(190, 184, 184, 0.24);
    transform: translateY(4px);
  }
`;

export const DeleteButton = styled(PrimaryButton)`
  color: var(--rojo);
  background-color: transparent;
  border: 1.5px solid var(--rojo);

  :hover {
    color: var(--negro);
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