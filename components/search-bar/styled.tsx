import styled from "styled-components";

export const SearchContainer = styled.form`
    display: flex;
    justify-content: center;
`
export const SearchInput = styled.input`
  background-color: transparent;
  border-radius: 6px;
  border: 1.5px solid var(--blanco);
  height: 40px;
  color: var(--blanco);
  min-width: 250px;
  max-width: 350px;
  width: 100%;
  padding: 0 0 0 5px;

  &:focus {
    border: 2px solid;
  }
`

export const SearchButton = styled.button`
    background-color: transparent;
    border: none;
`