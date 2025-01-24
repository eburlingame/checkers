import { useChecklist } from "@/hooks";
import { BasicTask } from "@/types";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
  font-weight: 400;
  font-size: 9pt;
`;

const Text = styled.span`
  flex: 1;
  display: flex;
`;

const Separator = styled.span`
  font-weight: 600;
  flex: 1;
  border-bottom: 2px dotted black;
  margin-bottom: 0.27em;
`;

const Command = styled.span<{ width: string }>`
  display: flex;
  width: ${(props) => props.width};
  font-weight: 500;
  text-transform: uppercase;
`;

const CommandText = styled.span`
  flex-grow: 1;
`;

const Annotation = styled.span`
  font-weight: 400;
`;

export type DoItemProps = {
  task: BasicTask;
};

const DoItem = ({ task }: DoItemProps) => {
  const checklist = useChecklist();

  return (
    <Item>
      <Text>
        <div>{task.item}</div>
        <Separator />
      </Text>
      <Command width={checklist?.command_width || "1.2in"}>
        <CommandText style={{ flex: "1" }}>{task.command}</CommandText>
        {task.annotation && <Annotation>{task.annotation}</Annotation>}
      </Command>
    </Item>
  );
};

export default DoItem;
