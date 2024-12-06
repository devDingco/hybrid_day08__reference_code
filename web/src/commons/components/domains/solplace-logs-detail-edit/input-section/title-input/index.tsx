import { InputNormalWithLabelRequired } from "@/components/commons/input";
import { ISolplaceLogsDetailEditSchema } from "@/app/solplace-logs/[solplaceLogId]/edit/form.schema";

export default function SolplaceLogsDetailEditTitleInput() {
  return (
    <InputNormalWithLabelRequired<ISolplaceLogsDetailEditSchema>
      label="플레이스 이름"
      placeholder="플레이스 이름을 입력해 주세요. (1자 이상)"
      minLength={1}
      name="title"
    />
  );
}
