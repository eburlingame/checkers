import { createContext, useContext } from "react";
import { Checklist } from "./types";

export const ChecklistContext = createContext<Checklist>({
  name: "",
  left: {
    sections: [],
  },
  right: {
    sections: [],
  },
});

export const useChecklist = () => useContext(ChecklistContext);
