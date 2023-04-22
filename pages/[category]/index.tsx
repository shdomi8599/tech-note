import {
  CATEGORIES,
  COOKAPPS,
  CategoryData,
  Content,
} from "@/constant/constant";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { optionState } from "@/recoil/store";
import DataContent from "@/components/DataContent";
import Filter from "@/components/Filter";

type CategoryProps = {
  directIndex?: number;
  name?: string;
};

const Category = ({ directIndex, name }: CategoryProps) => {
  const router = useRouter();
  const index = CATEGORIES.findIndex(
    (category) => category === router.query.category
  );

  const option = useRecoilValue(optionState);
  const [data, setData] = useState<CategoryData>({});
  const [filterData, setFilterData] = useState<[string, Content][] | []>([]);

  useEffect(() => {
    if (directIndex !== undefined) {
      return setData(COOKAPPS[directIndex][CATEGORIES[directIndex]]);
    }
    index !== -1 && setData(COOKAPPS[index][CATEGORIES[index]]);
  }, [directIndex, index, setData]);

  useEffect(() => {
    setFilterData(Object.entries(data || []));
  }, [data]);

  useEffect(() => {
    const importantFilter = (option: string) => {
      const arrData = Object.entries(data);
      const filteredData = arrData.sort((a, b) => {
        const starA = a[1].star.length;
        const starB = b[1].star.length;
        return option === "high" ? starB - starA : starA - starB;
      });
      setFilterData(filteredData);
    };
    const recommendFilter = (option: string) => {
      const filteredData = Object.entries(data).filter(
        ([, value]) => value.star === option
      );
      setFilterData(filteredData);
    };
    if (option === "high" || option === "low") {
      return importantFilter(option);
    }
    recommendFilter(option);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option]);
  return (
    <>
      {directIndex === undefined && (
        <Head>
          <title>쿡앱스 용어정리집 - {router.query.category}</title>
        </Head>
      )}
      <CategoryBox directIndex={directIndex}>
        <div className="title">
          <h1>{router.query.category || name}</h1>
        </div>
        {directIndex === undefined && <Filter />}
        <div className="main_content">
          {filterData.map(([name, value]) => (
            <DataContent key={name} name={name} value={value} />
          ))}
          {filterData.length === 0 && (
            <div className="empty_content">★데이터가 존재하지 않아요.★</div>
          )}
        </div>
      </CategoryBox>
    </>
  );
};

export default Category;

type CategoryBoxProps = {
  directIndex?: number;
};

const CategoryBox = styled.section<CategoryBoxProps>`
  padding: 90px calc((100% - 1400px) / 2);
  padding-bottom: ${(props) => props.directIndex && "0px"};
  border-top: ${(props) =>
    props.directIndex !== 0 ? "1px solid #dddddd" : ""};
  padding-top: ${(props) => props.directIndex === 0 && "30px"};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    padding-left: 28px;
  }

  > .title {
    width: 100%;
    font-size: 2.2rem;
    padding-bottom: 24px;
  }

  > .main_content {
    width: 100%;
    padding-left: 0px;
    padding-bottom: 30px;

    > div {
      margin: 50px 0px;
      padding: 0px 28px;
    }

    .empty_content {
      width: 100%;
      display: flex;
      font-weight: 900;
      justify-content: center;
      font-size: 2.3rem;
      @media (max-width: 576px) {
        font-size: 1.5rem;
      }
      @media (max-width: 410px) {
        font-size: 1.1rem;
      }
    }
  }
`;
