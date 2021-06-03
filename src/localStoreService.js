const AUTH_TOKEN = "auth-token";
const USER = "user";

const parseStoredValue = (value) => {
  try {
    return JSON.parse(value);
  } catch (error) {
    console.error(error);
  }
};

export const getAuthToken = () => localStorage.getItem(AUTH_TOKEN);

export const setAuthToken = (token) => {
  JSON.stringify(localStorage.setItem(AUTH_TOKEN, token));
};

export const getUser = () => parseStoredValue(localStorage.getItem(USER));

export const setUser = (user) => {
  localStorage.setItem(USER, JSON.stringify(user));
};

export const clearLocalStorage = () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(USER);
};
