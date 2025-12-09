import { Link } from 'react-router';
import styles from './app-header.module.css';

interface HeaderProps {
  actions?: React.ReactNode;
}

export const AppHeader = ({ actions }: HeaderProps) => {
  return (
    <header className={styles.Header}>
      <div className={styles.Brand}>
        <Link to="/">Team App</Link>
      </div>

      <div className={styles.HeaderActions}>{actions}</div>
    </header>
  );
};
