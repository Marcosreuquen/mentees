import {
  CardContainer,
  CardImgLoading,
  TitleLoading,
  SubtitleLoading,
  ButtonLoading,
  TextContainer,
} from "./styled";

export const CardLoading = () => {
  return (
    <CardContainer>
      <CardImgLoading />
      <TextContainer>
        <TitleLoading />
        <SubtitleLoading />
        <ButtonLoading />
      </TextContainer>
    </CardContainer>
  );
};
