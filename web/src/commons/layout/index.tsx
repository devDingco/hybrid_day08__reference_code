import { GlobalHeader } from "./header";
import styles from "./styles.module.css";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <GlobalHeader />
      <div className={styles.layout}>{children}</div>
    </>
  );
}
