import styles from "./Layout.module.css";

function layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="#">XE4At</a> | React.js Full Course
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Ehsan Atashkar with Love.</p>
      </footer>
    </>
  );
}

export default layout;
