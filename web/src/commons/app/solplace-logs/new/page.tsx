import Footer from "@/commons/layout/footer";
import Form from "@/components/commons/form";
import SolplaceLogsNewAddImage from "@/components/domains/solplace-logs-new/add-image-section";
import SolplaceLogsNewInputSection from "@/components/domains/solplace-logs-new/input-section";
import { ISolplaceLogsNewSchema, solplaceLogsNewSchema } from "./form.schema";
import styles from "./styles.module.css";
import { useInitialize } from "./form.initialize";

export default async function SolplaceLogsNewPage() {
  return (
    <main>
      <Form<ISolplaceLogsNewSchema> schema={solplaceLogsNewSchema} useInitialize={useInitialize}>
        <div className={styles.container}>
          <SolplaceLogsNewAddImage />
          <SolplaceLogsNewInputSection />
        </div>
        <Footer buttonText="로그 등록" />
      </Form>
    </main>
  );
}
