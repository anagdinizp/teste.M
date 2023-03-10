import { Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateFavList } from "../../../../redux/reducers/dataReducer";
import TrashIcon from "../../../atoms/icons/trashIcon";
import { ICard } from "../../../organisms/dashboard";
import { TrashButtonContainer } from "./styles";

export default function TrashButton({ quote }: { quote: ICard }) {
  const dispatch = useDispatch();
  return (
    <Tooltip title="Deletar">
      <TrashButtonContainer onClick={() => dispatch(updateFavList({ quote }))}>
        <TrashIcon />
      </TrashButtonContainer>
    </Tooltip>
  );
}