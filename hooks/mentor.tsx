import { useEffect, useState } from "react";
import { fetchAPI } from "lib/api";

interface pagination {
  limit: number
  offset: number
}
export const useMentors = ({limit, offset}:pagination) => {
    const [mentors, setMentors] = useState([] as any);
  
    useEffect(()=>{
      fetchAPI(`/mentor?limit=${limit}&offset=${offset}`, {}).then((r)=>{
        setMentors(r)
      })
    }, [offset])
    
    return mentors
}

export const usePagination = (totalCount: number, pageSize: number) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);
  return getRange(1, totalPageCount);
}

const getRange = (start: number, end: number) => {
  let length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};