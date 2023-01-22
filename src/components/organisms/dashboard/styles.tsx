import styled from "styled-components";
import { point } from "../../../breakpoints";

export const DashboardContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 24px 0px 0px 0px;
  @media only screen and (${point.tablet}) {
    width: 100%;
    height: 100%;
  }
`;

export const DashboardIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  margin-left: 4px;
`;

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Subtitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  margin-left: 4px;
`;

export const SubContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;
