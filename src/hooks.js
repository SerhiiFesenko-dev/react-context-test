import { useSelector } from "./store";

export const useIsAuthenticated = () => {
  const isAuthenticated = useSelector((store) => store.isAuthenticated);

  return isAuthenticated;
};
