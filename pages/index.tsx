import Head from "next/head";
import styled from "styled-components";
import Category from "./[category]";
import { CATEGORIES } from "@/constant/constant";

const Main = styled.main`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Home = () => {
  const directArr: number[] = Array(8)
    .fill(0)
    .map((x, i) => x + i);

  return (
    <>
      <Head>
        <title>쿡앱스 용어정리집</title>
      </Head>
      <Main>
        {directArr.map((idx) => (
          <Category key={idx} directIndex={idx} name={CATEGORIES[idx]}/>
        ))}
      </Main>
    </>
  );
};

export default Home;
