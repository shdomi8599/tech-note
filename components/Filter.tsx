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
          width={16}
          height={16}
          src={"/question.png"}
          alt="question_mark"
        />
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
    padding: 0px;
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
  }
`;
