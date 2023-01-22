import styled from "styled-components";

export const ChartContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(222, 222, 231, 0.4);
  border-radius: 8px;
  padding: 25px 20px;
  gap: 10px;
`;

export const CompanyInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CompanyDetailsContainer = styled.div`
  margin-right: 10px;
  margin-left: 8px;
`;

export const StatisticsInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: flex-end;
`;

export const ActionClose = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.0075em;
  color: #14171a;
  margin-bottom: 0;
`;

export const Value = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 125%;
  color: ${({isGreen} : { isGreen: boolean})  => ((isGreen) ? "#79C300" : "#D64B45")};
  margin-top: 0;
`;

export const ChartDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;