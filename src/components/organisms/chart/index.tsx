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
import { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip as TooltipChart,
} from "recharts";
import { getData } from "../../../redux/reducers/dataReducer";
import { IChart } from "../dashboard";
import ChartDownIcon from "../../atoms/icons/graphicDownIcon";
import ChartUpIcon from "../../atoms/icons/graphicUpIcon";
import FavButton from "../../molecules/buttons/favButton";
import Tooltip from "../../molecules/tooltip";

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

  const CustomizedDot = ({
    cx,
    cy,
    payload,
  }: {
    cx?: number;
    cy?: number;
    payload?: any;
  }) => (
    <Tooltip title={`$${payload.uv}`}>
      <circle
        cx={cx}
        cy={cy}
        r={8}
        stroke="#0047BB"
        strokeWidth={2}
        fill="transparent"
      />
    </Tooltip>
  );

  return (
    <ChartContainer>
      <CompanyInfoContainer>
        <InfoBox>
          <FavButton quote={data.currentSearch} />
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
                <stop offset="0" stopColor="#0047BB" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#0047BB" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis
              type="number"
              tickCount={5}
              domain={[rangeValues.minValue - 1, rangeValues.maxValue + 1]}
              interval="preserveEnd"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tickFormatter={(value: number) => `$${value}`}
            />
            <TooltipChart contentStyle={{ display: "none" }} />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#0047BB"
              fillOpacity={1}
              fill="url(#colorUv)"
              dot={{ stroke: "#0047BB", strokeWidth: 1, fill: "#0047BB" }}
              activeDot={<CustomizedDot />}
            />
          </AreaChart>
        </ChartDataContainer>
      )}
    </ChartContainer>
  );
}