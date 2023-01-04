import { SearchContainer, SearchInput, SearchButton } from "./styled";
import SearchIcon from "public/search-icon.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export const SearchBar = ({className, query}:{className?:string, query?: string})=> {
    const router = useRouter();

    function handleSubmit (e:any) {
        e.preventDefault()
        const query = e.target["search-input"].value.trim().toLowerCase();

        if (!query) {
            return
        }
    
        router.push("/search?q=" + query + "&page=0&hitsPerPage=3")
    }

    return <SearchContainer onSubmit={handleSubmit} className={className? className : ""}>
        <SearchInput id="search-input" type="text" placeholder="Buscá por área. Ej. Psicología." defaultValue={query? query : ""}/>
        <SearchButton>  
            <Image src={SearchIcon} alt="search icon" />
        </SearchButton> 
    </SearchContainer>
};

