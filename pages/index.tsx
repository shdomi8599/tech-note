import Head from "next/head";
import styled from "styled-components";
import Category from "./[category]";
import { CATEGORIES } from "@/constant/constant";
import Filter from "@/components/Filter";
import Search from "@/components/Search";

const Home = () => {
  return (
    <>
      <Head>
        <title>기술면접 정리</title>
      </Head>
      <Main>
        <Filter />
        <Search />
        {CATEGORIES.map((category, idx) => (
          <Category key={idx} directIndex={idx} name={category} />
        ))}
      </Main>
    </>
  );
};

export default Home;

const Main = styled.main`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 90px calc((100% - 1400px) / 2);
  padding-bottom: 0px;

  #search-box {
    margin-bottom: 20px;
  }
`;
