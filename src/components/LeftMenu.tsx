import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";

const LeftMenu = () => {
  return (
    <MenuContainer>
      <InfoContainer>
        <div>Host : </div>
        <div>PORT : </div>
        <div>Database : </div>
      </InfoContainer>
      <MenuButton href="connection">DB 연결관리</MenuButton>
      <MenuButton href="scan">테이블 속성 도메인 스캔</MenuButton>
      <MenuButton href="edit">테이블 속성 편집</MenuButton>
      <MenuButton href="single">단일 결합</MenuButton>
      <MenuButton href="multi">다중 결합</MenuButton>
      <MenuButton href="result">결과 조회</MenuButton>
    </MenuContainer>
  );
};

export default LeftMenu;

const InfoContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: gray;
`;

const MenuContainer = styled.div`
  padding: 40px 5px;
  width: 220px;
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
`;

const MenuButton = styled(Link)`
  width: 100%;
  padding: 20px;
  margin: 5px;
  background: rgba(0, 0, 255, 0.2);
  border-radius: 5px;
`;
