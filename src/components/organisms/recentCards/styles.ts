import styled from "styled-components";
import { point } from "../../../breakpoints";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  overflow: hidden;
  width: 100%;
  @media only screen and (${point.tablet}) {
    width: calc(100vw - 515px);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 322px;
  height: 73px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  gap: 12px;
  cursor: pointer;
  box-shadow: 0px 8px 20px -2px rgb(43 37 63 / 10%);
`;

export const CompanyDetails = styled.div`
  margin-right: 10px;
  margin-left: 10px;
`;

export const CompanySymbol = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #14171a;
`;

export const CompanyName = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #657786;
`;

export const StatisticalDetails = styled.div`
  display: flex;
  gap: 3px;
  align-items: baseline;
`;

export const StatisticalValue = styled.p`
  color: ${({ isUp }: { isUp: boolean }) => (isUp ? "#79C300" : "#D64B45")};
  font-weight: 600;
  font-size: 13px;
  line-height: 125%;
`;

export const VetorButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const VetorButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
