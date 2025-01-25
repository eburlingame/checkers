import { createContext, useContext } from "react";
import { Checklist, ChecklistOptions } from "./types";

export const ChecklistContext = createContext<Checklist>({
  options: {},
  pages: [],
});

export const useChecklist = () => useContext(ChecklistContext);

export const OptionsContext = createContext<ChecklistOptions>({});

export const useOptions = () => useContext(OptionsContext);
