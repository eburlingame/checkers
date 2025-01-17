import ChecklistColumn from "@/components/ChecklistColumn";
import { Checklist as ChecklistType } from "@/types";
import { readFileSync } from "fs";
import { Source_Sans_3 } from "next/font/google";
import Head from "next/head";
import styled from "styled-components";
import { parse } from "yaml";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const Main = styled.main`
  display: flex;
  align-items: stretch;
  height: 100%;
  font-size: 10pt;
`;

export type HomeProps = {
  checklist: ChecklistType;
};

export default function Home({ checklist }: HomeProps) {
  return (
    <>
      <Head>
        <title>Checklists</title>
        <meta name="description" content="Aircraft checklists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main className={sourceSans.className}>
        <ChecklistColumn checklist={checklist.left} />
        <ChecklistColumn checklist={checklist.right} />
      </Main>
    </>
  );
}

export const getStaticProps = async () => {
  const checklistFile = readFileSync("content/182.yml", "utf-8");
  const checklist = parse(checklistFile) as ChecklistType;

  return {
    props: {
      checklist,
    },
  };
};
