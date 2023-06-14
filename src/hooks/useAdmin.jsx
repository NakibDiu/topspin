import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "react-query";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/admin/${user?.email}`
      );
      const response = await res.json();
      return response.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};
export default useAdmin;
