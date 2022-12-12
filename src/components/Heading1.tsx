import styled from "@emotion/styled";
import React, { ReactNode } from "react";

const Heading1 = ({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) => {
  return <Title>{children}</Title>;
};

export default Heading1;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin: 8px 0px;
  margin-top: 20px;
`;
