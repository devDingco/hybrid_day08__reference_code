import { ISolplaceLogsNewSchema } from "@/app/solplace-logs/new/form.schema";
import { AddImageSS } from "@/components/commons/add-image";

export default function SolplaceLogsNewAddImage() {
  return (
    <section style={{ width: "calc(100% + 1.25rem)" }}>
      <AddImageSS<ISolplaceLogsNewSchema> name="images" />
    </section>
  );
}
