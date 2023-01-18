import styled from "styled-components";

export const MentorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 20px 0;
`

export const CardsContainer = styled.div`
  min-height: 316px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
  max-width: var(--max-width);
  padding: 10px;
  margin: 0 auto;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
`

export const PaginationContainer = styled.div`
  display: flex;
  column-gap: 5px;
  max-width: 150px;
  overflow: hidden;
`