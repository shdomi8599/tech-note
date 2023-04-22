/* eslint-disable @next/next/no-img-element */
import { Content } from "@/constant/constant";
import styled from "styled-components";

type DataContentProps = {
  name: string;
  value: Content;
};

const DataContent = ({ name, value }: DataContentProps) => {
  return (
    <DataContentBox className="content">
      <div>
        <div>
          <div>
            <span>{value.star}</span>
            <h2>{name.split("(")[0]}</h2>
          </div>
          <div className="drop_btn">
            <img src="/drop-down.png" alt="" />
          </div>
        </div>
        <div>
          <h4>{`(${name.split("(")[1]}`}</h4>
        </div>
      </div>
      <div>{value.content}</div>
    </DataContentBox>
  );
};

export default DataContent;

const DataContentBox = styled.div`
  width: 100%;
  position: relative;

  > div:first-child {
    display: flex;
    margin-bottom: 30px;
    flex-direction: column;

    > div {
      display: flex;

      .drop_btn {
        width: 16px;
        height: 16px;
        position: absolute;
        left: 90px;
        top: 4px;
        cursor: pointer;

        > img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
