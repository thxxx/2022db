import type { NextPage } from "next";
import React from "react";
import { dummy } from "../src/utils/testdata";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const DB: NextPage = () => {
  return (
    <DBContainer>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>This is test data table.</TableCaption>
          <Thead bgColor="red.400">
            <Tr>
              <Th>Name</Th>
              <Th isNumeric>studentId</Th>
              <Th isNumeric>age</Th>
              <Th>major</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dummy.map((item) => {
              return (
                <Tr key={item.name}>
                  <Td>{item.name}</Td>
                  <Td isNumeric>{item.studentId}</Td>
                  <Td isNumeric>{item.age}</Td>
                  <Td>{item.major}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </DBContainer>
  );
};

export default DB;

const DBContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  float: left;
  padding: 40px;
`;
