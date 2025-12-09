import styles from './landing-page.module.css';
import { AppHeader } from '@/core/ui/layout/header/app-header';

export const LandingPage = () => {
  return (
    <section className={styles.Page}>
      <AppHeader />

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
