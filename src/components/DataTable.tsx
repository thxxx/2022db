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
  table: string;
  recordNum: number;
  represent: string;
  key: string;
};

const DataTable = ({ data }: { data: DataTableType[] }) => {
  return (
    <div style={{ margin: "10px 0px 40px 0px" }}>
      <TableContainer>
        <Table variant="simple">
          {/* <TableCaption>This is test data table.</TableCaption> */}
          <Thead bgColor="red.400">
            <Tr>
              <CustomTh>테이블</CustomTh>
              <CustomTh isNumeric>레코드 수</CustomTh>
              <CustomTh>대표 속성</CustomTh>
              <CustomTh>대표 결합키</CustomTh>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <Tr key={item.table}>
                  <CustomTd>{item.table}</CustomTd>
                  <CustomTd isNumeric>{item.recordNum}</CustomTd>
                  <CustomTd>{item.represent}</CustomTd>
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

export default DataTable;

const CustomTh = styled(Th)`
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const CustomTd = styled(Td)`
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
