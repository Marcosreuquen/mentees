import { fetchAPI } from "lib/api";
import useSWR from "swr";

export const useMentors = (params: Pagination) => {
  const hitsPerPage = params.hitsPerPage
  const page = params.page
  
  const { data, isLoading, error } = useSWR(
    `/mentor?hitsPerPage=${hitsPerPage}&page=${page}`,
    fetchAPI,
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
    return {data, isLoading, error}
};

export const useSearchMentors = (query: SearchQuery) => {
  const q = query.q;
  const page = query.page ? "&page=" + query.page : "";
  const hitsPerPage = query.hitsPerPage
    ? "&hitsPerPage=" + query.hitsPerPage
    : "";

  const { data, isLoading, error } = useSWR(
    q ? "/mentor/search?q=" + q + page + hitsPerPage : null,
    fetchAPI,
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, isLoading, error };
};

export const getPageBulletArray = (length: number) => {
  return Array.from({ length }, (_, idx) => idx + 1);
};

export const usePagination = (totalCount: number, pageSize: number) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);
  return getRange(1, totalPageCount);
};

const getRange = (start: number, end: number) => {
  let length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};

export function useMe() {
  const { data, error, mutate } = useSWR("/me", fetchAPI);

  return { data, error, mutate };
}
