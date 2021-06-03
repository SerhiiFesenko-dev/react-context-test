import { useUser, useLogoutHandler } from "./hooks";

const AuthHome = () => {
  const user = useUser();
  const logout = useLogoutHandler();

  return (
    <div className="page">
      <p> Hello {user.username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AuthHome;
