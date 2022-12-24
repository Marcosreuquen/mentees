import { Large, Title } from "UI/text";
import Form from "components/form/form";
import css from "../../styles/index.module.css";
import { Layout } from "components/layout";
import { FormContainer } from "components/form/styled";
import { ToastContainer } from "react-toastify";
import { ViewHeight } from "./styled";
import { useEffect, useState } from "react";

export default function MentorPage() {
  const [token, setToken] = useState("");
  
  useEffect(()=>{
    const token = localStorage.getItem("token") as string;
    setToken(token)
  }, []);

  console.log(token);
  const mentorData = {
    name: "Ale",
    email: "ale@gmail.com",
    category: "Dev",
    community: "https://apx.school",
    description: "Me descripción corta.",
    image: "https://res.cloudinary.com/hcosin/image/upload/v1671209131/1665753_u2phbg.jpg",
  };
  
  return (
    <>
      <ToastContainer />
      <Layout>
        <ViewHeight>
          <Title className={css["hero-title"]} textAlign="center">
            Mis datos
          </Title>
          <FormContainer>
            {!token?
            <Form /> : 
            null
            // <Form mentorData={mentorData}/>
            }
          </FormContainer>
        </ViewHeight>
      </Layout>
    </>
  );
}
