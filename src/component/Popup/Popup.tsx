import React, { DetailedHTMLProps } from "react";
import styled, { ThemedStyledProps } from "styled-components";
import { ThemeDict } from "../../common";
import { Theme } from "../../type";

const Overlay = styled.div<{ open?: Boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.open ? 1 : 0)};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: opacity 500ms;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div<{ theme: Theme }>`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  padding: 1rem;
  border-radius: 5px;
  width: 30%;
  position: relative;
  margin: 0 auto;
  transition: all 5s ease-in-out;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 0.5rem;
`;
const Button = styled.button`
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 5px;
  outline: none;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.5rem;
  outline: none;
  border: none;
  background-color: #fff;
`;
const CloseIcon = styled.div`
  width: 20px;
  height: 20px;
  &:before,
  :after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 18px;
    width: 2px;
    background-color: #cecece;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
function Popup(props: {
  children: React.ReactChild;
  open: Boolean;
  theme?: string;
}) {
  return (
    <div>
      <Overlay open={props.open}>
        <Content theme={ThemeDict[props.theme || "light"]}>
          <CloseButton>
            <CloseIcon></CloseIcon>
          </CloseButton>
          <div
            style={{
              maxHeight: "90vh",
              overflow: "auto",
              margin: "0.75rem 0 0.5rem 0",
            }}
          >
            {props.children}
          </div>
          <ButtonGroup>
            <Button>OK</Button>
            <Button>Cancel</Button>
          </ButtonGroup>
        </Content>
      </Overlay>
    </div>
  );
}

export default Popup;
