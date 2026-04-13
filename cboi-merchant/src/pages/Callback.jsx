import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleCallback } from "../auth/authService";

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const loginProcess = async () => {
      try {
        const user = await handleCallback();

        sessionStorage.setItem("access_token", user.access_token);

        navigate("/");
      } catch (err) {
        console.error("Login failed", err);
      }
    };

    loginProcess();
  }, []);

  return <h3>Logging in...</h3>;
}