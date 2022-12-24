import { Large, Title } from "UI/text";
import css from "../styles/index.module.css";
import { Layout } from "components/layout";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { MentorsSection } from "components/mentors-section";

const ViewHeight = styled.div`
  min-height: 100vh;
`;

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Layout>
        <ViewHeight>
          <Title className={css["hero-title"]} textAlign="center">
            Mentees
          </Title>
          <Large className={css["hero-text"]} margin="0 auto 50px auto;">
            En mentees somos un grupo que busca formar una comunidad con
            personas que quieran compartir conocimientos. Si queres formar parte
            podes registrarte como mentor completando el formulario de
            inscripcion. Si lo que buscas es ayuda podes ponerte en contacto con
            alguno de nuestros mentores.
          </Large>
          <Title className={css["hero-title"]} textAlign="center">
            Mentores
          </Title>
            <MentorsSection />
        </ViewHeight>
      </Layout>
    </>
  );
}
