import { Body } from "UI/text";
import {
  CardContainer,
  CardBody,
  CardImg,
  CardSubtitle,
  CardShortDescription,
  ComunityButton,
} from "./styled";
import Card from "react-bootstrap/Card";
import { MentorPopup } from "components/mentor-popup";


interface Mentor {
  name?: string;
  fieldOfExpertise?: string;
  description: string;
  imgUrl?: string;
  community?: string;
}

function MentorCard({
  name,
  fieldOfExpertise,
  description,
  imgUrl,
  community,
}: Mentor) {  

  return (
    <CardContainer style={{ width: "18rem", cursor:"pointer" }}>
      <MentorPopup name={name}
      fieldOfExpertise ={fieldOfExpertise} 
      description={description}
      imgUrl={imgUrl}
      community={community}>
      <CardImg variant="top" src={imgUrl} />
      <CardBody>
        <Card.Title>
          <Body size="1.5rem">{name}</Body>
        </Card.Title>
        <CardSubtitle>
          <Body>{fieldOfExpertise}</Body>
        </CardSubtitle>
        <ComunityButton href={community} target="_blank">
          Ir a la comunidad
        </ComunityButton>
      </CardBody>
    </MentorPopup>
    </CardContainer>
    
  );
}

export default MentorCard;
