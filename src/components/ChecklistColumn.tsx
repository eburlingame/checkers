import { ChecklistColumn } from "@/types";
import styled from "styled-components";
import Section from "./Section";

const ColumnContainer = styled.div`
  row-gap: 0px;
  height: 9.75in;
  width: 3.875in;
  padding: 0.05in;
  padding-left: 1em;
  padding-right: 1em;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media screen {
    border: 0.5px solid black;
  }
`;

export type ChecklistColumnProps = {
  checklist: ChecklistColumn;
};

const ChecklistColumnComponent = ({ checklist }: ChecklistColumnProps) => {
  return (
    <ColumnContainer>
      {checklist.sections.map((section) => (
        <Section key={section.name} section={section} />
      ))}
    </ColumnContainer>
  );
};

export default ChecklistColumnComponent;
