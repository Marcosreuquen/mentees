type MentorData = {
  name: string;
  email:string;
  category: string;
  community: string;
  description: string;
  image: string;
  ownerAuthID:string,
  id: string
};

type Suggestion = {
  name: string
  lastname: string
  email: string
  suggestion: string
}

type Pagination = {
  hitsPerPage?: number;
  page?: number;
  total?: number;
  nbPages?: number
}

type SearchQuery  = {
  q?: string;
  hitsPerPage?: string;
  page?: string;
}
