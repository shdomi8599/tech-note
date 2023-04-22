/* eslint-disable @next/next/no-img-element */
import { Content } from "@/constant/constant";
import { modeState } from "@/recoil/store";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

type DataContentProps = {
  name: string;
  value: Content;
};

const DataContent = ({ name, value }: DataContentProps) => {
  const [drop, setDrop] = useState(false);
  const dropHandler = () => {
    setDrop(!drop);
  };

  const mode = useRecoilValue(modeState);
  useEffect(() => {
    if (mode) {
      return setDrop(false);
    }
    setDrop(true);
  }, [mode]);

  return (
    <DataContentBox drop={drop} className="content">
      <div>
        <div>
          <div>
            <span className="drop_btn" onClick={dropHandler}>
              <img src="/drop-down.png" alt="" />
            </span>
            <span className="star">{value.star}</span>
            <h2>{name.split("(")[0]}</h2>
          </div>
        </div>
        <div>
          <h4>{`(${name.split("(")[1]}`}</h4>
        </div>
      </div>
      {drop && <div>{value.content}</div>}
    </DataContentBox>
  );
};

export default DataContent;

type DataContentBoxProps = {
  drop: boolean;
};

const DataContentBox = styled.div<DataContentBoxProps>`
  width: 100%;
  position: relative;

  > div:first-child {
    display: flex;
    margin-bottom: 30px;
    flex-direction: column;

    > div {
      display: flex;
      position: relative;

      h2 {
        margin-top: 4px;
      }

      .star {
        margin-left: 24px;
      }

      .drop_btn {
        position: absolute;
        top: 4px;
        width: 16px;
        height: 16px;
        display: inline-block;
        cursor: pointer;
        margin-right: 10px;

        > img {
          width: 100%;
          height: 100%;
          transform: ${(props) => (props.drop ? "rotate(-180deg)" : "")};
        }
      }
    }
  }
`;
