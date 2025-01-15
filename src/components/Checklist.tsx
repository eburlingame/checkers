import { Checklist } from "@/types";
import Section from "./Section";

export type ChecklistProps = {
  checklist: Checklist;
};

const ChecklistComponent = ({ checklist }: ChecklistProps) => {
  return (
    <>
      {checklist.sections.map((section) => (
        <Section key={section.name} section={section} />
      ))}
    </>
  );
};

export default ChecklistComponent;
