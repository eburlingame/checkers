import { useOptions } from "@/hooks";
import { BasicTask } from "@/types";
import { Roboto_Condensed } from "next/font/google";
import styled from "styled-components";
import DoItem from "./DoItem";

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

  border-left: 1px solid black;
`;

const HorizontalSubsectionLabel = styled.div`
  font-size: 9pt;
  margin-left: 0.5em;
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

export type SubsectionProps = {
  title?: string;
  orientation?: "horizontal" | "vertical";
  tasks: BasicTask[];
};

const SubsectionComponent = ({
  title,
  orientation,
  tasks,
}: SubsectionProps) => {
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
        {tasks.map((task) => (
          <DoItem key={task.item} task={task} />
        ))}
      </TaskContainer>
    </SubsectionContainer>
  );
};

export default SubsectionComponent;
