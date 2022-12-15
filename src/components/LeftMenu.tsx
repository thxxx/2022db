import { Button, Input } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import { useDbStore } from "../store";

const LeftMenu = () => {
  const { host, port, database } = useDbStore();

  return (
    <MenuContainer>
      <InfoContainer>
        <div>
          <p>Host :</p>
          {host}
        </div>
        <div>
          <p>Port :</p>
          {port}
        </div>
        <div>
          <p>Database :</p>
          {database}
        </div>
      </InfoContainer>
      <br />
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
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 16px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 5px;

  div{
    margin-top: 5px;
    display:flex;
    flex-direction;row;
    align-items:center;
    font-size: 14px;
  }

  p {
    width:120px;
  }
`;

const MenuContainer = styled.div`
  padding: 40px 5px;
  width: 280px;
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
