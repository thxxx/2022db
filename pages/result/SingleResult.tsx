import React from "react";
import Heading3 from "../../src/components/Heading3";
import ResultTable from "../../src/components/ResultTable";

const SingleResult = () => {
  return (
    <div>
      <Heading3>단일 결합 결과 목록</Heading3>
      <ResultTable
        data={[
          {
            source: "string",
            recordNum: 0,
            attrA: "string",
            targetTable: "string",
            recordNumB: 3,
            attrB: "폰번호",
            represent: "전화번호",
            resultRecordNum: 3,
            successRate1: "0.75",
            successRate2: "1.0",
            progress: "진행중",
            joinTable: "string",
          },
        ]}
      />
    </div>
  );
};

export default SingleResult;
