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
  const shortDescription = description? description.slice(0, 50) : "";

  return (
    <CardContainer style={{ width: "18rem" }}>
      <MentorPopup name={name}
      fieldOfExpertise ={fieldOfExpertise} 
      description={description}
      imgUrl={imgUrl}
      community={community}>
      <CardImg variant="top" src={imgUrl} />
      <CardBody>
        <Card.Title>
          <Body>{name}</Body>
        </Card.Title>
        <CardSubtitle>
          <Body>{fieldOfExpertise}</Body>
        </CardSubtitle>
        <CardShortDescription>
            <Body size="1rem">{shortDescription}</Body>
        </CardShortDescription>
        <ComunityButton href={community} target="_blank">
          Ir a la comunidad
        </ComunityButton>
      </CardBody>
    </MentorPopup>
    </CardContainer>
    
  );
}

export default MentorCard;
