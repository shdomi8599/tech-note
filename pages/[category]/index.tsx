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
      return setFilterData(filteredData);
    };
    if (option === "high" || option === "low") {
      return importantFilter(option);
    }
    recommendFilter(option);
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
          <div>
            <label className="switch">
              <input type="checkbox" />
              <div className="slider">
                <span>일반</span>
                <span>시험</span>
              </div>
            </label>
          </div>
          <div>
            <select value={option} onChange={changeOption}>
              <optgroup label="중요">
                <option value="high">별 높은 순</option>
                <option value="low">별 낮은 순</option>
              </optgroup>
              <optgroup label="추천">
                <option value="">별없음</option>
                <option value="★">★</option>
                <option value="★★">★★</option>
                <option value="★★★">★★★</option>
              </optgroup>
            </select>
          </div>
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
          {filterData.length === 0 && (
            <div className="empty_content">★데이터가 존재하지 않아요.★</div>
          )}
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
    @media (max-width: 410px) {
      flex-direction: column;
      align-items: center;
      padding: 0px;
    }

    > div:last-child {
      @media (max-width: 410px) {
        margin-top: 20px;
      }

      select {
        margin: 0px 28px;
        width: 140px;
        font-size: 1.2rem;
        padding: 6px;
        font-weight: 600;
        box-shadow: var(--boxshadow);
        border: 1px solid #c8cac8;
      }
    }
  }

  > section {
    width: 100%;

    > div {
      margin: 50px 0px;
      padding: 0px 28px;
    }

    .content {
      width: 100%;

      > div:first-child {
        display: flex;
        margin-bottom: 30px;
        flex-direction: column;
      }
    }

    .empty_content {
      width: 100%;
      display: flex;
      font-weight: 900;
      justify-content: center;
      font-size: 2.3rem;
    }
  }
`;
