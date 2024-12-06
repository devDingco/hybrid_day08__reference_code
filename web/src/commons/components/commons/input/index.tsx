"use client";

import { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { ICONS } from "@/commons/constants/images";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import InputErrorMessage from "./input-error-message";

interface IInputBase<T> extends InputHTMLAttributes<HTMLInputElement> {
  inputType: "normal" | "address";
  label?: string;
  isRequired: boolean;
  name: Path<T>;
}

export default function InputBase<T extends FieldValues>({
  inputType,
  label,
  isRequired,
  name,
  ...rest
}: IInputBase<T>) {
  const chooseType = {
    normal: styles.normal,
    address: styles.address,
  };

  const { register, formState } = useFormContext<T>();

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <div className={styles.label}>
          {label && (
            <label className={styles.label_text} htmlFor={label}>
              {label}
            </label>
          )}
          {isRequired && <div className={styles.star}>*</div>}
        </div>
        <div className={styles.input_box}>
          <input className={chooseType[inputType]} {...register(name)} {...rest} />
          {inputType === "address" && (
            <Image
              className={styles.right_arrow}
              src={ICONS.rightArrow.src}
              alt={ICONS.rightArrow.alt}
              width={0}
              height={0}
            />
          )}
        </div>
        <InputErrorMessage errorMessage={formState.errors[name]?.message?.toString() ?? ""} />
      </div>
    </div>
  );
}

interface IInput<T> extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: Path<T>;
}

export function InputNormal<T extends FieldValues>({ name, ...rest }: IInput<T>) {
  return <InputBase<T> inputType="normal" isRequired={false} name={name} {...rest} />;
}

export function InputNormalWithLabel<T extends FieldValues>({ label, name, ...rest }: IInput<T>) {
  return <InputBase<T> inputType="normal" isRequired={false} name={name} label={label} {...rest} />;
}

export function InputNormalWithLabelRequired<T extends FieldValues>({ label, name, ...rest }: IInput<T>) {
  return <InputBase<T> inputType="normal" isRequired={true} name={name} label={label} {...rest} />;
}

export function InputAddress<T extends FieldValues>({ name, ...rest }: IInput<T>) {
  return <InputBase<T> inputType="address" isRequired={false} name={name} {...rest} />;
}

export function InputAddressWithLabel<T extends FieldValues>({ label, name, ...rest }: IInput<T>) {
  return <InputBase<T> inputType="address" isRequired={false} name={name} label={label} {...rest} />;
}

export function InputAddressWithLabelRequired<T extends FieldValues>({ label, name, ...rest }: IInput<T>) {
  return <InputBase<T> inputType="address" isRequired={true} name={name} label={label} {...rest} />;
}
