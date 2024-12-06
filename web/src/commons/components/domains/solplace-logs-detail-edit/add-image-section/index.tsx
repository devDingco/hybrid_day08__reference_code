"use client";

import { ISolplaceLogsDetailEditSchema } from "@/app/solplace-logs/[solplaceLogId]/edit/form.schema";
import { AddImageSS } from "@/components/commons/add-image";

export default function SolplaceLogsDetailEditAddImage() {
  return (
    <section style={{ width: "calc(100% + 1.25rem)" }}>
      <AddImageSS<ISolplaceLogsDetailEditSchema> name="images" />
    </section>
  );
}
