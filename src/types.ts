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

export type Checklist = {
  sections: Section[];
};
