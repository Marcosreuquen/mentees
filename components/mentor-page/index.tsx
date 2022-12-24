import { Large, Title } from "UI/text";
import Form from "components/form/form";
import css from "../../styles/index.module.css";
import { Layout } from "components/layout";
import { FormContainer } from "components/form/styled";
import { ToastContainer } from "react-toastify";
import { ViewHeight } from "./styled";
import { useMe } from "hooks/mentor";

export default function MentorPage() {
  const mentor = useMe()
  
  return (
    <>
      <ToastContainer />
      <Layout>
        <ViewHeight>
          <Title className={css["hero-title"]} textAlign="center">
            Mis datos
          </Title>
          <FormContainer>
            {
            !mentor?
            <Form /> : 
            <Form mentorData={mentor.result}/>
            }
          </FormContainer>
        </ViewHeight>
      </Layout>
    </>
  );
}
