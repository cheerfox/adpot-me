import fetchBreedList from "./fetchBreedList";
import { useQuery } from "@tanstack/react-query";

export default function useBreedList(animal) {
  // 注意這邊 ? 的用法
  const result = useQuery(["breeds", animal], fetchBreedList);
  return [result?.data?.breeds ?? [], result.status];
}
