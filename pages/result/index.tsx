import { Button } from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useState } from "react";
import AttrPage from "./AttrPage";
import MultiResult from "./MultiResult";
import SingleResult from "./SingleResult";

const Result: NextPage = () => {
  const [type, setType] = useState<"attr" | "single" | "multi">("attr");

  return (
    <div>
      <div>
        <Button margin={3} onClick={() => setType("attr")}>
          속성 스캔 결과 조회
        </Button>
        <Button margin={3} onClick={() => setType("single")}>
          단일 결합 결과 조회
        </Button>
        <Button margin={3} onClick={() => setType("multi")}>
          다중 결합 결과 조회
        </Button>
      </div>
      <div>
        {type === "attr" && <AttrPage />}
        {type === "single" && <SingleResult />}
        {type === "multi" && <MultiResult />}
      </div>
    </div>
  );
};

export default Result;
