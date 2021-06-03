import { useState, useCallback } from "react";
import { useSelector, useDispatch, login, logout } from "./store";
import api from "./api";

export const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return [value, onChange];
};

export const useLoginHandler = () => {
  const dispatch = useDispatch();

  const loginHandler = useCallback(
    async (username, password) => {
      try {
        const response = await api.login(username, password);

        dispatch(login(response));
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch]
  );

  return loginHandler;
};

export const useLogoutHandler = () => {
  const dispatch = useDispatch();

  const logoutHandler = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return logoutHandler;
};

export const useIsAuthenticated = () => {
  const isAuthenticated = useSelector((store) => store.isAuthenticated);

  return isAuthenticated;
};

export const useUser = () => {
  const user = useSelector((store) => store.user);

  return user;
};
