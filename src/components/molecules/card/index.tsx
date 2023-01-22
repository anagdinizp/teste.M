import { useDispatch } from "react-redux";
import { getCompanyInfo } from "../../../services";
import ChartDownIcon from "../../atoms/icons/graphicDownIcon";
import ChartUpIcon from "../../atoms/icons/graphicUpIcon";
import AdobeLogo from "../../atoms/logos/adobeLogo";
import AmazonLogo from "../../atoms/logos/amazonLogo";
import AppleLogo from "../../atoms/logos/appleLogo";
import FacebookLogo from "../../atoms/logos/facebookLogo";
import MicrosoftLogo from "../../atoms/logos/microsoftLogo";
import StarbucksLogo from "../../atoms/logos/starbucksLogo";
import TwitterLogo from "../../atoms/logos/twitterLogo";
import { ICard } from "../../organisms/dashboard";
import { CardContainer, CompanyDetails, CompanySymbol, CompanyName, StatisticalDetails, StatisticalValue } from "../../organisms/recentCards/styles";
import FavButton from "../buttons/favButton";
import TrashButton from "../buttons/trashButton";
import { CardBox, InfoBox } from "./styles";

export default function Card({
  quote,
  isRecent,
}: {
  quote: ICard;
  isRecent?: boolean;
}) {
  const dispatch = useDispatch();
  return (
    <CardBox
    >
      <CardContainer key={quote.symbol}>
        {isRecent && <FavButton quote={quote} />}
        <InfoBox
          onClick={() => getCompanyInfo(quote.symbol, dispatch)}
        >
          {quote.symbol === "TWTR" && <TwitterLogo />}
          {quote.symbol === "AMZN" && <AmazonLogo />}
          {quote.symbol === "SBUX" && <StarbucksLogo />}
          {quote.symbol === "AAPL" && <AppleLogo />}
          {quote.symbol === "FB" && <FacebookLogo />}
          {quote.symbol === "ADBE" && <AdobeLogo />}
          {quote.symbol === "MSFT" && <MicrosoftLogo />}
          <CompanyDetails>
            <CompanySymbol>{quote.symbol}</CompanySymbol>
            <CompanyName>{quote.companyName}</CompanyName>
          </CompanyDetails>
          <StatisticalDetails>
            {Boolean(quote.percentageRange) ? (
              <>
                <StatisticalValue isUp={quote.percentageRange > 0}>
                  {quote.percentageRange > 0 && "+"}
                  {quote.percentageRange.toFixed(2)}%
                </StatisticalValue>
                {quote.percentageRange > 0 ? (
                  <ChartUpIcon />
                ) : (
                  <ChartDownIcon />
                )}
              </>
            ) : (
              `$${quote.latestPrice}`
            )}
          </StatisticalDetails>
        </InfoBox>
      </CardContainer>
      {!isRecent && <TrashButton quote={quote} />}
    </CardBox>
  );
}
