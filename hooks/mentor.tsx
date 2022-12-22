import { fetchAPI } from "lib/api";
import { useEffect, useState } from "react"
import useSWR from "swr"

export const useMentors = () => {
      const [mentors, setMentors] = useState([] as any);

    useEffect(()=>{
        fetch("https://mentees-five.vercel.app/api/mentor").then((res)=>{
            return res.json()
          }).then((data)=>{
            setMentors(data)
        });
    }, [])
    return mentors
}


export function useMe() {
  const { data, error } = useSWR("/me", fetchAPI);

  return data;
}