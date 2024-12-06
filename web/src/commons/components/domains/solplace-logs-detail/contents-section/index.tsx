"use client";

import { useBoardDetail } from "@/commons/hooks/use-board-detail";
import styles from "./styles.module.css";

export default function SolplaceLogsDetailContentsSection() {
  const { data } = useBoardDetail();

  const contents = data?.fetchSolplaceLog?.contents;

  return <div className={styles.contents}>{contents}</div>;
}
