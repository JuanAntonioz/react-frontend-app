import { Link } from 'react-router';

import { Button } from '@/core/ui';

import styles from './landing-page.module.css';

export const LandingPage = () => {
  return (
    <section className={styles.Page}>
      <header className={styles.Header}>
        <div className={styles.Brand}>Team App</div>
        <div className={styles.HeaderActions}>
          <Button as={Link} to={'/'}>
            Login
          </Button>
        </div>
      </header>

      <div className={styles.Hero}>
        <div className={styles.Content}>
          <p className={styles.Eyebrow}>Directorio de usuarios</p>
          <h1 className={styles.Title}>Perfiles de usuarios</h1>
          <p className={styles.Description}>
            La aplicación te permite revisar fichas de usuarios: nombres,
            apellidos y otros datos personales desde cualquier lugar.
          </p>
        </div>
      </div>
    </section>
  );
};
