import { readdirSync } from "fs";
import { Source_Sans_3 } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

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
  checklists: string[];
};

export default function Home({ checklists }: HomeProps) {
  return (
    <>
      <Head>
        <title>Checklists</title>
        <meta name="description" content="Aircraft checklists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main className={sourceSans.className}>
        <ul>
          {checklists.map((name) => (
            <li key={name}>
              <Link href={`/checklists/${name}`}>{name} checklist</Link>
            </li>
          ))}
        </ul>
      </Main>
    </>
  );
}

export const getStaticProps = async () => {
  const checklists = readdirSync("content")
    .filter((file) => file.endsWith(".yml"))
    .map((file) => file.replace(".yml", ""));

  return {
    props: {
      checklists,
    },
  };
};
