import { Hashtag } from "components/hashtag";
import { HashtagsContainer } from "./styled";

export const HashtagsSection = ({className}: {className?: string}) => {
    const ClassName = className? className : "";
    return <HashtagsContainer className={ClassName}>
        <Hashtag>Música</Hashtag>
        <Hashtag>Psicología</Hashtag>
        <Hashtag>Matemática</Hashtag>
        <Hashtag>Programación</Hashtag>
        <Hashtag>Front-end</Hashtag>
        <Hashtag>Back-end</Hashtag>
    </HashtagsContainer>
};




