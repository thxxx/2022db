import styled from "@emotion/styled";
import React, { ReactNode } from "react";

const Heading2 = ({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) => {
  return <Title>{children}</Title>;
};

export default Heading2;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin: 8px 0px;
  margin-top: 20px;
`;
