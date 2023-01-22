import {
  CompanyName,
  CompanySymbol,
  StatisticalDetails,
} from "../recentCards/styles";
import {
  ChartContainer,
  CompanyInfoContainer,
  StatisticsInfo,
  Value,
  InfoBox,
  CompanyDetailsContainer,
  ChartDataContainer,
  ActionClose,
} from "./styles";
import Tooltip from "@mui/material/Tooltip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { AreaChart, XAxis, YAxis, CartesianGrid, Area } from "recharts";
import { getData } from "../../../redux/reducers/dataReducer";
import { IChart } from "../dashboard";
import ChartDownIcon from "../../atoms/icons/graphicDownIcon";
import ChartUpIcon from "../../atoms/icons/graphicUpIcon";
import FavButton from "../../molecules/buttons/favButton";

export default function Chart() {
  const data = useSelector(getData);
  const [rangeValues, setRangeValues] = useState<{
    minValue: number;
    maxValue: number;
  }>({ minValue: 0, maxValue: 0 });

  const getMinValue = useCallback(
    () =>
      data.chartPoints.reduce(
        (min: number, current: IChart) =>
          min < Number(current.uv) ? min : Number(current.uv),
        Number(data.chartPoints[0]?.uv)
      ),
    [data.chartPoints]
  );

  const getMaxValue = useCallback(
    () =>
      data.chartPoints.reduce(
        (max: number, current: IChart) =>
          max > Number(current.uv) ? max : Number(current.uv),
        Number(data.chartPoints[0]?.uv)
      ),
    [data.chartPoints]
  );

  useEffect(() => {
    setRangeValues({ minValue: getMinValue(), maxValue: getMaxValue() });
  }, [
    data.currentSearch.symbol,
    data.recentSearchList,
    getMaxValue,
    getMinValue,
  ]);

  const defaultTheme = createTheme();
  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "14px",
            color: "#FFFFFF",
            backgroundColor: "#0047BB",
            background: "#0047BB",
            arrow: "#0047BB",
            fontWeight: "400",
            textAlign: "center",
          },
        },
      },
    },
  });
  return (
    <ChartContainer>
      <CompanyInfoContainer>
        <InfoBox>
          <ThemeProvider theme={defaultTheme}>
            <ThemeProvider theme={theme}>
              <Tooltip title="Adicionar aos favoritos" color="#0047BB" className="TooltipArrow" arrow>
                <button style={{ border: "none", background: "transparent" }}>
                  <FavButton quote={data.currentSearch} />
                </button>
              </Tooltip>
            </ThemeProvider>
          </ThemeProvider>
          <CompanyDetailsContainer>
            <CompanySymbol>{data.currentSearch.symbol}</CompanySymbol>
            <CompanyName>{data.currentSearch.companyName}</CompanyName>
          </CompanyDetailsContainer>
        </InfoBox>
        <StatisticsInfo>
          <StatisticalDetails>
            {data.currentSearch.diffRange > 0 ? (
              <ChartUpIcon />
            ) : (
              <ChartDownIcon />
            )}
            <ActionClose>${data.currentSearch.latestPrice}</ActionClose>
          </StatisticalDetails>
          <Value isGreen={data.currentSearch.diffRange > 0}>
            ${data.currentSearch.diffRange > 0 && "+"}
            {data.currentSearch.diffRange.toFixed(2)} (%
            {data.currentSearch.diffRange > 0 && "+"}
            {data.currentSearch.percentageRange.toFixed(2)})
          </Value>
        </StatisticsInfo>
      </CompanyInfoContainer>
      {Boolean(data.currentSearch.diffRange) && (
        <ChartDataContainer>
          <AreaChart
            width={window.innerWidth < 768 ? 320 : 600}
            height={200}
            data={data.chartPoints}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            style={{
              fontSize: "11px",
              color: "#657786",
              fontWeight: "400",
              lineHeight: "12.1px",
              cursor: "pointer",
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0047BB" stopOpacity={0.8} />
                <stop offset="46%" stopColor="#0047BB" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis
              type="number"
              tickCount={5}
              domain={[rangeValues.minValue - 1, rangeValues.maxValue + 1]}
              interval="preserveEnd"
            />
            <CartesianGrid strokeDasharray="3 3" style={{ color: "#F5F8FA" }} />
            {/* <Tooltip /> */}
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#0047BB"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ChartDataContainer>
      )}
    </ChartContainer>
  );
}
