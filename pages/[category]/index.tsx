import { CATEGORIES, COOKAPPS, Content } from "@/constant/constant";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { dataState, optionState } from "@/recoil/store";

const Category = () => {
  const router = useRouter();
  const index = CATEGORIES.findIndex(
    (category) => category === router.query.category
  );

  const [option, setOption] = useRecoilState(optionState);
  const changeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
  };

  const [data, setData] = useRecoilState(dataState);
  const [filterData, setFilterData] = useState<[string, Content][] | []>([]);

  useEffect(() => {
    if (index !== -1) {
      setData(COOKAPPS[index][CATEGORIES[index]]);
    }
  }, [index, setData]);

  useEffect(() => {
    setFilterData(Object.entries(data || []));
  }, [data]);

  useEffect(() => {
    const arrData = Object.entries(data);
    if (option === "high") {
      const filteredData = arrData.sort((a, b) => {
        if (a[1].star.length > b[1].star.length) return -1;
        if (a[1].star.length < b[1].star.length) return 1;
        return 0;
      });
      return setFilterData(filteredData);
    }
    if (option === "low") {
      const filteredData = arrData.sort((a, b) => {
        const starA = a[1].star.length;
        const starB = b[1].star.length;
        return starA - starB;
      });
      return setFilterData(filteredData);
    }
    if (option === "") {
      const filteredData = Object.entries(data).filter(
        ([, value]) => value.star === ""
      );
      return setFilterData(filteredData);
    }
    if (option === "1star") {
      const filteredData = Object.entries(data).filter(
        ([, value]) => value.star === "★"
      );
      return setFilterData(filteredData);
    }
    if (option === "2star") {
      const filteredData = Object.entries(data).filter(
        ([, value]) => value.star === "★★"
      );
      return setFilterData(filteredData);
    }
    if (option === "3star") {
      const filteredData = Object.entries(data).filter(
        ([, value]) => value.star === "★★★"
      );
      return setFilterData(filteredData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option]);

  return (
    <>
      <Head>
        <title>쿡앱스 용어정리집 - {router.query.category}</title>
      </Head>
      <CategoryBox>
        <div className="title">
          <h1>{router.query.category}</h1>
        </div>
        <div className="filter">
          <select value={option} onChange={changeOption}>
            <optgroup label="중요">
              <option value="high">별 높은 순</option>
              <option value="low">별 낮은 순</option>
            </optgroup>
            <optgroup label="추천">
              <option value="">별없음</option>
              <option value="1star">★</option>
              <option value="2star">★★</option>
              <option value="3star">★★★</option>
            </optgroup>
          </select>
        </div>
        <section>
          {filterData.map(([key, value]) => (
            <div className="content" key={key}>
              <div>
                <div>
                  <span>{value.star}</span>
                  <h2>{key.split("(")[0]}</h2>
                </div>
                <div>
                  <h4>{`(${key.split("(")[1]}`}</h4>
                </div>
              </div>
              <div>{value.content}</div>
            </div>
          ))}
        </section>
      </CategoryBox>
    </>
  );
};

export default Category;

const CategoryBox = styled.main`
  padding: 140px calc((100% - 1400px) / 2);
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

  > .filter {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-top: 20px;

    select {
      margin: 0px 28px;
      width: 140px;
      font-size: 1.2rem;
      padding: 6px;
    }
  }

  > section {
    width: 100%;

    .content {
      width: 100%;
      margin: 50px 0px;
      padding: 0px 28px;

      > div:first-child {
        display: flex;
        margin-bottom: 30px;
        flex-direction: column;
      }
    }
  }
`;
