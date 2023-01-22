import { useSelector } from "react-redux";
import { getData } from "../../../redux/reducers/dataReducer";
import Card from "../../molecules/card";
import { ICard } from "../dashboard";
import { FavCardsContainer } from "./styles";

export default function FavCards() {
  const data = useSelector(getData);
  return (
    <FavCardsContainer>
      {data.recentSearchList
        .filter((quote: ICard) => quote.isFav)
        .map((quote: ICard) => (
          <Card key={quote.symbol} quote={quote}/>
        ))}
    </FavCardsContainer>
  );
}
