import { createContext, useContext, useReducer } from "react";

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
const SET_USER_DATA = "SET_USER_DATA";

/* actions */
export const login = (authToken) => ({
  type: LOGIN,
  payload: { authToken },
});

export const logout = () => ({ type: LOGOUT });

export const setUserData = (user) => ({
  type: SET_USER_DATA,
  payload: { user },
});

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
    case SET_USER_DATA: {
      return {
        ...state,
        user: action.payload.user,
      };
    }

    case LOGOUT: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

/* provider */
export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    </DispatchContext.Provider>
  );
};
