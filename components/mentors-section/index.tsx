import MentorCard from "components/mentor-card";
import { useMentors, getPageBulletArray } from "hooks/mentor";
import { BulletButton} from "components/form/styled";
import { PrimaryButton } from "UI/buttons";
import { useEffect, useState } from "react";
import {
  ButtonsContainer,
  MentorsContainer,
  CardsContainer,
  PaginationContainer,
} from "./styled";
import { useRouter } from "next/router";
import { CardLoading } from "components/loading";

export const MentorsSection = () => {
  const router = useRouter();
  const query = router.query;

  const [initialPagination, setInitialPagination] = useState({
    hitsPerPage: 3,
    page: 0,
    total: 0,
    nbPages: 0,
  });
  const [nbPages, setNbPages] = useState([] as number[]);

  const mentors = useMentors(query);
  useEffect(() => {
    router.push("/?hitsPerPage=3&page=0");
  }, []);

  useEffect(() => {
    setInitialPagination(mentors?.data?.pagination);
  }, [mentors]);

  useEffect(() => {
    const nbPages = getPageBulletArray(initialPagination?.nbPages);
    setNbPages(nbPages);
  }, [initialPagination]);

  function handlePreviousClick(e: any) {
    let pageNumber = parseInt(query.page as string);

    if (pageNumber == 0) {
      return
    };

    pageNumber -= 1;

    setInitialPagination(initialPagination);

    let pageNumberToString = pageNumber.toString();

    query.page = pageNumberToString;
    
    router.push({
      pathname: router.pathname,
      query: { hitsPerPage: query.hitsPerPage, page: query.page },
    }, undefined, { scroll: false });
  }

  function handleNextClick() {
    let pageNumber = parseInt(query.page as string);

    pageNumber += 1;
    if (pageNumber >= initialPagination.nbPages) {
      return;
    }

    setInitialPagination(initialPagination);

    let pageNumberToString = pageNumber.toString();

    query.page = pageNumberToString;

    router.push({
      pathname: router.pathname,
      query: { hitsPerPage: query.hitsPerPage, page: query.page },
    }, undefined, { scroll: false });
  }

  function handleBulletClick(e: any) {
    let pageNumber = parseInt(query.page as string) + 1;
    const bulletNumber = e.target.innerText;

    if (pageNumber.toString() == bulletNumber) {
      return;
    }

    const newPage = parseInt(bulletNumber) - 1;
    query.page = newPage.toString();
    
    router.push({
      pathname: router.pathname,
      query: { hitsPerPage: query.hitsPerPage, page: query.page },
    }, undefined, { scroll: false });
  }

  return (
    <MentorsContainer>
      <CardsContainer>
        {
          mentors.isLoading? <>
                  <CardLoading></CardLoading>
                  <CardLoading></CardLoading> 
                  <CardLoading></CardLoading>
              </> : 
          mentors?.data?.result?.map((m: any) => {
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
        })}
      </CardsContainer>
      <ButtonsContainer>
        <PrimaryButton onClick={handlePreviousClick}> Prev </PrimaryButton>
        <PaginationContainer>
          {nbPages?.map((e: any) => {
            return (
              <BulletButton
                onClick={handleBulletClick}
                active={e - 1 == parseInt(query.page as string) ? "active" : ""}
                key={e}
              >
                {e}
              </BulletButton>
            );
          })}
        </PaginationContainer>
        <PrimaryButton onClick={handleNextClick}> Sig </PrimaryButton>
      </ButtonsContainer>
    </MentorsContainer>
  );
};
