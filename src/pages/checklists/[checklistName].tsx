import Checklist from "@/components/Checklist";
import { Checklist as ChecklistType } from "@/types";
import { readdirSync, readFileSync } from "fs";
import { GetStaticPropsContext } from "next";
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
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  font-size: 10pt;
  background-color: #111;
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
        <Checklist checklist={checklist} />
      </Main>
    </>
  );
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { checklistName } = params as { checklistName: string };

  const checklistFile = readFileSync(`content/${checklistName}.yml`, "utf-8");
  const checklist = parse(checklistFile) as ChecklistType;

  return {
    props: {
      checklist,
    },
  };
};

export const getStaticPaths = async () => {
  const checklistYamlFiles = readdirSync("content")
    .filter((file) => file.endsWith(".yml"))
    .map((file) => ({
      params: {
        checklistName: file.replace(".yml", ""),
      },
    }));

  return {
    paths: checklistYamlFiles,
    fallback: false,
  };
};
