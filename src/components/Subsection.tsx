import { BasicTask } from "@/types";
import { Roboto_Condensed } from "next/font/google";
import styled from "styled-components";
import DoItem from "./DoItem";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const SubsectionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  margin-bottom: 0.5em;
`;

const SubsectionLabel = styled.div`
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

const TaskContainer = styled.div`
  flex: 1;
  margin-left: 0.75em;
  display: flex;
  flex-direction: column;
  row-gap: 0px;
  line-height: 1.1;
`;

export type SubsectionProps = {
  title?: string;
  tasks: BasicTask[];
};

const SubsectionComponent = ({ title, tasks }: SubsectionProps) => {
  return (
    <SubsectionContainer>
      <SubsectionLabel className={robotoCondensed.className}>
        {title}
      </SubsectionLabel>
      <TaskContainer>
        {tasks.map((task) => (
          <DoItem key={task.item} task={task} />
        ))}
      </TaskContainer>
    </SubsectionContainer>
  );
};

export default SubsectionComponent;
