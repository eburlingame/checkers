import { ChecklistContext, OptionsContext } from "@/hooks";
import { Checklist as ChecklistType } from "@/types";
import styled from "styled-components";
import ChecklistColumn from "./ChecklistColumn";

const PageContainer = styled.div`
  background-color: #fff;
  width: 8.5in;
  height: 11in;
  display: flex;

  @media screen {
    border-bottom: 1px solid #000;
    margin-bottom: 2em;
  }
`;

export type ChecklistProps = {
  checklist: ChecklistType;
};

const Checklist = ({ checklist }: ChecklistProps) => {
  return (
    <ChecklistContext.Provider value={checklist}>
      {checklist.pages.map((page) => (
        <OptionsContext.Provider
          value={{ ...checklist.options, ...page.options }}
          key={page.left.sections[0].name}
        >
          <PageContainer>
            <ChecklistColumn column={page.left} />
            <ChecklistColumn column={page.right} />
          </PageContainer>
        </OptionsContext.Provider>
      ))}
    </ChecklistContext.Provider>
  );
};

export default Checklist;
