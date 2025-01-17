export type BasicTask = {
  item: string;
  command: string;
  annotation?: string;
};

export type Subsection = {
  subsection: string;
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

export type Checklist = {
  name: string;
  accent_color?: string;
  spacing?: string;
  left: ChecklistColumn;
  right: ChecklistColumn;
};
