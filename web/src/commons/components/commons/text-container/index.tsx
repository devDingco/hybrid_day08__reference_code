import styles from "./styles.module.css";

interface ITextContainerBase {
  children: React.ReactNode;
  className: string;
}

function TextContainerBase(props: ITextContainerBase) {
  return <div className={props.className}>{props.children}</div>;
}

export function TextContainerRoundMFull({ children }: { children: React.ReactNode }) {
  return <TextContainerBase className={styles.round_m_full}>{children}</TextContainerBase>;
}
