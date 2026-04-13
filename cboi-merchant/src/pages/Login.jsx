import { login } from "../auth/authService";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">

        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Bank_of_India_logo.svg"
          width="120"
        />

        <h2>Merchant Dashboard</h2>
        <p>Secure Login via Auth System</p>

        <button onClick={login}>
          Login with AuthentiK
        </button>

      </div>
    </div>
  );
}