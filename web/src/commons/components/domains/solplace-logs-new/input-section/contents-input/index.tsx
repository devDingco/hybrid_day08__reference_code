import { ISolplaceLogsNewSchema } from "@/app/solplace-logs/new/form.schema";
import Textarea from "@/components/commons/textarea";

export default function SolplaceLogsNewTextarea() {
  return (
    <Textarea<ISolplaceLogsNewSchema>
      label="플레이스 내용"
      placeholder="플레이스 내용을 입력해 주세요. (1자 이상)"
      isRequired
      minLength={1}
      name="contents"
      textareaHeight="9.25rem"
    />
  );
}
