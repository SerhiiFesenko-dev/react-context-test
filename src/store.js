import { createContext, useContext, useReducer, useEffect } from "react";
import {
  setAuthToken,
  setUser,
  getAuthToken,
  getUser,
  clearLocalStorage,
} from "./localStoreService";

/* context */
const StoreContext = createContext();

const DispatchContext = createContext();

/* hooks */
export const useStore = () => {
  const store = useContext(StoreContext);

  return store;
};

export const useSelector = (selector) => {
  const store = useStore();

  return selector(store);
};

export const useDispatch = () => {
  const dispatch = useContext(DispatchContext);

  return dispatch;
};

/* state */
const initialState = {
  user: null,
  authToken: null,
  isAuthenticated: false,
};

/* constants */
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

/* actions */
export const login = ({ user, authToken }) => ({
  type: LOGIN,
  payload: { user, authToken },
});

export const logout = () => ({ type: LOGOUT });

/* reducer */
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.payload.user,
        authToken: action.payload.authToken,
        isAuthenticated: true,
      };
    }
    case LOGOUT: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

const restoreState = (state) => {
  const authToken = getAuthToken();
  const user = getUser();

  if (!authToken) {
    return initialState;
  }

  return {
    ...state,
    authToken,
    user,
    isAuthenticated: true,
  };
};

/* provider */
export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState, restoreState);

  useEffect(() => {
    if (!store.authToken) {
      return;
    }

    setAuthToken(store.authToken);
  }, [store.authToken]);

  useEffect(() => {
    if (!store.user) {
      return;
    }

    setUser(store.user);
  }, [store.user]);

  useEffect(() => {
    if (!store.isAuthenticated) {
      clearLocalStorage();
    }
  }, [store.isAuthenticated]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    </DispatchContext.Provider>
  );
};
