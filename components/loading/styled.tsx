import styled from "styled-components";

export const CardContainer = styled.div`
    width: 18rem;
    height: 292px;
    border: 2px solid var(--blanco);
    border-radius: 4px;
`

export const CardImgLoading = styled.div`
  max-height: 160px;
  height: 100%;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: loadingBg;
  animation-timing-function: linear;
  background-color: var(--gris-claro);
  background: linear-gradient(to right, var(--gris-claro) 8%, #9b9b9b 18%, var(--gris-claro) 33%);
  background-size: 800px 104px;
  position: relative;

  @keyframes loadingBg {
  0% {
    background-position: -800px 0
  }
  100% {
    background-position: 800px 0
  }
}
`
export const TextContainer = styled.div`
    max-height: 132px;
    height: 100%;
    padding: 10px;
`

export const TitleLoading = styled(CardImgLoading)`
    width: 150px;
    max-height: 30px;
    margin: 0 0 8px 0;
`

export const SubtitleLoading = styled(CardImgLoading)`
    width: 100px;
    max-height: 30px;
    margin: 0 0 8px 0;
`

export const ButtonLoading = styled(CardImgLoading)`
    max-height: 36px;
    border: 1px solid white;
`