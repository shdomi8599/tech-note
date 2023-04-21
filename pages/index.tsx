import Head from "next/head";
import Header from "@/components/Header";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>쿡앱스 용어정리집</title>
      </Head>
      <Header />
      <Main>메인입니다.</Main>
    </>
  );
}
