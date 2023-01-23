import { setCompanyInfo, setIsLoading } from "../redux/reducers/dataReducer";

export async function getCompanyInfo(searchValue: string, dispatch: any) {
  dispatch(setIsLoading());
  const API_TOKEN = process.env.REACT_APP_SEARCH_PUBLISHABLE_TOKEN;
  const companyInfo = await fetch(
    `https://cloud.iexapis.com/beta/stock/${searchValue}/quote/${searchValue}?token=${API_TOKEN}&includeToday=true`
  ).then((res) => res.json());

  const ChartsData = await fetch(
    `https://cloud.iexapis.com/beta/stock/${searchValue}/chart/15d?token=${API_TOKEN}&includeToday=true`
  ).then((res) => res.json());

  dispatch(setCompanyInfo({ companyInfo, ChartsData }));
  dispatch(setIsLoading());
}