import { Content } from "@/constant/constant";
import { modeState, optionState } from "@/recoil/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

type DataContentProps = {
  name: string;
  value: Content;
};

const DataContent = ({ name, value }: DataContentProps) => {
  const mode = useRecoilValue(modeState);
  const option = useRecoilValue(optionState);
  const [drop, setDrop] = useState(true);
  const dropHandler = () => {
    setDrop(!drop);
  };

  useEffect(() => {
    if (mode) {
      return setDrop(false);
    }
    setDrop(true);
  }, [mode, option]);

  return (
    <DataContentBox drop={drop} className="content">
      <div>
        <div>
          <div>
            <span className="drop_btn" onClick={dropHandler}>
              <Image
                src={"/drop-down.png"}
                width={16}
                height={16}
                alt="drop_down"
              />
            </span>
            <span className="star">{value.star}</span>
            <h2>{name.split("(")[0]}</h2>
          </div>
        </div>
        <div>
          <h4>{`(${name.split("(")[1]}`}</h4>
        </div>
      </div>
      {drop && <div className="drop_content">{value.content}</div>}
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
        color: var(--main-color);
      }

      .drop_btn {
        position: absolute;
        top: 3.5px;
        display: inline-block;
        cursor: pointer;
        margin-right: 10px;

        > img {
          transform: ${(props) => (props.drop ? "rotate(-180deg)" : "")};
        }
      }
    }
  }

  .drop_content {
    line-height: 24px;
  }
`;
