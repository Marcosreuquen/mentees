import { Layout } from "components/layout"
import { Title, Large } from "UI/text"
import { SuggestionsForm } from "./form"

export const SuggestionsPage = () => {
    return <Layout>
        <Title>Sugerencia</Title>
        <Large>Podes dejarnos comentarios, consultas, sugerencias.</Large>
        <SuggestionsForm />
    </Layout>
}