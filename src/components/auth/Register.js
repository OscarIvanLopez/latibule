import React from "react";
import useForm from "../../hooks/useForm";
import "./styles/register.css";
import googleLogo from "../../assets/logo-google.svg";

const Register = () => {
  const [values, handleInputChange] = useForm();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="register-card">
      <h1>Welcome to Latibule</h1>
      <p>Let's write some blogs!</p>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          className="mt-2 m-2"
          type="text"
          placeholder="Name..."
          onChange={handleInputChange}
        />
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
        <input
          name="password2"
          className="mt-2 m-2"
          type="text"
          placeholder="Confirm your password"
          onChange={handleInputChange}
        />

        <button className="btn btn-outline-primary mt-1">Create account</button>
      </form>
      <hr />
      <p>or</p>

      <div className="sign-up-networks">
        <button className="btn-github">
          <i className="bi bi-github"></i> Sign up with Github{" "}
        </button>
        <button className="btn-twitter">
          <i className="bi bi-twitter"></i> Sign up with Twitter{" "}
        </button>
        <button className="btn-google">
          <img src={googleLogo} alt="google logo" />
          Sign up with Google{" "}
        </button>
      </div>
    </div>
  );
};

export default Register;