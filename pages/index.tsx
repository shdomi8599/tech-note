import Head from "next/head";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>쿡앱스 용어정리집</title>
      </Head>
      <Main>메인입니다.</Main>
    </>
  );
};

export default Home;
