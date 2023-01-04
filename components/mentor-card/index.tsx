import { Body } from "UI/text";
import {
  CardContainer,
  CardBody,
  CardImg,
  CardSubtitle,
  CardDescription,
  CardShortDescription,
  ComunityButton,
  TextLink,
} from "./styled";
import Card from "react-bootstrap/Card";
import { useState } from "react";
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
  // const [toggleDescription, setToggleDescription] = useState(false);
  

  // const fullDescription = description;
  const shortDescription = description? description.slice(0, 50) : "";

  // function handleDescriptionToggleClick() {
  //   setToggleDescription(!toggleDescription);
  // }

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
        {/* {toggleDescription ? (
          <>
            <CardDescription>
              <Body size="1rem">{fullDescription}</Body>{" "}
              <TextLink onClick={handleDescriptionToggleClick}>leer menos</TextLink>
            </CardDescription>
          </>
        ) : (
          <CardShortDescription>
            <Body size="1rem">{shortDescription}</Body>
            {
              description.length > 49? <TextLink onClick={handleDescriptionToggleClick}>leer más</TextLink> : null

            } 
          </CardShortDescription>
        )} */}
        <ComunityButton href={community} target="_blank">
          Ir a la comunidad
        </ComunityButton>
      </CardBody>
    </MentorPopup>
    </CardContainer>
    
  );
}

export default MentorCard;
