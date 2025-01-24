import { BasicTask, Section } from "@/types";
import styled from "styled-components";
import Subsection from "./Subsection";

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

export type SectionProps = {
  section: Section;
};

const SectionComponent = ({ section }: SectionProps) => {
  const hasSubsections = section.tasks.some((task) => "subsection" in task);

  return (
    <>
      <Header>{section.name}</Header>

      <SectionContainer>
        {hasSubsections ? (
          section.tasks.map((task) => {
            if ("subsection" in task) {
              return (
                <Subsection
                  key={task.subsection}
                  title={task.subsection}
                  tasks={task.tasks}
                />
              );
            }
            return <></>;
          })
        ) : (
          <Subsection tasks={section.tasks as BasicTask[]} />
        )}
      </SectionContainer>
    </>
  );
};

export default SectionComponent;
