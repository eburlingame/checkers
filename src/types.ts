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
};

export type ChecklistHeader = {
  left: string;
  center: string;
  right: string;
};

export type Checklist = {
  name: string;
  accent_color?: string;
  command_width?: string;
  spacing?: string;
  header?: ChecklistHeader;

  left: ChecklistColumn;
  right: ChecklistColumn;
};
