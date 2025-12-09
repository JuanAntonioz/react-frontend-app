import { LoginForm } from '../components/login-form/login-form';
import styles from './login-page.module.css';

export const LoginPage = () => {
  return (
    <section className={styles.Page}>
      <div className={styles.Shell}>
        <div className={styles.Intro}>
          <p className={styles.Title}>Bienvenido</p>
          <p className={styles.Description}>
            Ingresa tus credenciales para acceder a la lista de usuarios
          </p>
        </div>

        <div className={styles.FormWrapper}>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};
