import { IMPOTANCE } from "@/constant/constant";
import { modeState, optionState } from "@/recoil/store";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Filter = () => {
  const [mode, setMode] = useRecoilState(modeState);
  const modeHandler = () => {
    setMode(!mode);
  };

  const [option, setOption] = useRecoilState(optionState);

  return (
    <FilterBox>
      <div>
        <label className="switch">
          <input type="checkbox" />
          <div onClick={modeHandler} className="slider">
            <span>일반</span>
            <span>시험</span>
          </div>
        </label>
      </div>
      <div></div>
      <div className="mark">
        <div className="speech">
          {IMPOTANCE.map((x) => (
            <div key={x}>{x}</div>
          ))}
        </div>
      </div>
    </FilterBox>
  );
};

export default Filter;

const FilterBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 20px;
  @media (max-width: 470px) {
    flex-direction: column;
    align-items: center;
    padding: 0px !important;
  }
  @media (max-width: 236px) {
    margin-top: 40px;
  }

  > div:nth-child(2) {
    @media (max-width: 470px) {
      margin-top: 20px;
    }

    select {
      margin: 0px 28px;
      width: 140px;
      font-size: 1.2rem;
      padding: 6px;
      font-weight: 600;
    }
  }

  .mark {
    width: 30px;
    margin-right: 25px;
    position: relative;

    @media (max-width: 470px) {
      margin-top: 20px;
      margin-right: 0px;
      margin-bottom: 20px;
    }

    > .speech {
      display: none;
    }

    > img {
      position: absolute;
      top: 2.5px;
    }
  }
`;
