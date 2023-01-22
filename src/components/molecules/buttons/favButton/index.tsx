import { useDispatch } from "react-redux";
import { updateFavList } from "../../../../redux/reducers/dataReducer";
import FilledStarIcon from "../../../atoms/icons/filledStarIcon";
import UnfilledStarIcon from "../../../atoms/icons/unfilledStarIcon";
import { ICard } from "../../../organisms/dashboard";
import { FavoriteButton } from "./styles";

export default function FavButton({ quote }: { quote: ICard }) {
  const dispatch = useDispatch();
  return (
    <FavoriteButton onClick={() => dispatch(updateFavList({ quote }))}>
      {quote.isFav ? <FilledStarIcon /> : <UnfilledStarIcon />}
    </FavoriteButton>
  );
}
