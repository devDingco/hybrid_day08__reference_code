import SolplaceLogsNewAddressInput from "./address-input";
import SolplaceLogsNewTextarea from "./contents-input";
import SolplaceLogsNewTitleInput from "./title-input";
import styles from "./styles.module.css";

export default function SolplaceLogsNewInputSection() {
  return (
    <section className={styles.section}>
      <SolplaceLogsNewTitleInput />
      <SolplaceLogsNewAddressInput />
      <SolplaceLogsNewTextarea />
    </section>
  );
}
