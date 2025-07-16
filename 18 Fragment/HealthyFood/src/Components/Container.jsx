import styles from "./Container.module.css";
const Container = ({ children }) => {
  return (
    <>
      <div className={styles.children}>{children}</div>
    </>
  );
};
export default Container;
