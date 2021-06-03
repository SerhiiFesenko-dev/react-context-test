import { useSelector } from "./store";

export const useIsAuthenticated = () => {
  const isAuthenticated = useSelector((store) => store.isAuthenticated);

  return isAuthenticated;
};

export const useUser = () => {
  const user = useSelector((store) => store.user);

  return user;
};
