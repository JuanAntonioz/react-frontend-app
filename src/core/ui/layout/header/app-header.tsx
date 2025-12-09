import { Link } from 'react-router';

import { Button } from '@/core/ui/primitives/button';
import { RoutePath } from '@/core/router/routes-path';

import styles from './app-header.module.css';

export const AppHeader = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Brand}>Team App</div>
      <div className={styles.HeaderActions}>
        <Button as={Link} to={RoutePath.LOGIN_SCREEN}>
          Login
        </Button>
      </div>
    </header>
  );
};
