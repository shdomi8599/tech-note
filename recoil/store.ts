import { atom } from "recoil";

export const optionState = atom({
  key: "optionState",
  default: "high",
});

export const modeState = atom({
  key: "modeState",
  default: false,
});

export const searchSelectState = atom({
  key: "searchSelectState",
  default: "제목",
});

export const searchValState = atom({
  key: "searchValState",
  default: "",
});
