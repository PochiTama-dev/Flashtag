import React, { useState } from 'react';
import { Button, Typography } from "../../../../components";
import styles from "./LoginForm.module.scss";
import { useAuth } from '../../../../Context/LoginContext';
import { loginUser } from '../../../../../mockdata/usersApiFetch';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onCreateAccount: () => void;
}

const LoginForm = ({ onCreateAccount }: LoginFormProps) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = await loginUser({ email, password });
      if (user) {
        login(user);
        navigate('/dashboard');
        window.location.reload();
      } else {
        console.error('Error: Usuario no encontrado.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <div className={styles.loginTitle}>
        <Typography variant='title'>Iniciar Sesión</Typography>
      </div>
      <div className={styles.formGroup}>
        <Typography variant='subtitle'>Correo electrónico</Typography>
        <input
          type='text'
          id='email'
          name='email'
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <Typography variant='subtitle'>Contraseña</Typography>
        <input
          type='password'
          id='password'
          name='password'
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.forgotPassword}>
          <Typography variant='normal'>
            <a href=''> ¿Olvidaste tu contraseña?</a>{" "}
          </Typography>
        </div>
      </div>
      <div className={styles.loginButton}>
        <Button type='black'>Iniciar Sesión</Button>
      </div>
      <div className={styles.divider}>
        <hr /> <Typography variant='normal-black'>O</Typography> <hr />
      </div>
      <div className={styles.loginButton}>
        <Button type='white'>
          <img src="/assets/google.png" alt="google icon" style={{ marginRight: '15px' }} />
          Continuar con Google
        </Button>
      </div>
      <div className={styles.crearCuenta}>
        <Typography variant='normal-black'>
          ¿No tenes una cuenta?{" "}
          <a href='#' onClick={onCreateAccount}>
            Crear cuenta
          </a>
        </Typography>
      </div>
    </form>
  );
};

export default LoginForm;