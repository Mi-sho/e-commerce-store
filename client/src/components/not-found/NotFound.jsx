import { Link } from 'react-router';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.description}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className={styles.homeButton}>
          Return to Home
        </Link>
      </div>
    </div>
  );
}