import Image from "next/image";
import clsx from "clsx";
import { ICONS } from "@/commons/constants/images";
import styles from "./styles.module.css";

interface ISuccessImageButtonBase {
  size: "s" | "m";
  onClick: () => void;
  image: string;
  index: number;
}

function SuccessImageButtonBase({ size, onClick, image, index }: ISuccessImageButtonBase) {
  const isSmall = size === "s";
  const imageSize = isSmall ? 100 : 160;
  const iconSize = isSmall ? 20 : 24;

  return (
    <div className={styles.image_container}>
      <Image
        className={clsx(styles.image, { [styles.image_s]: isSmall, [styles.image_m]: !isSmall })}
        src={image}
        alt={`${index + 1}번째 사진`}
        width={imageSize}
        height={imageSize}
      />
      <Image
        className={clsx(styles.delete_icon, { [styles.delete_icon_s]: isSmall, [styles.delete_icon_m]: !isSmall })}
        src={ICONS.delete.src}
        alt={ICONS.delete.alt}
        width={iconSize}
        height={iconSize}
        onClick={onClick}
      />
    </div>
  );
}

interface ISuccessImageButton {
  onClick: () => void;
  image: string;
  index: number;
}

export function ButtonSuccessImageSS({ onClick, image, index }: ISuccessImageButton) {
  return <SuccessImageButtonBase size="s" onClick={onClick} image={image} index={index} />;
}

export function ButtonSuccessImageMM({ onClick, image, index }: ISuccessImageButton) {
  return <SuccessImageButtonBase size="m" onClick={onClick} image={image} index={index} />;
}
