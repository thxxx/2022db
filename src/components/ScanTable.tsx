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
  table: string;
  recordNum: number;
  type: string;
};

const ScanTable = ({
  data,
  clicked,
  setClicked,
}: {
  data: ScanTableType[];
  clicked: number;
  setClicked: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div style={{ margin: "10px 0px 40px 0px" }}>
      <TableContainer>
        <Table variant="simple">
          {/* <TableCaption>This is test data table.</TableCaption> */}
          <Thead bgColor="red.400">
            <Tr>
              <CustomTh>테이블 명</CustomTh>
              <CustomTh isNumeric>레코드 수</CustomTh>
              <CustomTh>속성</CustomTh>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => {
              return (
                <CustomTr
                  bgColor={index === clicked ? "facebook.200" : "gray.0"}
                  key={item.table}
                  onClick={() => setClicked(index)}>
                  <CustomTd>{item.table}</CustomTd>
                  <CustomTd isNumeric>{item.recordNum}</CustomTd>
                  <CustomTd>{item.type}</CustomTd>
                </CustomTr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScanTable;

const CustomTh = styled(Th)`
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const CustomTd = styled(Td)`
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const CustomTr = styled(Tr)<{ bgColor: string }>`
  cursor: pointer;
  &:hover {
    background: ${({ bgColor }) =>
      bgColor === "gray.0" && "rgba(170, 170, 170, 0.1)"};
  }
`;
