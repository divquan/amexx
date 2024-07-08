import { getUser } from "@/lib/superbase/db";
import { useQuery } from "react-query";

const useGetUser = () => {
  const { error, data, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUser(),
  });
  return { error, data, isLoading };
};

const useGetMessages = () => {
  const { error, data, isLoading } = useQuery({
    queryKey: ["userMessages"],
    queryFn: () => getUser(),
  });
  return { error, data, isLoading };
};

export { useGetUser };
