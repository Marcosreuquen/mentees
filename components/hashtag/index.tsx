import { TinyHashtag } from "components/hashtags/styled";
import { useRouter } from "next/router";

export const Hashtag = ({children}: {children: string}) => {
    const router = useRouter();
    
    function handleClick() {
        router.push("/search?q=" + children + "&page=0&hitsPerPage=3")
    }

    return <TinyHashtag onClick={handleClick}>{children}</TinyHashtag>
};