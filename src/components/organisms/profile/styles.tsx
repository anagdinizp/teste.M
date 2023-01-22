import styled from "styled-components";
import { point } from "../../../breakpoints";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: auto;
  padding: 20px;
  @media only screen and (${point.tablet}) {
    min-width: 360px;
    width: 360px;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 13px;
  padding-left: 4px;
  height: 40px;
  border: 1px solid rgba(0, 71, 187, 0.2);
  border-radius: 120px;
  margin-bottom: 20px;
`;

export const UserName = styled.h2`
  color: #0047bb;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.005em;
`;

export const SubtitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FavCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;