import { Button, Link } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault(); // prevents refreshing
    // login functionality..

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in successfully redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault(); // prevents refreshing
    // register functionality..

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Created a user and logged in
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </Button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <hr />
      <Button onClick={register}>Create your Amazon Account</Button>
    </div>
  );
}

export default Login;
