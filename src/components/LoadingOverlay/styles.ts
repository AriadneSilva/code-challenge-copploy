import styled from "styled-components";

export interface WrapperProps {
  fixed?: boolean;
  visible?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: ${({ fixed }) => (fixed ? "fixed" : "absolute")};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(255, 255, 255, 0.8);

  display: ${({ visible }) => (visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  z-index: 999;
`;

export const Spinner = styled.svg`
  position: absolute;
  margin: auto;
  background: none;
  display: block;
  shape-rendering: auto;
`;
