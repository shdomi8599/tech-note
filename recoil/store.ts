import { CategoryData } from "@/constant/constant";
import { atom } from "recoil";

export const dataState = atom<CategoryData>({
  key: "dataState",
  default: {},
});

export const optionState = atom({
  key: "optionState",
  default: "high",
});
