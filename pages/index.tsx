import { Large, Title } from "UI/text";
import Form from "components/form/form";
import css from "../styles/index.module.css";
import { Layout } from "UI/layout";
import { FormContainer } from "../styles/styled";
import styled from "styled-components";

const ViewHeight = styled.div`
  min-height: 100vh;
`;

export default function Home() {
  return (
    <Layout>
      <ViewHeight>
        <Title className={css["hero-title"]}>Mentees</Title>
        <Large className={css["hero-text"]}>
          En mentees somos un grupo que busca formar una comunidad con personas
          que quieran compartir conocimientos. Si queres formar parte podes
          registrarte como mentor completando el formulario de inscripcion. Si
          lo que buscas es ayuda podes ponerte en contacto con alguno de
          nuestros mentores.
        </Large>
        <FormContainer>
          <Form />
        </FormContainer>
      </ViewHeight>
    </Layout>
  );
}
