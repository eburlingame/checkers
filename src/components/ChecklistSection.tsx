import { Section, Subsection, Task } from "@/types";
import styled from "styled-components";
import { default as SubsectionComponent } from "./ChecklistSubsection";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0px;
  margin-bottom: 0.25em;
`;

const Header = styled.h2`
  text-transform: uppercase;
  border-top: 3px solid black;
  font-size: 1.1em;
  font-weight: 600;
  margin: 0;
`;

export type ChecklistSectionProps = {
  section: Section;
};

const renderedSubsections = (tasks: Task[]): Subsection[] => {
  let topLevelSubsections: Subsection = { subsection: "", tasks: [] };
  const subsections = [];

  for (const task of tasks) {
    if ("subsection" in task) {
      subsections.push(topLevelSubsections);
      topLevelSubsections = { subsection: "", tasks: [] };

      subsections.push(task);
    } else if ("item" in task) {
      topLevelSubsections.tasks.push(task);
    }
  }

  if (topLevelSubsections.tasks.length > 0) {
    subsections.push(topLevelSubsections);
  }

  return subsections;
};

const ChecklistSection = ({ section }: ChecklistSectionProps) => {
  const subsections = renderedSubsections(section.tasks);

  return (
    <>
      <Header>{section.name}</Header>

      <SectionContainer>
        {subsections.map((task) => (
          <SubsectionComponent
            key={task.subsection}
            title={task.subsection}
            orientation={task.orientation || "vertical"}
            tasks={task.tasks}
          />
        ))}
      </SectionContainer>
    </>
  );
};

export default ChecklistSection;
