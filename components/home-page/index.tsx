import { Layout } from "components/layout";
import { ToastContainer } from "react-toastify";
import { Large, Title } from "UI/text";
import { SearchBar } from "components/search-bar";
import { MentorsSection } from "components/mentors-section";
import { HashtagsSection } from "components/hashtags";
import css from "styles/index.module.css";

export const HomePage = () => {
    return <>
          <ToastContainer />
          <Layout>
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
            <SearchBar className={css.searchBar}/>
            <HashtagsSection className={css.hashtagsSection}/>
            <MentorsSection />
          </Layout>
        </>
      ;
};