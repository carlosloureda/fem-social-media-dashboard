import React, { useState } from "react";
import styled from "@emotion/styled";

import { colors } from "../../theme/variables";

const SChipButton = styled.button<any>`
  width: 4.8rem;
  height: 2.4rem;
  background: ${(props) => props.theme.colors.bgToggle}; //#aeb3cb;
  border-radius: 1.2rem;
  position: relative;
  border: none;
  /* transition: all 30s; */
  &:focus {
    outline: none;
  }

  .chip {
    position: absolute;
    /* background-color: #f1f3fa; */
    background-color: ${(props) => props.theme.colors.bgSecondary};
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    top: 3px;
    right: 3px;

    &.on {
      left: 3px;
      /* transform: translateX(-20px); */
    }
  }

  &:hover {
    cursor: pointer;

    /* FIXME: This is "variable" dependant instead of theme, but is was very tricky. */
    &.off {
      background: ${colors.dark.toggle};
    }
  }

  &:hover .chip {
    &.on {
      background-color: #333a55;
    }
  }

  /* TODO: fix mobile hover/active */
`;

const ChipButton = ({
  onClick,
  children,
  ...props
}: {
  onClick: any;
  children?: any;
  props?: any;
}) => {
  const [clicked, setClicked] = useState(false);

  const onClickHandler = () => {
    console.log("clicked");
    setClicked(!clicked);
    onClick();
  };

  return (
    <SChipButton
      onClick={onClickHandler}
      {...props}
      className={`${clicked ? "on" : "off"}`}
    >
      <div className={`chip ${clicked ? "on" : "off"}`}></div>
      {children}
    </SChipButton>
  );
};

export default ChipButton;
