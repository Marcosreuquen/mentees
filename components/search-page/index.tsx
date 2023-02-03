import { Layout } from "components/layout";
import { SearchBar } from "components/search-bar";
import { useRouter } from "next/router";
import { useSearchMentors } from "hooks/mentor";
import {
  MentorsContainer,
} from "components/mentors-section/styled";
import MentorCard from "components/mentor-card";
import { SearchCardsContainer } from "./styled";
import { PaginationContainer } from "components/mentors-section/styled";
import { ButtonsContainer} from "components/form/styled";
import { PrimaryButton } from "UI/buttons";
import { BulletButton } from "components/form/styled";
import { useEffect, useState } from "react";
import { getPageBulletArray } from "hooks/mentor";
import { NoResultsMessage } from "./styled";
import { Body } from "UI/text";
import { CardLoading } from "components/loading";

export const SearchPage = () => {
  const router = useRouter();
  const query = router.query;
  const pageIndicator = router.query.page;
  const [pagination, setPagination] = useState(null as any);
  const [nbPages, setNbPages] = useState(null as any);  

  const searchResults = useSearchMentors(query);
  
  useEffect(()=>{
    // set general pagination
    setPagination(searchResults?.data?.pagination) 
  }, [searchResults]);
  
  useEffect(()=>{
    // set array for number bullets
    const BulletsArr = getPageBulletArray(pagination?.nbPages)

    setNbPages(BulletsArr);
  }, [pagination]);

  function handlePreviousClick () {
    let pageNumber = parseInt(query.page as string);

    if (pageNumber == 0) {
      return
    };

    pageNumber -= 1;
    let pageNumberToString = pageNumber.toString();
    
    query.page = pageNumberToString;

    
    router.push("/search?q=" + query.q + "&page=" + query.page + "&hitsPerPage=" + query.hitsPerPage)
  }

  function handleNextClick () {
    let pageNumber = parseInt(query.page as string);

    pageNumber += 1;
    if (pageNumber >= pagination.nbPages) {
      return 
    };

    let pageNumberToString = pageNumber.toString();
    
    query.page = pageNumberToString;
    
    router.push("/search?q=" + query.q + "&page=" + query.page + "&hitsPerPage=" + query.hitsPerPage);
  }

  function handleBulletClick(e: any) {
    let pageNumber = parseInt(query.page as string) + 1;
    const bulletNumber = e.target.innerText;

    if (pageNumber.toString() == bulletNumber) {
      return
    }

    const newPage = parseInt(bulletNumber) - 1
    query.page = newPage.toString();
    router.push("/search?q=" + query.q + "&page=" + query.page + "&hitsPerPage=" + query.hitsPerPage);

  }

  return (
    <Layout>
      <SearchBar query={query.q as string}/>
      <MentorsContainer>
        <SearchCardsContainer>
          {
          searchResults.isLoading? <>
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </> :
          searchResults?.data?.results.map((m: any) => {
            return (
              <MentorCard
                key={m.objectID}
                name={m.name}
                fieldOfExpertise={m.category}
                description={m.description}
                imgUrl={m.image}
                community={m.community}
              />
            );
          })
          } 
        {
          searchResults.isLoading ? null : 
          !searchResults?.data?.results.length?
          <NoResultsMessage>
            <Body>No encontramos resultados con este criterio de busqueda</Body>
            <Body>Intentá con palabras similares</Body>
          </NoResultsMessage> : null
        }       

        </SearchCardsContainer>
        <ButtonsContainer>
          <PaginationContainer>
            {
              nbPages?.length? 
              <PrimaryButton onClick={handlePreviousClick}> Prev </PrimaryButton> : null
            }
            {nbPages?.map((e: any) => {
              return <>
                <BulletButton onClick={handleBulletClick} active={e - 1 == parseInt(pageIndicator as string) ? "active" : ""} key={e}>{e}</BulletButton>
              </>
            })}
                        {
              nbPages?.length? 
              <PrimaryButton onClick={handleNextClick}> Sig </PrimaryButton> : null
            }
          </PaginationContainer>
        </ButtonsContainer>
      </MentorsContainer>
    </Layout>
  );
};
