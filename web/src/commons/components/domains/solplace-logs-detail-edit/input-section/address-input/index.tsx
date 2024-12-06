"use client";

import { InputAddressWithLabel } from "@/components/commons/input";
import styles from "./styles.module.css";
import { ISolplaceLogsDetailEditSchema } from "@/app/solplace-logs/[solplaceLogId]/edit/form.schema";
import Link from "next/link";
import { useFormContext } from "react-hook-form";

export default function SolplaceLogsDetailEditAddressInput() {
  const { watch } = useFormContext<ISolplaceLogsDetailEditSchema>();

  const { images, ...query } = watch();

  return (
    <Link
      className={styles.address_input}
      href={{
        pathname: `edit/map`,
        query,
      }}
    >
      <div className={styles.button}>
        <InputAddressWithLabel<ISolplaceLogsDetailEditSchema>
          label="플레이스 주소"
          placeholder="플레이스 주소 입력"
          readOnly
          name="address"
        />
      </div>
    </Link>
  );
}
