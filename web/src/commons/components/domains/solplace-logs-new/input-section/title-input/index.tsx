import { ISolplaceLogsNewSchema } from "@/app/solplace-logs/new/form.schema";
import { InputNormalWithLabelRequired } from "@/components/commons/input";

export default function SolplaceLogsNewTitleInput() {
  return (
    <InputNormalWithLabelRequired<ISolplaceLogsNewSchema>
      label="플레이스 이름"
      placeholder="플레이스 이름을 입력해 주세요. (1자 이상)"
      minLength={1}
      name="title"
    />
  );
}
