import { IMPOTANCE } from "@/constant/constant";
import { modeState, optionState } from "@/recoil/store";
import Image from "next/image";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Filter = () => {
  const [mode, setMode] = useRecoilState(modeState);
  const modeHandler = () => {
    setMode(!mode);
  };

  const [option, setOption] = useRecoilState(optionState);
  const changeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
  };

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
      <div className="mark">
        <Image
          width={30}
          height={30}
          src={"/question.png"}
          alt="question_mark"
        />
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
  @media (max-width: 410px) {
    flex-direction: column;
    align-items: center;
    padding: 0px !important;
  }
  @media (max-width: 236px) {
    margin-top: 40px;
  }

  > div:nth-child(2) {
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

  .mark {
    width: 30px;
    margin-right: 25px;
    position: relative;

    :hover {
      .speech {
        display: block;
        position: absolute;
        background: var(--main-color);
        border-radius: 0.4em;
        width: 235px;
        font-weight: 600;
        color: white;
        right: 60px;
        bottom: -63px;
        z-index: 2;
        padding: 20px;
        @media (max-width: 410px) {
          right: -102.7px;
          bottom: 30px;
        }

        ::after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          width: 0;
          height: 0;
          border: 22px solid transparent;
          border-left-color: var(--main-color);
          border-right: 0;
          border-top: 0;
          margin-top: -11px;
          margin-right: -22px;
          @media (max-width: 410px) {
            top: 107%;
            left: 50%;
            border: 22px solid transparent;
            border-top-color: var(--main-color);
            margin-left: -22px;
            margin-bottom: -22px;
          }
        }

        > div {
          margin: 4px 0px;
        }
      }
    }

    @media (max-width: 410px) {
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
