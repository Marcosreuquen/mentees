import { Large, Title } from "UI/text";
import Form from "components/form/form";
import css from "../styles/index.module.css";
import { Layout } from "UI/layout";
import { CardsContainer } from "../styles/styled";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import MentorCard from "components/mentor-card";

const ViewHeight = styled.div`
  min-height: 100vh;
`;

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Layout>
        <ViewHeight>
          <Title className={css["hero-title"]} textAlign="center">Mentees</Title>
          <Large className={css["hero-text"]} margin="0 auto 50px auto;">
            En mentees somos un grupo que busca formar una comunidad con
            personas que quieran compartir conocimientos. Si queres formar parte
            podes registrarte como mentor completando el formulario de
            inscripcion. Si lo que buscas es ayuda podes ponerte en contacto con
            alguno de nuestros mentores.
          </Large>
          {/* <FormContainer>
            <Form />
          </FormContainer> */}
          <Title className={css["hero-title"]} textAlign="center">Mentores</Title>
          <CardsContainer>
            <MentorCard
              name="Hernán Cosin"
              fieldOfExpertise="Web Development React"
              description="Desarrollador fullstack Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag"
              imgUrl="https://res.cloudinary.com/hcosin/image/upload/v1671209131/1665753_u2phbg.jpg"
              community="https://apx.school"
            />
          </CardsContainer>
        </ViewHeight>
      </Layout> 
    </>
  );
}
