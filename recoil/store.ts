import { atom } from "recoil";

export const optionState = atom({
  key: "optionState",
  default: "high",
});

export const modeState = atom({
  key: "modeState",
  default: false,
});
