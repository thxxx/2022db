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

type ScanTableType = {
  name: string;
  dataType: string;
  nullRecordNum: number;
  nullRecordRatio: number;
  diffValue: number;
  specialNum: number;
  specialRatio: number;
  represent: string;
  candidate: string;
  key: string;
};

const ScanNumTable = ({ data }: { data: ScanTableType[] }) => {
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
              <CustomTh>특수문자 포함 레코드 수</CustomTh>
              <CustomTh>특수문자 포함 레코드 비율</CustomTh>
              <CustomTh>대표 속성</CustomTh>
              <CustomTh>결합키 후보</CustomTh>
              <CustomTh>대표 결합키</CustomTh>
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
                  <CustomTd isNumeric>{item.specialNum}</CustomTd>
                  <CustomTd isNumeric>{item.specialRatio}</CustomTd>
                  <CustomTd>{item.represent}</CustomTd>
                  <CustomTd>{item.candidate}</CustomTd>
                  <CustomTd>{item.key}</CustomTd>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScanNumTable;

const CustomTh = styled(Th)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: white;
`;

const CustomTd = styled(Td)`
  padding-top: 8px;
  padding-bottom: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
