import styled from "styled-components";
import { point } from "../../../breakpoints";

export const SidebarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  height: 75px;
  min-height: 75px;
  width: auto;
  padding-left: 16px;
  @media only screen and (${point.tablet}) {
    padding-left: 0;
    display: block;
    width: 75px;
    height: 100%;
    min-width: 75px;
  }
`;

export const SidebarItems = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  @media only screen and (${point.tablet}) {
    height: auto;
    flex-direction: column;
  }
`;

export const MonetusContainer = styled.div`
  align-items: center;
  cursor: pointer;
  @media only screen and (${point.tablet}) {
    margin-top: 1rem;
  }
`;

export const HomeContainer = styled.div`
  margin-left: 2rem;
  border-bottom: 4px solid #f06400;
  height: 100%;
  align-items: center;
  display: flex;
  @media only screen and (${point.tablet}) {
    border-bottom: 0px solid #f06400;
    margin-left: 0rem;
    margin-top: 2rem;
    cursor: pointer;
    justify-content: center;
    width: 100%;
    border-left: 4px solid #f06400;
  }
`;
