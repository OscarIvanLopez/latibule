import React from "react";
import "./styles/login.css";
import useForm from "../../hooks/useForm";
import googleLogo from "../../assets/logo-google.svg";

const Login = () => {
  const [values, handleInputChange] = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div className="login-card">
      <h1>Welcome to Latibule</h1>
      <p>Let's write some blogs!</p>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          className="mt-2 m-2"
          type="text"
          placeholder="youremail@email.com"
          onChange={handleInputChange}
        />
        <input
          name="password1"
          className="mt-2 m-2"
          type="text"
          placeholder="Password"
          onChange={handleInputChange}
        />

        <button className="btn btn-outline-primary mt-1">Login</button>
      </form>
      <hr />
      <p>or</p>

      <div className="sign-up-networks">
        <button className="btn-github">
          <i className="bi bi-github"></i> Login with Github{" "}
        </button>
        <button className="btn-twitter">
          <i className="bi bi-twitter"></i> Login with Twitter{" "}
        </button>
        <button className="btn-google">
          <img src={googleLogo} alt="google logo" />
          Login with Google{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
