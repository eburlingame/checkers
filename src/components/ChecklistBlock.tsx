import { Block } from "@/types";
import ChecklistItem from "./ChecklistItem";
import ChecklistSection from "./ChecklistSection";
import { default as SubsectionComponent } from "./ChecklistSubsection";

export type ChecklistBlockProps = {
  block: Block;
};

const ChecklistBlock = ({ block }: ChecklistBlockProps) => {
  if ("section" in block) {
    return <ChecklistSection section={block} />;
  }

  if ("subsection" in block) {
    return <SubsectionComponent subsection={block} />;
  }

  if ("item" in block) {
    return <ChecklistItem task={block} />;
  }

  if ("table" in block) {
    return <div>Table not implemented yet</div>;
  }
};

export default ChecklistBlock;
