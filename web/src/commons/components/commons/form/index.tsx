"use client";

import { ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, FieldValues, FormProvider, useForm, UseFormReturn } from "react-hook-form";

interface IForm<T extends FieldValues> {
  children: React.ReactNode;
  schema: ZodSchema<T>;
  defaultValue?: DefaultValues<T>;
  useInitialize: (methods: UseFormReturn<T>) => {
    onSubmit: (data: T) => void;
  };
}

export default function Form<T extends FieldValues>({ children, schema, defaultValue, useInitialize }: IForm<T>) {
  const method = useForm<T>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: defaultValue,
  });

  const { onSubmit } = useInitialize(method);

  return (
    <FormProvider {...method}>
      <form
        onSubmit={method.handleSubmit(onSubmit)}
        style={{
          width: "100%",
          height: "calc(100vh - 3rem)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </form>
    </FormProvider>
  );
}
