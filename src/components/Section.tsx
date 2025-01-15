import { BasicTask, Section } from "@/types";
import styled from "styled-components";
import Subsection from "./Subsection";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0px;
`;

const Header = styled.h2`
  margin: 0px;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  font-size: 10pt;
  line-height: 1;
  text-transform: uppercase;
  background-color: black;
  font-size: 10pt;
  font-weight: 600;
  color: white;

  border-radius: 0.15em;
  padding: 0.25em;
  padding-top: 0.15em;
  padding-bottom: 0.15em;
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
