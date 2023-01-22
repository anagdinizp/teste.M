import styled from "styled-components";
import { point } from "../../breakpoints";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #f3f8f6;
  @media only screen and (${point.tablet}) {
    flex-direction: row;
    height: calc(100vh - 0px);
  }
`;