import { useOptions } from "@/hooks";
import { Task } from "@/types";
import { Fragment } from "react";
import styled from "styled-components";

const Container = styled.div<{ boxed?: boolean }>`
  display: flex;
  align-items: baseline;
  width: 100%;
  font-weight: 400;
  font-size: 10pt;

  border: ${(props) => (props.boxed ? "1px solid #000" : "none")};
  border-radius: ${(props) => (props.boxed ? "0.2em" : "0")};
  padding: ${(props) => (props.boxed ? "0em 0.3em 0em 0.3em" : "0")};
  margin-bottom: ${(props) => (props.boxed ? "0.1em" : "0")};
`;

const Standalone = styled.span`
  margin-top: 0.2em;
  margin-bottom: 0.2em;
  flex: 1;
`;

const ItemContainer = styled.span`
  flex: 1;
  display: flex;
`;

const Separator = styled.span`
  font-weight: 600;
  flex: 1;
  border-bottom: 2px dotted black;
  margin-bottom: 0.2em;
  min-width: 1em;
`;

const CommandContainer = styled.span<{ width: string; boxed?: boolean }>`
  margin-left: 0.1em;
  display: flex;
  width: ${(props) => props.width};
  font-weight: 500;
`;

const CommandText = styled.span`
  flex-grow: 1;
  text-transform: uppercase;
`;

const Annotation = styled.span`
  font-weight: 400;
`;

export type DoItemProps = {
  task: Task;
};

const ChecklistItem = ({ task }: DoItemProps) => {
  const options = useOptions();

  if (
    task.command === null ||
    task.command === undefined ||
    task.command === ""
  ) {
    return (
      <Container boxed={task.boxed}>
        <Standalone>{task.item}</Standalone>
      </Container>
    );
  }

  const renderMultilineText = (text: string) => {
    return text.split("\\n").map((line, index) => (
      <Fragment key={index}>
        {line}
        <br />
      </Fragment>
    ));
  };

  return (
    <Container boxed={task.boxed}>
      <ItemContainer>
        {renderMultilineText(task.item)}
        <Separator></Separator>
      </ItemContainer>

      <CommandContainer width={options?.command_width || "1.2in"}>
        <CommandText style={{ flex: "1" }}>
          {renderMultilineText(task.command)}
        </CommandText>
        {task.annotation && <Annotation>{task.annotation}</Annotation>}
      </CommandContainer>
    </Container>
  );
};

export default ChecklistItem;
