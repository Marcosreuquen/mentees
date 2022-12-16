import Button from 'react-bootstrap/Button';
import { Body, Large } from 'UI/text';
import { CardContainer, CardBody, CardImg, CardDescription, ComunityButton } from './styled';
import Card from 'react-bootstrap/Card';

interface Mentor {
    name:string;
    fieldOfExpertise: string;
    description: string;
    imgUrl: string
    community: string
}

function MentorCard({name, fieldOfExpertise, description, imgUrl, community }: Mentor) {
    return (
      <CardContainer style={{ width: '18rem' }}>
        <CardImg variant="top" src={imgUrl} />
        <CardBody>
          <Card.Title><Body>{name}</Body></Card.Title>
          <Card.Text><Body>{fieldOfExpertise}</Body></Card.Text>
          <CardDescription><Body size="1rem">{description}</Body></CardDescription>
          <ComunityButton href={community} target="_blank">Ir a la comunidad</ComunityButton>
        </CardBody>
      </CardContainer>
    );
  }
  
  export default MentorCard;
