import { Layout } from "components/layout";
import { Title, Large } from "UI/text";
import { SuggestionsForm } from "./form";
import css from "./index.module.css";

export const SuggestionsPage = () => {
    return <Layout>
        <Title textAlign="center">Sugerencias</Title>
        <Large margin={"20px 0 0 0"}>Podes dejarnos comentarios, consultas, sugerencias.</Large>
        <SuggestionsForm />
    </Layout>
}