import { useState } from "react";
import { LoginForm, RegisterForm } from "./components";
import styles from "./Login.module.scss";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginImage}>
        <img src='/loginft.png' alt='Login Visual' />
      </div>
      <div className={styles.loginForm}>
        {isRegistering ? (
          <RegisterForm onLogin={() => setIsRegistering(false)} />
        ) : (
          <LoginForm onCreateAccount={() => setIsRegistering(true)} />
        )}
      </div>
    </div>
  );
};

export default Login;