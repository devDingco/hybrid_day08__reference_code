import styles from "./styles.module.css";

interface ITextareaErrorMessage {
  errorMessage: string;
}

export default function TextareaErrorMessage({ errorMessage }: ITextareaErrorMessage) {
  return <div className={styles.error_message}>{errorMessage}</div>;
}
