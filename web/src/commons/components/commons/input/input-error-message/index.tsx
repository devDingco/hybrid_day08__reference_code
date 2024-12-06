import styles from "./styles.module.css";

interface IInputErrorMessage {
  errorMessage: string;
}

export default function InputErrorMessage({ errorMessage }: IInputErrorMessage) {
  return <div className={styles.errorMessage}>{errorMessage}</div>;
}
