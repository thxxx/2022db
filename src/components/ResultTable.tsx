import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";

type DataTableType = {
  source: string;
  recordNum: number;
  attrA: string;
  targetTable: string;
  recordNumB: number;
  attrB: string;
  represent: string;
  resultRecordNum: number;
  successRate1: string;
  successRate2: string;
  progress: string;
  joinTable: string;
};

const ResultTable = ({ data }: { data: DataTableType[] }) => {
  return (
    <div style={{ margin: "10px 0px 40px 0px" }}>
      <TableContainer>
        <Table variant="simple">
          {/* <TableCaption>This is test data table.</TableCaption> */}
          <Thead bgColor="red.400">
            <Tr>
              <CustomTh>Source 테이블</CustomTh>
              <CustomTh isNumeric>테이블A 레코드 수</CustomTh>
              <CustomTh>결합 키 속성A</CustomTh>
              <CustomTh>Target 테이블</CustomTh>
              <CustomTh isNumeric>테이블B 레코드 수</CustomTh>
              <CustomTh>결합 키 속성B</CustomTh>
              <CustomTh>대표 결합키</CustomTh>
              <CustomTh>결과 레코드 수</CustomTh>
              <CustomTh>결합 성공률(W1)</CustomTh>
              <CustomTh>결합 성공률(W2)</CustomTh>
              <CustomTh>결합 진행상황</CustomTh>
              <CustomTh>결합 테이블명</CustomTh>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <Tr key={item.source}>
                  <CustomTd>{item.source}</CustomTd>
                  <CustomTd isNumeric>{item.recordNum}</CustomTd>
                  <CustomTd>{item.attrA}</CustomTd>
                  <CustomTd>{item.targetTable}</CustomTd>
                  <CustomTd isNumeric>{item.recordNumB}</CustomTd>
                  <CustomTd>{item.attrB}</CustomTd>
                  <CustomTd>{item.represent}</CustomTd>
                  <CustomTd isNumeric>{item.resultRecordNum}</CustomTd>
                  <CustomTd>{item.successRate1}</CustomTd>
                  <CustomTd>{item.successRate2}</CustomTd>
                  <CustomTd>{item.progress}</CustomTd>
                  <CustomTd>{item.joinTable}</CustomTd>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ResultTable;

const CustomTh = styled(Th)`
  width: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const CustomTd = styled(Td)`
  width: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
