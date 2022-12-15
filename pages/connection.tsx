import { Button, FormLabel, Input, useToast } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { NextPage } from "next";
import React, { useState } from "react";
import Heading1 from "../src/components/Heading1";
import { useDbStore } from "../src/store";

const Connection: NextPage = () => {
  const toast = useToast();
  const [type, setType] = useState<"db" | "upload">("db");
  const { host, isLogin, port, database, setHost, setPort, setDatabase } =
    useDbStore();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const connectDB = () => {
    console.log("디비 연결");
  };

  return (
    <ConnectionContainer>
      <Heading1>DB 연결 관리</Heading1>
      <Button
        onClick={() => setType("db")}
        margin={1}
        colorScheme={type === "db" ? "facebook" : "gray"}>
        DB 연결
      </Button>
      <Button
        onClick={() => {
          if (isLogin) setType("upload");
          else
            toast({
              title: "데이터베이스에 로그인 후 업로드 가능합니다.",
              // description: "We've created your account for you.",
              duration: 4000,
              colorScheme: "facebook",
              isClosable: true,
            });
        }}
        margin={1}
        colorScheme={type === "upload" ? "facebook" : "gray"}>
        CSV 업로드
      </Button>
      <br />
      <br />
      {type == "db" ? (
        <>
          <FormLabel>HOST</FormLabel>
          <CustomInput
            value={host}
            onChange={(e) => {
              setHost(e.currentTarget.value);
            }}
          />
          <FormLabel>PORT</FormLabel>
          <CustomInput
            value={port}
            onChange={(e) => setPort(e.currentTarget.value)}
          />
          <FormLabel>Database</FormLabel>
          <CustomInput
            value={database}
            onChange={(e) => setDatabase(e.currentTarget.value)}
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
