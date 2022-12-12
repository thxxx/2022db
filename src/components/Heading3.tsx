import styled from "@emotion/styled";
import React, { ReactNode } from "react";

const Heading3 = ({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) => {
  return <Title>{children}</Title>;
};

export default Heading3;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 8px 0px;
  margin-top: 20px;
`;
