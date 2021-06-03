import { Link } from "react-router-dom";
import { useInput, useLoginHandler } from "./hooks";

const Login = () => {
  const [username, setUsername] = useInput();
  const [password, setPassword] = useInput();
  const loginHandler = useLoginHandler();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!username || !password) {
      return;
    }

    loginHandler(username, password);
  };

  return (
    <div className="page">
      <p>Login page</p>
      <Link to="/">To Home page</Link>
      <form className="login-form" onSubmit={submitHandler}>
        <input value={username} onChange={setUsername} placeholder="Username" />
        <input
          value={password}
          onChange={setPassword}
          placeholder="Password"
          type="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
