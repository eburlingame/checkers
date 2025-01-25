import { ChecklistOptions } from "@/types";
import styled from "styled-components";

export type ColumnHeaderProps = {
  options: ChecklistOptions;
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
  margin-bottom: 0.5em;
`;

const HeadingTitle = styled.h1`
  font-size: 12pt;
  line-height: 1;
`;

const HeadingSubtext = styled.h2`
  font-size: 10pt;
  line-height: 1;
`;

const ColumnHeader = ({ options }: ColumnHeaderProps) => {
  return (
    <HeaderContainer>
      <HeadingSubtext>{options.header?.left}</HeadingSubtext>
      <HeadingTitle>{options.header?.center}</HeadingTitle>
      <HeadingSubtext>{options.header?.right}</HeadingSubtext>
    </HeaderContainer>
  );
};

export default ColumnHeader;
