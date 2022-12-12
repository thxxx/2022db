import { Button, FormLabel, Input } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { NextPage } from "next";
import React, { useState } from "react";
import Heading1 from "../src/components/Heading1";

const Connection: NextPage = () => {
  const [type, setType] = useState<"db" | "upload">("db");
  const [host, setHost] = useState("");
  const [port, setPort] = useState("");
  const [db, setDb] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const connectDB = () => {
    console.log("디비 연결");
  };

  return (
    <ConnectionContainer>
      <Heading1>DB 연결 관리</Heading1>
      <Button onClick={() => setType("db")} margin={1}>
        DB 연결
      </Button>
      <Button onClick={() => setType("upload")} margin={1}>
        CSV 업로드
      </Button>
      <br />
      <br />
      {type == "db" ? (
        <>
          <FormLabel>HOST</FormLabel>
          <CustomInput
            value={host}
            onChange={(e) => setHost(e.currentTarget.value)}
          />
          <FormLabel>PORT</FormLabel>
          <CustomInput
            value={port}
            onChange={(e) => setPort(e.currentTarget.value)}
          />
          <FormLabel>Database</FormLabel>
          <CustomInput
            value={db}
            onChange={(e) => setDb(e.currentTarget.value)}
          />
          <FormLabel>U S E R</FormLabel>
          <CustomInput
            value={user}
            onChange={(e) => setUser(e.currentTarget.value)}
          />
          <FormLabel>Password</FormLabel>
          <CustomInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <Button padding={8} onClick={connectDB}>
            Connect
          </Button>
        </>
      ) : (
        <>
          <FormLabel>파일경로:</FormLabel>
          <Input
            type="file"
            onChange={(e) => {
              console.log(e);
            }}
          />
          <Button padding={6} marginTop={4}>
            csv 업로드
          </Button>
        </>
      )}
    </ConnectionContainer>
  );
};

export default Connection;

const ConnectionContainer = styled.div`
  width: 60vw;
`;

const CustomInput = styled(Input)`
  width: 100%;
  margin: 5px 3px;
`;
