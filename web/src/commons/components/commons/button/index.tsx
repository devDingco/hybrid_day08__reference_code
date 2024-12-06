"use client";

import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";
import { FieldValues, useFormContext } from "react-hook-form";
import clsx from "clsx";

interface IButtonBase extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  buttonColor: "blue" | "dark" | "light";
  size: "s" | "m";
  shape: "rectangle" | "circle";
}

function ButtonBase<T extends FieldValues>({ buttonText, buttonColor, size, shape, ...rest }: IButtonBase) {
  const formContext = useFormContext<T>();
  const isFormValid = formContext ? formContext.formState.isValid : true;

  const buttonClassNames = clsx(styles.button, styles[buttonColor], styles[size], styles[shape]);

  return (
    <button className={buttonClassNames} disabled={!isFormValid} {...rest}>
      {buttonText}
    </button>
  );
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

export function ButtonPrimarySFull(props: IButton) {
  return <ButtonBase buttonColor="blue" size="s" shape="rectangle" {...props} />;
}

export function ButtonPrimaryMFull(props: IButton) {
  return <ButtonBase buttonColor="blue" size="m" shape="rectangle" {...props} />;
}

export function ButtonDarkSFull(props: IButton) {
  return <ButtonBase buttonColor="dark" size="s" shape="rectangle" {...props} />;
}

export function ButtonDarkMFull(props: IButton) {
  return <ButtonBase buttonColor="dark" size="m" shape="rectangle" {...props} />;
}

export function ButtonLightSFull(props: IButton) {
  return <ButtonBase buttonColor="light" size="s" shape="rectangle" {...props} />;
}

export function ButtonLightMFull(props: IButton) {
  return <ButtonBase buttonColor="light" size="m" shape="rectangle" {...props} />;
}

export function ButtonCircleSFull(props: IButton) {
  return <ButtonBase buttonColor="dark" size="s" shape="circle" {...props} />;
}

export function ButtonCircleMFull(props: IButton) {
  return <ButtonBase buttonColor="dark" size="m" shape="circle" {...props} />;
}
