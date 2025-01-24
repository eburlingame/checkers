import { Checklist } from "@/types";
import styled from "styled-components";

export type ColumnHeaderProps = {
  checklist: Checklist;
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  margin-bottom: 0.5em;
`;

const HeadingTitle = styled.h1`
  font-size: 12pt;
`;

const HeadingSubtext = styled.h2`
  font-size: 10pt;
`;

const ColumnHeader = ({ checklist }: ColumnHeaderProps) => {
  return (
    <HeaderContainer>
      <HeadingSubtext>{checklist.header?.left}</HeadingSubtext>
      <HeadingTitle>{checklist.header?.center}</HeadingTitle>
      <HeadingSubtext>{checklist.header?.right}</HeadingSubtext>
    </HeaderContainer>
  );
};

export default ColumnHeader;
