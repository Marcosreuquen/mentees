import { useEffect, useState } from "react"

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