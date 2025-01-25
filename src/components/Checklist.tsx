import { ChecklistContext, OptionsContext } from "@/hooks";
import { Checklist as ChecklistType } from "@/types";
import ChecklistPage from "./ChecklistPage";

export type ChecklistProps = {
  checklist: ChecklistType;
};

const Checklist = ({ checklist }: ChecklistProps) => {
  return (
    <ChecklistContext.Provider value={checklist}>
      <OptionsContext.Provider value={checklist.options}>
        {checklist.pages.map((page) => (
          <ChecklistPage key={page.name} page={page} />
        ))}
      </OptionsContext.Provider>
    </ChecklistContext.Provider>
  );
};

export default Checklist;
