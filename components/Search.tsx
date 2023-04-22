import { searchValState } from "@/recoil/store";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Search = () => {
  const [, setSearchVal] = useRecoilState(searchValState);
  const changeSearchVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  return (
    <SearchBox id="search-box">
      <div>
        <select className="search-content">
          <option value="한글명">한글명</option>
          <option value="영문명">영문명</option>
          <option value="설명">설명</option>
        </select>
      </div>
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </svg>
        <input
          onChange={changeSearchVal}
          type="search"
          className="search-content"
        />
      </div>
      <div>
        <button className="search-content search-btn">검색</button>
      </div>
    </SearchBox>
  );
};

export default Search;

const SearchBox = styled.form`
  margin-top: 50px;
  display: flex;
  width: 100%;

  @media (max-width: 470px) {
    flex-direction: column;
    align-items: center;
    margin-right: 0px;
    padding-left: 0px !important;
  }

  > div:first-child {
    margin-right: 28px;
    @media (max-width: 470px) {
      margin-right: 0px;
      margin-bottom: 30px;
    }

    > select {
      padding-left: 1rem;
      font-weight: 600;
      font-size: 1rem;
      > option {
        font-weight: 600;
      }
    }
  }

  .search-btn {
    margin-left: 20px;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    @media (max-width: 470px) {
      margin-top: 30px;
      margin-left: 0px;
    }
  }
`;
