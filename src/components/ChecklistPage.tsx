import { OptionsContext, useOptions } from "@/hooks";
import { ChecklistPage as ChecklistPageType } from "@/types";
import styled from "styled-components";
import ChecklistColumn from "./ChecklistColumn";

const PageContainer = styled.div`
  background-color: #fff;
  width: 8.5in;
  height: 11in;
  display: flex;

  padding-bottom: 0.1875in;
  padding-top: 0.1875in;

  @media screen {
    border-bottom: 1px solid #000;
    margin-bottom: 2em;
    background-color: rgb(76, 76, 76);
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
        <ChecklistColumn page={page} column={page.left} />
        <ChecklistColumn page={page} column={page.right} />
      </PageContainer>
    </OptionsContext.Provider>
  );
};

export default ChecklistPage;
