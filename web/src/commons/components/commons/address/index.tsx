import { ICONS } from "@/commons/constants/images";
import Image from "next/image";
import styles from "./styles.module.css";

interface IAddressBase {
  address: string;
}

function AddressBase({ address }: IAddressBase) {
  return (
    <div className={styles.address}>
      <Image className={styles.location} src={ICONS.location.src} alt={ICONS.location.alt} width={0} height={0} />
      <div className={styles.address_text}>{address}</div>
    </div>
  );
}

interface IAddressSummary {
  addressCity: string;
  addressTown: string;
}

interface IAddressDetail {
  address: string;
}

export function AddressSummary({ addressCity, addressTown }: IAddressSummary) {
  return <AddressBase address={`${addressCity} ${addressTown}`} />;
}

export function AddressDetail({ address }: IAddressDetail) {
  return <AddressBase address={address || ""} />;
}
