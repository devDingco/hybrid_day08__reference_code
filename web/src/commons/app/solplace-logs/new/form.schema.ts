"use client";

import { Path } from "react-hook-form";
import { z } from "zod";

export interface IInputBaseProps<T> {
  path: Path<T>;
}

export interface ISolplaceLogsNewSchema {
  title: string;
  address: string;
  lat: number;
  lng: number;
  contents: string;
  images: string[];
}

export const solplaceLogsNewSchema = z.object({
  title: z.string().min(1, { message: "제목을 입력해주세요." }),
  images: z.array(z.string()).min(1),
  address: z.string().min(1, { message: "주소를 선택해주세요." }),
  lat: z.number(),
  lng: z.number(),
  contents: z.string().min(1, { message: "내용을 입력해주세요." }),
});
