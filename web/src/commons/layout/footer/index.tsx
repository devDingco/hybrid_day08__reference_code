"use client";

import clsx from "clsx";
import styles from "./styles.module.css";
import { useParams, usePathname } from "next/navigation";
import { footerType } from "./constants";
import { ButtonPrimaryMFull } from "@/components/commons/button";
import Navigation from "@/components/commons/navigation";

interface IFooter {
  buttonText: string;
}

export default function Footer({ buttonText }: IFooter) {
  const pathname = usePathname();
  const params = useParams();

  const props = footerType(params)[pathname];

  return (
    <>
      <div style={{ flex: 1 }} />
      <div className={clsx(styles.footer, { [styles.fixed]: props.isFixed })}>
        {props.isButton && (
          <div className={styles.button}>
            <ButtonPrimaryMFull buttonText={buttonText} />
          </div>
        )}
        {props.isNav && <Navigation />}
      </div>
    </>
  );
}
