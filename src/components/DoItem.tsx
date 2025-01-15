import { BasicTask } from "@/types";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
  font-weight: 400;
`;

const Text = styled.span`
  flex: 1;
`;

const Separator = styled.span`
  font-weight: 600;
`;

const Command = styled.span`
  display: flex;
  width: 2in;
  margin-left: 0.5em;
  font-weight: 500;
`;

const CommandText = styled.span`
  flex: 1;
`;

const Annotation = styled.span`
  font-weight: 400;
`;

export type DoItemProps = {
  task: BasicTask;
};

const DoItem = ({ task }: DoItemProps) => {
  return (
    <Item>
      <Text>{task.item}</Text>
      <Separator>{`›`}</Separator>
      <Command>
        <CommandText style={{ flex: "1" }}>{task.command}</CommandText>
        {task.annotation && <Annotation>{task.annotation}</Annotation>}
      </Command>
    </Item>
  );
};

export default DoItem;
