import React from "react";
import { Wrapper, Spinner, WrapperProps } from "./styles";

export type LoadingOverlayProps = WrapperProps & {
  children?: React.ReactNode;
};

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  children,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <Spinner
        xmlns="http://www.w3.org/2000/svg"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <g key={index} transform={`rotate(${index * 30} 50 50)`}>
            <rect
              x="47"
              y="24"
              rx="3"
              ry="6"
              width="6"
              height="12"
              fill="#000000"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin={`${-(11 - index) / 12}s`}
                repeatCount="indefinite"
              />
            </rect>
          </g>
        ))}
      </Spinner>

      {children}
    </Wrapper>
  );
};
