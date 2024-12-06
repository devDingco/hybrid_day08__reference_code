import SolplaceLogsDetailEditAddressInput from "./address-input";
import SolplaceLogsDetailEditTextarea from "./contents-input";
import SolplaceLogsDetailEditTitleInput from "./title-input";
import styles from "./styles.module.css";

export default function SolplaceLogsDetailEditInputSection() {
  return (
    <section className={styles.section}>
      <SolplaceLogsDetailEditTitleInput />
      <SolplaceLogsDetailEditAddressInput />
      <SolplaceLogsDetailEditTextarea />
    </section>
  );
}
