import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  //remove user from localstorege
  const logout = () => {
    localStorage.removeItem("user");
    //dispath logout
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
