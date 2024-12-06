import { ICONS } from "@/commons/constants/images";
import Image from "next/image";
import styles from "./styles.module.css";

interface IAddImageButtonBaseProps {
  size: "s" | "m";
}

function AddImageButtonBase({ size }: IAddImageButtonBaseProps) {
  const isSmall = size === "s";
  const imageClass = isSmall ? styles.s : styles.m;
  const { src, alt } = isSmall ? ICONS.addImageS : ICONS.addImageM;

  return <Image className={imageClass} src={src} alt={alt} width={0} height={0} />;
}

export function ButtonAddImageSS() {
  return <AddImageButtonBase size="s" />;
}

export function ButtonAddImageMM() {
  return <AddImageButtonBase size="m" />;
}
