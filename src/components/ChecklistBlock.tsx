import { Block } from "@/types";
import ChecklistImage from "./ChecklistImage";
import ChecklistItem from "./ChecklistItem";
import ChecklistSection from "./ChecklistSection";
import ChecklistSpeedTable from "./ChecklistSpeedTable";
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

  if ("speed_table" in block) {
    return <ChecklistSpeedTable table={block} />;
  }

  if ("image" in block) {
    return <ChecklistImage image={block} />;
  }
};

export default ChecklistBlock;
