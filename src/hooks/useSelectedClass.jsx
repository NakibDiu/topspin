import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "react-query";

const useSelectedClass = () => {
  const { user } = useContext(AuthContext);

  const { isLoading, refetch, data: selectedClass = [] } = useQuery({
    queryKey: ["selected", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/selected?email=${user?.email}`
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
