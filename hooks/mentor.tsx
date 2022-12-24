<<<<<<< HEAD
import { useEffect, useState } from "react";
import { fetchAPI } from "lib/api";
=======
import { fetchAPI } from "lib/api";
import { useEffect, useState } from "react"
import useSWR from "swr"

export const useMentors = () => {
      const [mentors, setMentors] = useState([] as any);
>>>>>>> 486c930cd4976707748a775ce0653e8e7b2a6095

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

<<<<<<< HEAD
export const usePagination = (totalCount: number, pageSize: number) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);
  return getRange(1, totalPageCount);
}

const getRange = (start: number, end: number) => {
  let length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};
=======

export function useMe() {
  const { data, error } = useSWR("/me", fetchAPI);

  return data;
}
>>>>>>> 486c930cd4976707748a775ce0653e8e7b2a6095
