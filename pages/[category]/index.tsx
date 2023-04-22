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
import { useRecoilState } from "recoil";
import {
  modeState,
  optionState,
  searchSelectState,
  searchValState,
} from "@/recoil/store";
import DataContent from "@/components/DataContent";
import Filter from "@/components/Filter";
import Search from "@/components/Search";

type CategoryProps = {
  directIndex?: number;
  name?: string;
};

const Category = ({ directIndex, name }: CategoryProps) => {
  const router = useRouter();
  const index = CATEGORIES.findIndex(
    (category) => category === router.query.category
  );

  const [searchSelect, setSearchSelect] = useRecoilState(searchSelectState);
  const [searchVal, setSearchVal] = useRecoilState(searchValState);
  const [option] = useRecoilState(optionState);
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
    const searchFiltered = Object.entries(data).filter(([key, value]) => {
      return searchSelect === "제목"
        ? key.toLowerCase().includes(searchVal.toLowerCase())
        : value.content.toLowerCase().includes(searchVal.toLowerCase());
    });
    const importantFilter = (option: string) => {
      const filteredData = searchFiltered.sort((a, b) => {
        const starA = a[1].star.length;
        const starB = b[1].star.length;
        return option === "high" ? starB - starA : starA - starB;
      });
      setFilterData(filteredData);
    };
    const recommendFilter = (option: string) => {
      const filteredData = searchFiltered.filter(
        ([, value]) => value.star === option
      );
      setFilterData(filteredData);
    };
    if (option === "high" || option === "low") {
      return importantFilter(option);
    }
    recommendFilter(option);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option, searchSelect, searchVal]);

  const [, setMode] = useRecoilState(modeState);
  useEffect(() => {
    if (directIndex === undefined) {
      setMode(false);
      setSearchSelect("제목");
      setSearchVal("");
    }
  }, [directIndex, setMode, setSearchSelect, setSearchVal]);

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
        {directIndex === undefined && (
          <>
            <Filter />
            <Search />
          </>
        )}
        <div className="main_content">
          {filterData.map(([name, value]) => (
            <DataContent key={name} name={name} value={value} />
          ))}
          {filterData.length === 0 && (
            <div className="empty_content">★ 데이터가 존재하지 않아요. ★</div>
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
  min-height: ${(props) => (props.directIndex !== undefined ? "" : "101vh")};
  padding: 90px calc((100% - 1400px) / 2);
  padding-bottom: 0px;
  border-top: ${(props) =>
    props.directIndex !== 0 ? "1px solid #dddddd" : ""};
  padding-top: ${(props) => props.directIndex === 0 && "30px"};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 236px) {
    padding-top: 110px;
  }

  > div {
    padding-left: 28px;
  }

  > .title {
    width: 100%;
    font-size: 2.2rem;
    @media (max-width: 470px) {
      padding-left: 0px;
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
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
      @media (max-width: 470px) {
        font-size: 1.1rem;
      }
    }
  }
`;
