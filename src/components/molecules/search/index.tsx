import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/reducers/dataReducer";
import { getCompanyInfo } from "../../../services";
import LoadingIcon from "../../atoms/icons/loadingIcon";
import SearchIcon from "../../atoms/icons/searchIcon";
import { SearchContainer, SearchInput, SearchButton } from "./styles";


export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const data = useSelector(getData);

  return (
    <SearchContainer>
      <SearchInput
        placeholder="Buscar empresa"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SearchButton
        onClick={() => {
          getCompanyInfo(searchValue, dispatch);
          setSearchValue("");
        }}
      >
        {data.isLoading ? <LoadingIcon /> : <SearchIcon />}
      </SearchButton>
    </SearchContainer>
  );
}
