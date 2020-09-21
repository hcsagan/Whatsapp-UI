import styled, { css } from "styled-components/native";

export default styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 17.5px;

  ${(props) =>
    props.medium &&
    css`
      width: 60px;
      height: 60px;
      border-radius: 30px;
    `}
  ${(props) =>
    props.large &&
    css`
      width: 120px;
      height: 120px;
      border-radius: 60px;
    `}
`;
