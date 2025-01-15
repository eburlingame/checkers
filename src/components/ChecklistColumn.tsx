import { ChecklistColumn } from "@/types";
import styled from "styled-components";
import Section from "./Section";

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  row-gap: 0px;
  height: 10in;
  width: 4in;
  padding: 0.25in;
  padding-top: 0.1in;
  border: 0.5px solid black;
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
