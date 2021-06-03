const api = {
  login: (username, password) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ user: { username }, authToken: "authToken" });
      }, 500);
    }),
};

export default api;
