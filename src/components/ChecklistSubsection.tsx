import { useOptions } from "@/hooks";
import { getBlockId, Subsection } from "@/types";
import { Roboto_Condensed } from "next/font/google";
import styled from "styled-components";
import ChecklistBlock from "./ChecklistBlock";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const SubsectionContainer = styled.div<{
  orientation?: "horizontal" | "vertical";
}>`
  position: relative;
  display: flex;
  flex-direction: ${(props) =>
    props.orientation === "vertical" ? "row" : "column"};
  align-items: stretch;
  width: 100%;
  margin-bottom: 0.3em;
`;

const VerticalSubsectionLabel = styled.div`
  width: 1.2em;
  text-transform: uppercase;

  font-size: 10pt;
  font-weight: 600;
  text-align: right;

  transform-origin: 0.5 0.5;
  transform: rotate(180deg);
  writing-mode: vertical-rl;

  border-left: 2px solid black;
`;

const HorizontalSubsectionLabel = styled.div`
  margin-top: 0.15em;
  margin-bottom: 0.15em;
  font-weight: 500;
  line-height: 1.1;
`;

const TaskContainer = styled.div<{
  lineSpacing?: string;
  orientation?: "horizontal" | "vertical";
}>`
  flex: 1;
  margin-left: ${(props) =>
    props.orientation === "horizontal" ? "1em" : "0.75em"};
  display: flex;
  flex-direction: column;
  row-gap: 0px;
  padding: 0px;
  line-height: ${(props) => props.lineSpacing || "1.025"};
`;

export type ChecklistSubsectionProps = {
  subsection: Subsection;
};

const ChecklistSubsection = ({ subsection }: ChecklistSubsectionProps) => {
  const { subsection: title, orientation = "vertical", blocks } = subsection;
  const options = useOptions();

  return (
    <SubsectionContainer orientation={orientation}>
      {title && orientation === "vertical" && (
        <VerticalSubsectionLabel className={robotoCondensed.className}>
          {title}
        </VerticalSubsectionLabel>
      )}

      {title && orientation === "horizontal" && (
        <HorizontalSubsectionLabel>{title}</HorizontalSubsectionLabel>
      )}

      <TaskContainer lineSpacing={options.spacing} orientation={orientation}>
        {blocks.map((block) => (
          <ChecklistBlock key={getBlockId(block)} block={block} />
        ))}
      </TaskContainer>
    </SubsectionContainer>
  );
};

export default ChecklistSubsection;
