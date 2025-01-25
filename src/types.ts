export type BasicTask = {
  item: string;
  command: string;
  annotation?: string;
};

export type Subsection = {
  subsection: string;
  orientation?: "horizontal" | "vertical";
  tasks: BasicTask[];
};

export type Task = BasicTask | Subsection;

export type Section = {
  name: string;
  tasks: Task[];
};

export type ChecklistColumn = {
  sections: Section[];
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
