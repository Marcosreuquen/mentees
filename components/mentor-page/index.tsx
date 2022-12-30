import { Large, Title } from "UI/text";
import Form from "components/form/form";
import css from "../../styles/index.module.css";
import { Layout } from "components/layout";
import { FormContainer } from "components/form/styled";
import { ToastContainer } from "react-toastify";
import { ViewHeight } from "./styled";
import { useMe } from "hooks/mentor";
import { useEffect, useState } from "react";

export default function MentorPage() {
  const {data, mutate} = useMe();
  
  return (
    <>
      <ToastContainer />
      <Layout>
        <ViewHeight>
          <Title className={css["hero-title"]} textAlign="center">
            Mis datos
          </Title>
          <FormContainer>
            <Form mentorData={!data? "" : data.result} mutate={mutate}/>
          </FormContainer>
        </ViewHeight>
      </Layout>
    </>
  );
}
