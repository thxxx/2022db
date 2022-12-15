import { Button } from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useState } from "react";
import ScanTable from "../src/components/ScanTable";
import Heading1 from "../src/components/Heading1";
import Heading3 from "../src/components/Heading3";
import Heading2 from "../src/components/Heading2";
import ScanResultTable from "../src/components/ScanResultTable";
import ScanNumTable from "../src/components/ScanNumTable";

const dummy = [
  {
    table: "TableA",
    recordNum: 10000,
    type: "나이, 월소득, 고객번호, 고객명",
  },
  {
    table: "TableB",
    recordNum: 15000,
    type: "아바타, 고객명",
  },
  {
    table: "TableC",
    recordNum: 23000,
    type: "나이, 월객명, 어텐션",
  },
];

const Scan: NextPage = () => {
  const [page, setPage] = useState(0);
  const [clickedRow, setClickedRow] = useState(-1);

  const goNext = () => {
    if (clickedRow !== -1) {
      setPage(1);
    }
  };

  return (
    <div>
      <Heading1>테이블 속성 도메인 스캔</Heading1>
      {page === 0 && (
        <>
          <Heading2>대상 테이블 선택</Heading2>
          <br />
          <ScanTable
            clicked={clickedRow}
            setClicked={setClickedRow}
            data={dummy}
          />
          <br />
          <Button colorScheme="facebook" onClick={goNext}>
            다음
          </Button>
        </>
      )}
      {page === 1 && (
        <>
          <Heading2>{dummy[clickedRow].table} 속성 도메인 스캔</Heading2>
          <div>범주 속성 스캔 결과</div>
          <div>이상한 그래프</div>
          <ScanResultTable
            data={[
              {
                name: "나이",
                dataType: "TEXT",
                nullRecordNum: 1,
                nullRecordRatio: 0.25,
                diffValue: 4,
                maxValue: 52,
                minValue: 21,
                zeroRecordNum: 0,
                zeroRecordRatio: 0,
                represent: "나이",
                candidate: "나이",
                key: "나이",
              },
            ]}
          />
          <Button>범주 속성 스캔 결과 내려받기</Button>
          <br />
          <br />
          <div>수치 속성 스캔 결과</div>
          <ScanNumTable
            data={[
              {
                name: "나이",
                dataType: "VARCHAR",
                nullRecordNum: 1,
                nullRecordRatio: 0.25,
                diffValue: 4,
                specialNum: 4,
                specialRatio: 1.0,
                represent: "-",
                candidate: "O",
                key: "전화번호",
              },
            ]}
          />
          <Button>수치 속성 스캔 결과 내려받기</Button>
        </>
      )}
    </div>
  );
};

export default Scan;
