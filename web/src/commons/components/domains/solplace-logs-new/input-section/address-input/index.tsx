"use client";

import { InputAddressWithLabel } from "@/components/commons/input";
import styles from "./styles.module.css";
import { ISolplaceLogsNewSchema } from "@/app/solplace-logs/new/form.schema";
import Link from "next/link";
import { useFormContext } from "react-hook-form";

export default function SolplaceLogsNewAddressInput() {
  const { watch } = useFormContext<ISolplaceLogsNewSchema>();

  const { images, ...query } = watch();

  return (
    <Link
      className={styles.address_input}
      href={{
        pathname: `/solplace-logs/new/map`,
        query,
      }}
    >
      <InputAddressWithLabel<ISolplaceLogsNewSchema>
        label="플레이스 주소"
        placeholder="플레이스 주소 입력"
        readOnly
        name="address"
      />
    </Link>
  );
}
