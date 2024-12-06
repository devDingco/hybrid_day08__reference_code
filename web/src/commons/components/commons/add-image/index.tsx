"use client";

import { useRef } from "react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import styles from "./styles.module.css";
import { ButtonAddImageMM, ButtonAddImageSS } from "./image-button/add-image-button";
import { ButtonSuccessImageMM, ButtonSuccessImageSS } from "./image-button/success-image-button";
import { useImageStore } from "@/commons/stores/image-store";

interface IAddImageBase<T> {
  size: "s" | "m";
  name: Path<T>;
}

function AddImageBase<T extends FieldValues>({ size, name }: IAddImageBase<T>) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setValue, register, trigger } = useFormContext<T>();

  const images = useImageStore((state) => state.images);
  const setImages = useImageStore((state) => state.setImages);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) return;

    const validFiles = Array.from(files).filter((file) => file.size <= 5 * 1024 * 1024);
    if (validFiles.length !== files.length) {
      alert("파일 크기는 5MB를 초과할 수 없습니다.");
    }

    const newImages: string[] = [];

    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          newImages.push(event.target.result);

          if (newImages.length === validFiles.length) {
            setImages([...images, ...newImages]);
            setValue(name, [...images, ...newImages] as PathValue<T, Path<T>>);
            trigger(name);
          }
        }
      };
    });
  };

  const deleteImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <div className={styles.add_image_container}>
      <button type="button" onClick={handleUploadClick}>
        <input
          type="file"
          accept="image/*"
          {...register(name)}
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
          multiple
        />
        {size === "s" ? <ButtonAddImageSS /> : <ButtonAddImageMM />}
      </button>
      {images?.length > 0
        ? images.map((image, index) =>
            size === "s" ? (
              <ButtonSuccessImageSS key={index} onClick={() => deleteImage(index)} image={image} index={index} />
            ) : (
              <ButtonSuccessImageMM key={index} onClick={() => deleteImage(index)} image={image} index={index} />
            )
          )
        : null}
    </div>
  );
}

interface IAddImage<T> {
  name: Path<T>;
}

export function AddImageSS<T extends FieldValues>({ name, ...rest }: IAddImage<T>) {
  return <AddImageBase size="s" name={name} {...rest} />;
}

export function AddImageMM<T extends FieldValues>({ name, ...rest }: IAddImage<T>) {
  return <AddImageBase size="m" name={name} {...rest} />;
}
