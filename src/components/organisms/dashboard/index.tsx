import { useRef } from "react";
import DashboardIcon from "../../atoms/icons/dashboardIcon";
import StatsIcon from "../../atoms/icons/statsIcon";
import VetorLeftIcon from "../../atoms/icons/vetorLeftIcon";
import VetorRightIcon from "../../atoms/icons/vetorRightIcon";
import Search from "../../molecules/search";
import Chart from "../chart";
import RecentCards from "../recentCards";
import { VetorButtonContainer, VetorButton } from "../recentCards/styles";
import { DashboardContainer, TitleBox, DashboardIconContainer, Title, SubtitleContainer, SubContainer, Subtitle } from "./styles";

export interface ICard {
  latestPrice: number;
  symbol: string;
  companyName: string;
  isFav: boolean;
  diffRange: number;
  percentageRange: number;
}

export interface IChart {
  name: string;
  uv: string;
}

export default function Dashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (scrollOffset: number) => {
    if (ref.current) ref.current.scrollLeft += scrollOffset;
  };

  return (
    <DashboardContainer>
      <TitleBox>
        <DashboardIconContainer>
          <DashboardIcon />
        </DashboardIconContainer>
        <Title>Dashboard</Title>
      </TitleBox>
      <Search />
      <Chart />
      <SubtitleContainer>
        <SubContainer>
          <StatsIcon />
          <Subtitle>Empresas recentes</Subtitle>
        </SubContainer>
        <VetorButtonContainer>
          <VetorButton onClick={() => scroll(-200)}>
            <VetorLeftIcon />
          </VetorButton>
          <VetorButton onClick={() => scroll(200)}>
            <VetorRightIcon />
          </VetorButton>
        </VetorButtonContainer>
      </SubtitleContainer>
      <RecentCards buttonRef={ref} />
    </DashboardContainer>
  );
}
