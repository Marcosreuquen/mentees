import MentorCard from "components/mentor-card";
import { useMentors, usePagination } from "hooks/mentor";
import { BulletButton, PrimaryButton } from "components/form/styled";
import { useEffect, useState } from "react";
import { ButtonsContainer, MentorsContainer, CardsContainer, PaginationContainer } from "./styled";

export const MentorsSection = () => {
  const [pagination, setPagination] = useState({ limit: 3, offset: 0 } as any);
  const [initialPagination, setInitialPagination] = useState({} as any);
  const [pageIndicator, setPageIndicator] = useState(1)

  const mentors = useMentors(pagination);

  const paginacion = usePagination(
    initialPagination ? initialPagination.total : 0,
    initialPagination ? initialPagination.limit : 0
  );

  useEffect(() => {
    setInitialPagination(mentors.pagination);
  }, [mentors]);

  function handlePrevClick(e: any) {
    const offset = initialPagination.offset - 3;

    if (offset < 0) {
      return;
    } else {
      setPagination({ limit: 3, offset: offset });
      setPageIndicator(pageIndicator - 1 )
    }
  }
  
  function handleSigClick() {
    const offset = initialPagination.offset + 3;
    
    if (offset > initialPagination.total) {
      return;
    } else {
      setPagination({ limit: 3, offset: offset });
      setPageIndicator(pageIndicator + 1)
    }
  }

  return (
    <MentorsContainer>
      <CardsContainer>
        {mentors.result?.map((m: any) => {
          return (
            <MentorCard
              key={m.id}
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
        <PrimaryButton onClick={handlePrevClick}> Prev </PrimaryButton>
        <PaginationContainer>
          {paginacion.map((e) => {
            return <BulletButton active={e==pageIndicator? "active" : ""} key={e}>{e}</BulletButton>;
          })}
        </PaginationContainer>
        <PrimaryButton onClick={handleSigClick}> Sig </PrimaryButton>
      </ButtonsContainer>
    </MentorsContainer>
  );
};
