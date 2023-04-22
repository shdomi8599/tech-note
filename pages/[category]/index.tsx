import { CATEGORIES, COOKAPPS } from "@/constant/constant";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Category = () => {
  const router = useRouter();
  const index = CATEGORIES.findIndex(
    (category: any) => category === router.query.category
  );

  const [data, setData] = useState([]);
  useEffect(() => {
    if (index !== -1) {
      setData(COOKAPPS[index][CATEGORIES[index]]);
    }
  }, [index]);

  return (
    <CategoryBox>
      <div className="title">
        <h1>{router.query.category}</h1>
      </div>
      <div className="filter">
        <select name="" id="">
          <optgroup label="중요">
            <option value="high-to-low">별 높은 순</option>
            <option value="low-to-high">별 낮은 순</option>
          </optgroup>
          <optgroup label="추천">
            <option value="">별없음</option>
            <option value="1-star">★</option>
            <option value="2-star">★★</option>
            <option value="3-star">★★★</option>
          </optgroup>
        </select>
      </div>
      <section>
        {Object.entries(data || {}).map(([key, value]: any) => (
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
