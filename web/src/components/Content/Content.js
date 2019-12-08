import React from "react";
import { StyledContentWrapper } from "./styles";

const Content = ({ children }) => <StyledContentWrapper>{children}</StyledContentWrapper>;

Content.defaultProps = {
  children: ``
};

export default Content;
