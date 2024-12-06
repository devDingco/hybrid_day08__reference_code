import styles from "./styles.module.css";

interface IImageIndicator {
  currentImage: number;
  totalImages: number;
}

export default function ImageIndicator(props: IImageIndicator) {
  return (
    <div className={styles.indicator_box}>
      {props.currentImage} / {props.totalImages}
    </div>
  );
}
