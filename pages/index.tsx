import { Large, Title } from "UI/text";
import Form from "components/form/form";
import css from "../styles/index.module.css";
import { Layout } from "UI/layout";
import { FormContainer } from "../styles/styled";

export default function Home() {
  return (
    <Layout>
      <Title className={css["hero-title"]}>Mentees</Title>
      <Large className={css["hero-text"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        sapiente libero atque ad labore ducimus quisquam nisi aliquam,
        excepturi, quidem suscipit. Debitis modi nisi autem totam obcaecati
        tempore, dolorem error.
      </Large>
      <FormContainer>
        <Form />
      </FormContainer>
    </Layout>
  );
}
