import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "react-query";

const useSelectedClass = () => {
  const { user } = useContext(AuthContext);
  const backendUrl = import.meta.env.VITE_backendUrl

  const { isLoading, refetch, data: selectedClass = [] } = useQuery({
    queryKey: ["selected", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `${backendUrl}/selected?email=${user?.email}`
      );
      return response.json();
    },
  });

  return {
    refetch,
    selectedClass,
    isLoading
  };
};

export default useSelectedClass;
