import Form from "@/components/commons/form";
import Footer from "@/commons/layout/footer";
import styles from "./styles.module.css";
import { ISolplaceLogsDetailEditSchema, solplaceLogsDetailEditSchema } from "./form.schema";
import { useInitialize } from "./form.initialize";
import SolplaceLogsDetailEditAddImage from "@/components/domains/solplace-logs-detail-edit/add-image-section";
import SolplaceLogsDetailEditInputSection from "@/components/domains/solplace-logs-detail-edit/input-section";

export default function SolplaceLogsDetailEditPage() {
  return (
    <main>
      <Form<ISolplaceLogsDetailEditSchema> schema={solplaceLogsDetailEditSchema} useInitialize={useInitialize}>
        <div className={styles.container}>
          <SolplaceLogsDetailEditAddImage />
          <SolplaceLogsDetailEditInputSection />
        </div>
        <Footer buttonText="수정" />
      </Form>
    </main>
  );
}
