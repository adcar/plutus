import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useReq(...args) {
  return useSWR(...args, fetcher);
}
