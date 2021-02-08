import React, { DetailedHTMLProps, MouseEvent } from "react";
import styled, { ThemedStyledProps } from "styled-components";
import { ThemeDict } from "../../common";
import { Theme } from "../../type";

const Overlay = styled.div<{ open?: Boolean; theme: Theme }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.open ? 1 : 0)};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: opacity 500ms;
  background-color: ${(props) => props.theme.backdropColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div<{ theme: Theme }>`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  padding: 0.5rem;
  border-radius: 5px;
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
const Button = styled.button<{ theme: Theme }>`
  padding: 0.5rem 0.75rem;
  border: none;
  background-color: inherit;
  color: ${(props) => props.theme.buttonTextColor};
  border-radius: 5px;
  outline: none;
  font-weight: 600;
  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.5rem;
  outline: none;
  border: none;
  background-color: inherit;
`;
const CloseIcon = styled.div<{ theme: Theme }>`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.color};
  opacity: 0.5;
  &:before,
  :after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 18px;
    width: 2px;
    background-color: ${(props) => props.theme.color};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover {
    opacity: 1;
  }
`;
function Popup(props: {
  children: React.ReactChild;
  open: Boolean;
  theme?: "light" | "dark";
  showCloseIcon?: Boolean;
  onOK?: Function;
  onCancel?: Function;
  onClose?: Function;
}) {
  const theme = ThemeDict[props.theme || "dark"];
  return (
    <div>
      <Overlay open={props.open} theme={theme}>
        <Content theme={theme}>
          {props.showCloseIcon && (
            <CloseButton theme={theme} onClick={props.onClose as any}>
              <CloseIcon theme={theme}></CloseIcon>
            </CloseButton>
          )}
          <div>{props.children}</div>
          <ButtonGroup>
            {props.onOK && (
              <Button theme={theme} onClick={props.onOK as any}>
                OK
              </Button>
            )}
            {props.onCancel && (
              <Button theme={theme} onClick={props.onCancel as any}>
                CANCEL
              </Button>
            )}
          </ButtonGroup>
        </Content>
      </Overlay>
    </div>
  );
}

export default Popup;
