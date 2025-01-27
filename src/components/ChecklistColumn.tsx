import { OptionsContext, useOptions } from "@/hooks";
import { ChecklistColumn, getBlockId } from "@/types";
import styled from "styled-components";
import ChecklistBlock from "./ChecklistBlock";
import ColumnHeader from "./ChecklistColumnHeader";

const ColumnContainer = styled.div`
  background-color: #fff;
  row-gap: 0px;
  width: 4.25in;

  padding: 0.05in;
  padding-left: 1em;
  padding-right: 1em;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding-left: 0.25in;
  padding-right: 0.25in;

  @media screen {
    border-left: 0.1px solid black;
    border-right: 0.1px solid black;
  }
`;

const SectionsContainer = styled.div<{ accentColor: string }>`
  border: 0.5em solid ${({ accentColor }) => accentColor};
  padding-top: 0.5em;
  padding-left: 0.5em;
  padding-right: 0.5em;
`;

export type ChecklistColumnProps = {
  column: ChecklistColumn;
};

const ChecklistColumnComponent = ({ column }: ChecklistColumnProps) => {
  const upperOptions = useOptions();
  const options = { ...upperOptions, ...column.options };

  return (
    <OptionsContext.Provider value={options}>
      <ColumnContainer>
        <ColumnHeader options={options} />

        <SectionsContainer accentColor={options.accent_color || "#000000"}>
          {column.blocks.map((block) => (
            <ChecklistBlock key={getBlockId(block)} block={block} />
          ))}
        </SectionsContainer>
      </ColumnContainer>
    </OptionsContext.Provider>
  );
};

export default ChecklistColumnComponent;
