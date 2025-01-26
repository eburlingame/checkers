export type Task = {
  item: string;
  command: string;
  annotation?: string;
  boxed?: boolean;
};

export type SpeedTableItem = {
  speed: string;
  label: string;
  value: string;
};

export type SpeedTable = {
  speed_table: string;
  items: SpeedTableItem[];
};

export type Image = {
  image: string;
  src: string;
};

export type Subsection = {
  subsection: string;
  orientation?: "horizontal" | "vertical";
  blocks: Block[];
};

export type Section = {
  section: string;
  blocks: Block[];
};

export type Block = Section | Subsection | SpeedTable | Task | Image;

export const getBlockId = (block: Block): string => {
  if ("item" in block) {
    return block.item;
  }

  if ("section" in block) {
    return block.section;
  }

  if ("subsection" in block) {
    return block.subsection;
  }

  if ("speed_table" in block) {
    return block.speed_table;
  }

  if ("image" in block) {
    return block.src;
  }

  return "";
};

export type ChecklistColumn = {
  blocks: Block[];
  options?: ChecklistOptions;
};

export type ChecklistHeader = {
  left: string;
  center: string;
  right: string;
};

export type ChecklistPage = {
  name: string;
  options?: ChecklistOptions;
  left: ChecklistColumn;
  right: ChecklistColumn;
};

export type ChecklistOptions = {
  accent_color?: string;
  command_width?: string;
  spacing?: string;
  header?: ChecklistHeader;
};

export type Checklist = {
  options: ChecklistOptions;
  pages: ChecklistPage[];
};
