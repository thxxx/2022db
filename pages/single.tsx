import { Button, Input } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { NextPage } from "next";
import React, { useState } from "react";
import DataTable from "../src/components/DataTable";
import Heading1 from "../src/components/Heading1";
import Heading2 from "../src/components/Heading2";
import Heading3 from "../src/components/Heading3";
import ResultTable from "../src/components/ResultTable";

const sourceDummy = [
  {
    table: "Table A",
    recordNum: 10000,
    represent: "직업",
    key: "전화번호",
  },
  {
    table: "Table B",
    recordNum: 15000,
    represent: "건강정보",
    key: "전화번호",
  },
];

const Single: NextPage = () => {
  const [table, setTable] = useState("");
  const [key, setKey] = useState("");
  const [attr, setAttr] = useState("");
  const [represent, setRepresent] = useState("");
  const [page, setPage] = useState(0);

  const [clickedTable, setClickedTable] = useState(-1);
  const [joinableTable, setJoinableTable] = useState(-1);

  return (
    <div>
      <Heading1>단일결합</Heading1>
      {page === 0 && (
        <>
          <Heading2>Source 테이블 검색</Heading2>
          <SearchContainer>
            <Label>테이블명</Label>
            <InputCustom
              value={table}
              onChange={(e) => setTable(e.currentTarget.value)}
            />
            <Label>표준 결합키</Label>
            <InputCustom
              value={key}
              onChange={(e) => setKey(e.currentTarget.value)}
            />
            <Label>대표속성</Label>
            <InputCustom
              value={represent}
              onChange={(e) => setRepresent(e.currentTarget.value)}
            />
            <Label>속성명</Label>
            <InputCustom
              value={attr}
              onChange={(e) => setAttr(e.currentTarget.value)}
            />
            <Button>검색</Button>
          </SearchContainer>
          <Heading3>▶️ 선택 가능한 테이블 목록</Heading3>
          <DataTable
            clicked={clickedTable}
            setClicked={setClickedTable}
            data={sourceDummy}
          />
          <Button
            colorScheme="facebook"
            marginTop={10}
            width={120}
            height={12}
            onClick={() => setPage(page + 1)}>
            다음
          </Button>
        </>
      )}
      {page === 1 && (
        <>
          <Heading2>Target 테이블 검색</Heading2>
          <Heading3>▶️ 현재 선택된 Source 테이블</Heading3>
          <DataTable data={[sourceDummy[clickedTable]]} />
          <Heading3>▶️ Source 테이블과 결합 가능한 테이블 목록</Heading3>
          <DataTable
            clicked={joinableTable}
            setClicked={setJoinableTable}
            data={[
              {
                table: "Table A",
                recordNum: 10000,
                represent: "직업",
                key: "전화번호",
              },
            ]}
          />
          <Button
            marginTop={10}
            width={120}
            height={12}
            onClick={() => setPage(page - 1)}>
            이전
          </Button>
          <Button
            colorScheme="facebook"
            marginTop={10}
            marginLeft={5}
            width={120}
            height={12}
            onClick={() => setPage(page + 1)}>
            다음
          </Button>
        </>
      )}
      {page === 2 && (
        <>
          <Heading3>단일 결합 결과</Heading3>
          <ResultTable
            data={[
              {
                source: "string",
                recordNum: 0,
                attrA: "string",
                targetTable: "string",
                recordNumB: 3,
                attrB: "폰번호",
                represent: "전화번호",
                resultRecordNum: 3,
                successRate1: "0.75",
                successRate2: "1.0",
                progress: "진행중",
                joinTable: "string",
              },
            ]}
          />
          <Button
            marginTop={10}
            width={120}
            height={12}
            onClick={() => setPage(page - 1)}>
            이전
          </Button>
          <Button
            marginTop={10}
            marginLeft={5}
            colorScheme="facebook"
            height={12}>
            결합 테이블 내려받기
          </Button>
        </>
      )}
    </div>
  );
};

export default Single;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
`;

const Label = styled.div`
  background: rgba(100, 0, 100, 0.3);
  padding: 5px 10px;
  font-size: 14px;
  border: 1px solid gray;
`;

const InputCustom = styled(Input)`
  width: 120px;
  border-radius: 0px;
`;
