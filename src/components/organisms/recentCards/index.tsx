import { useSelector } from "react-redux";
import { getData } from "../../../redux/reducers/dataReducer";
import Card from "../../molecules/card";
import { ICard } from "../dashboard";
import { CardsContainer } from "./styles";

export default function RecentCards({ buttonRef }: { buttonRef: any }) {
  const data = useSelector(getData);
  return (
    <CardsContainer ref={buttonRef}>
      {data.recentSearchList.map((quote: ICard) => (
        <Card isRecent key={quote.symbol} quote={quote} />
      ))}
    </CardsContainer>
  );
}
