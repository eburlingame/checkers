import { OptionsContext, useOptions } from "@/hooks";
import { ChecklistPage as ChecklistPageType } from "@/types";
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

export type ChecklistPageProps = {
  page: ChecklistPageType;
};

const ChecklistPage = ({ page }: ChecklistPageProps) => {
  const options = useOptions();

  return (
    <OptionsContext.Provider
      value={{ ...options, ...page.options }}
      key={page.name}
    >
      <PageContainer>
        <ChecklistColumn column={page.left} />
        <ChecklistColumn column={page.right} />
      </PageContainer>
    </OptionsContext.Provider>
  );
};

export default ChecklistPage;
