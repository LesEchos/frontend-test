import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NEWSLETTERS</h1>
      <p className={styles.subtitle}>
        Dans cette page, vous retrouvez l&apos;ensemble des newsletters
        des Echos et des marques satellites. Ainsi, vous pouvez découvrir
        toutes nos newsletters selon vos centres d&apos;intérêt et gérer
        plus facilement l&apos;inscription à vos newsletters.
      </p>
    </header>
  );
}