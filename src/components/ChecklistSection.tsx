import { useOptions } from "@/hooks";
import { getBlockId, Section } from "@/types";
import styled from "styled-components";
import ChecklistBlock from "./ChecklistBlock";

const SectionContainer = styled.div<{ lineSpacing?: string }>`
  display: flex;
  flex-direction: column;
  row-gap: 0px;
  margin-bottom: 0.35em;
  line-height: ${(props) => props.lineSpacing || "1.025"};
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

const ChecklistSection = ({ section }: ChecklistSectionProps) => {
  const { section: title, blocks } = section;
  const options = useOptions();

  return (
    <>
      <Header>{title}</Header>
      <SectionContainer lineSpacing={options.spacing}>
        {blocks.map((block) => (
          <ChecklistBlock key={getBlockId(block)} block={block} />
        ))}
      </SectionContainer>
    </>
  );
};

export default ChecklistSection;
