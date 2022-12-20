import { Large, Title } from "UI/text";
import Form from "components/form/form";
import css from "../../styles/index.module.css";
import { Layout } from "components/layout";
import { FormContainer } from "components/form/styled";
import { ToastContainer } from "react-toastify";
import { ViewHeight } from "./styled";

export default function MentorPage() {
  return (
    <>
      <ToastContainer />
      <Layout>
        <ViewHeight>
          <Title className={css["hero-title"]} textAlign="center">
            Mis datos
          </Title>
          <FormContainer>
            <Form />
          </FormContainer>
        </ViewHeight>
      </Layout>
    </>
  );
}
