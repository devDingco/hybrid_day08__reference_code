import { create } from "zustand";

type ImageState = {
  images: string[];
  setImages: (imageGroup: string[]) => void;
  clearImages: () => void;
};

export const useImageStore = create<ImageState>((set) => ({
  images: [],
  setImages: (imageGroup: string[]) => set({ images: imageGroup }),
  clearImages: () => set({ images: [] }),
}));
