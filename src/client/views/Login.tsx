import * as React from "react";
import { useHistory } from "react-router";
import { apiService, setAccessToken } from "../utils/apiService";

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [feedback, setFeedback] = React.useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    let body = {
      email,
      password,
    };

    try {
      let result = await apiService("/auth/login", "POST", body);
      if (result) {
        setAccessToken(result.token, {
          userid: result.userid,
          role: result.role,
        });
        history.push("/");
      } else {
        // Display feedback
        setFeedback(
          "Unable to login. Email or password may or may not be incorrect."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="container">
      <h1>Login</h1>
      <p>{feedback}</p>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Login;
