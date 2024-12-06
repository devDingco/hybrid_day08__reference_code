import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

interface ISolplaceLogsDetailImages {
  image: string;
  imageIndex: number;
  totalImage: number;
}

export default function SolplaceLogsDetailImages(
  props: ISolplaceLogsDetailImages
) {
  return (
    <div className={styles.image_wrapper}>
      <Link href={`/parallel-routing?image=${encodeURIComponent(props.image)}`}>
        <Image
          className={styles.image}
          src={props.image}
          alt={`${props.imageIndex}번째 이미지`}
          width={500} // 적절한 width 값 설정
          height={500} // 적절한 height 값 설정
          sizes="100vw"
        />
      </Link>
    </div>
  );
}
