import Image from "next/image";
import { SubTitle } from "../title";
import styles from "./styles.module.css";
import Link from "next/link";
import { AddressSummary } from "../address";

interface IPlaceCard {
  id: string;
  images: string;
  title: string;
  contents: string;
  addressCity: string;
  addressTown: string;
}

export default function PlaceCard(props: IPlaceCard) {
  return (
    <Link href={`/solplace-logs/${props.id}`}>
      <div className={styles.card}>
        <Image
          className={styles.card_image}
          src={props.images}
          alt={`${props.title} 장소 사진`}
          width={0}
          height={0}
          sizes="100vw"
        />
        <SubTitle title={props.title} />
        <div className={styles.description}>{props.contents}</div>
        <AddressSummary addressCity={props.addressCity} addressTown={props.addressTown} />
      </div>
    </Link>
  );
}
