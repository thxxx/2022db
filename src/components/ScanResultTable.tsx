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
import React, { Dispatch, SetStateAction } from "react";

export type dataType = "CHAR" | "VARCHAR" | "TEXT" | "INTEGER" | "DOUBLE";

type ScanTableType = {
  name: string;
  dataType: dataType;
  nullRecordNum: number;
  nullRecordRatio: number;
  diffValue: number;
  maxValue: number;
  minValue: number;
  zeroRecordNum: number;
  zeroRecordRatio: number;
  represent: string;
  candidate: string;
  key: string;
};

const ScanResultTable = ({ data }: { data: ScanTableType[] }) => {
  return (
    <div style={{ margin: "10px 0px 40px 0px" }}>
      <TableContainer>
        <Table variant="simple">
          {/* <TableCaption>This is test data table.</TableCaption> */}
          <Thead bgColor="facebook.300">
            <Tr>
              <CustomTh>속성명</CustomTh>
              <CustomTh>데이터 타입</CustomTh>
              <CustomTh>NLL 레코드 수</CustomTh>
              <CustomTh>NLL 레코드 비율</CustomTh>
              <CustomTh>상이 수치 값</CustomTh>
              <CustomTh>최대 값</CustomTh>
              <CustomTh>최소 값</CustomTh>
              <CustomTh>0 레코드 수</CustomTh>
              <CustomTh>0 레코드 비율</CustomTh>
              <CustomTh>대표 속성</CustomTh>
              <CustomTh>결합키 후보</CustomTh>
              <CustomTh>대표 결합키</CustomTh>
              <CustomTh>범주 속성 사전 내려받기</CustomTh>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => {
              return (
                <Tr key={item.name}>
                  <CustomTd>{item.name}</CustomTd>
                  <CustomTd>{item.dataType}</CustomTd>
                  <CustomTd isNumeric>{item.nullRecordNum}</CustomTd>
                  <CustomTd isNumeric>{item.nullRecordRatio}</CustomTd>
                  <CustomTd isNumeric>{item.diffValue}</CustomTd>
                  <CustomTd isNumeric>{item.maxValue}</CustomTd>
                  <CustomTd isNumeric>{item.minValue}</CustomTd>
                  <CustomTd isNumeric>{item.zeroRecordNum}</CustomTd>
                  <CustomTd isNumeric>{item.zeroRecordRatio}</CustomTd>
                  <CustomTd>{item.represent}</CustomTd>
                  <CustomTd>{item.candidate}</CustomTd>
                  <CustomTd>{item.key}</CustomTd>
                  <CustomTd>다운로드</CustomTd>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScanResultTable;

const CustomTh = styled(Th)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: white;
`;

const CustomTd = styled(Td)`
  padding-top: 8px;
  padding-bottom: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
