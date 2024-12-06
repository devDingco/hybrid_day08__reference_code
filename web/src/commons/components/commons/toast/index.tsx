import styles from "./styles.module.css";

interface IToastBase {
  toastMessage: string;
}

export default function Toast(props: IToastBase) {
  return <div className={styles.toast}>{props.toastMessage}</div>;
}
