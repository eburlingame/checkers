import { useChecklist } from "@/hooks";
import { ChecklistColumn } from "@/types";
import styled from "styled-components";
import ColumnHeader from "./ColumnHeader";
import Section from "./Section";

const ColumnContainer = styled.div`
  row-gap: 0px;
  height: 11in;
  width: 4.25in;

  padding: 0.05in;
  padding-left: 1em;
  padding-right: 1em;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media screen {
    border-left: 0.1px solid black;
    border-right: 0.1px solid black;
  }
`;

const SectionsContainer = styled.div<{ accentColor: string }>`
  border: 0.5em solid ${({ accentColor }) => accentColor};
  padding: 0.5em;
`;

export type ChecklistColumnProps = {
  column: ChecklistColumn;
};

const ChecklistColumnComponent = ({ column }: ChecklistColumnProps) => {
  const checklist = useChecklist();

  return (
    <ColumnContainer>
      <ColumnHeader checklist={checklist} />

      <SectionsContainer accentColor={checklist.accent_color || "#000000"}>
        {column.sections.map((section) => (
          <Section key={section.name} section={section} />
        ))}
      </SectionsContainer>
    </ColumnContainer>
  );
};

export default ChecklistColumnComponent;
