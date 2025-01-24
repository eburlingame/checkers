import { useChecklist } from "@/hooks";
import { BasicTask } from "@/types";
import { Fragment } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
  font-weight: 400;
  font-size: 9pt;
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

const CommandContainer = styled.span<{ width: string }>`
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
  task: BasicTask;
};

const DoItem = ({ task }: DoItemProps) => {
  const checklist = useChecklist();

  if (
    task.command === null ||
    task.command === undefined ||
    task.command === ""
  ) {
    return (
      <Container>
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
    <Container>
      <ItemContainer>
        {renderMultilineText(task.item)}
        <Separator></Separator>
      </ItemContainer>

      <CommandContainer width={checklist?.command_width || "1.2in"}>
        <CommandText style={{ flex: "1" }}>
          {renderMultilineText(task.command)}
        </CommandText>
        {task.annotation && <Annotation>{task.annotation}</Annotation>}
      </CommandContainer>
    </Container>
  );
};

export default DoItem;
