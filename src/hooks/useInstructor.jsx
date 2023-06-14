import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "react-query";

const useInstructor = () => {
  const { user, loading } = useContext(AuthContext);
  const backendUrl = import.meta.env.VITE_backendUrl

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${backendUrl}/users/instructor/${user?.email}`
      );
      const response = await res.json();
      return response.instructor;
    },
  });

  return [isInstructor, isInstructorLoading];
};
export default useInstructor;
