"use client";

import styles from "./styles.module.css";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import { TextareaHTMLAttributes } from "react";
import TextareaErrorMessage from "./textarea-error-message";

interface ITextarea<T> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  isRequired: boolean;
  name: Path<T>;
  textareaHeight: string;
}

export default function Textarea<T extends FieldValues>({
  label,
  isRequired,
  name,
  textareaHeight,
  ...rest
}: ITextarea<T>) {
  const { register, formState, watch } = useFormContext<T>();

  const textareaValue = watch(name);

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <label className={styles.label_text}>{label}</label>
        {isRequired && <div className={styles.star}>*</div>}
      </div>
      <div>
        <div className={styles.textarea_box}>
          <textarea className={styles.textarea} {...register(name)} style={{ height: `${textareaHeight}` }} {...rest} />
          <div className={styles.contents_length}>{textareaValue ? textareaValue.length : 0}/100</div>
        </div>
        <TextareaErrorMessage errorMessage={formState.errors[name]?.message?.toString() ?? ""} />
      </div>
    </div>
  );
}
