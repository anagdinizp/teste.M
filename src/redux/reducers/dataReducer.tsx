import { createSlice } from "@reduxjs/toolkit";
import { ICard, IChart } from "../../components/organisms/dashboard";

interface IData {
  currentSearch: ICard;
  recentSearchList: ICard[]; 
  chartPoints: IChart[]; 
  isLoading: boolean;
}
const initialState: IData = {
  currentSearch: {
    companyName: "", 
    latestPrice: 0, 
    symbol: "", 
    isFav: false, 
    diffRange: 0, 
    percentageRange: 0, 
  },
  recentSearchList: [],
  chartPoints: [],
  isLoading: false, 
};

export const dataReducer = createSlice({
  name: "data",
  initialState,
  reducers: {
    
    updateFavList: (state, action: { payload: { quote: ICard } }) => {
      const { quote } = action.payload;
      const newFavList = state.recentSearchList.map((action) =>
        action.symbol !== quote.symbol ? action : { ...action, isFav: !quote.isFav } 
      );

      if (state.currentSearch.symbol === quote.symbol)
        state.currentSearch = { ...quote, isFav: !quote.isFav };
      state.recentSearchList = newFavList;
    },
    setCompanyInfo(
      state,
      action: { payload: { companyInfo: any; ChartsData: any[] } }
    ) {
      const { companyInfo, ChartsData } = action.payload;

      const data = ChartsData.map((res: any) => ({
        name: res.date,
        uv: res.close,
      }));

      state.chartPoints = data;

      const diffRange = Number(data[data.length - 1]?.uv) - Number(data[0]?.uv);

      const percentageRange =
        (diffRange / Number(data[data.length - 1]?.uv)) * 100;
      
      const isFav =
        state.recentSearchList.find(
          (quote: ICard) => quote.symbol === companyInfo.symbol
        )?.isFav ?? false;
    
      const currentSearch: ICard = {
        latestPrice: companyInfo.latestPrice,
        companyName: companyInfo.companyName.split(" ")[0],
        symbol: companyInfo.symbol,
        isFav,
        diffRange: Boolean(diffRange) ? diffRange : 0,
        percentageRange: Boolean(percentageRange) ? percentageRange : 0,
      };

      state.recentSearchList = state.recentSearchList.some(
        (action) => action.symbol === companyInfo.symbol
      )
        ? state.recentSearchList
        : [currentSearch, ...state.recentSearchList];

      state.currentSearch = currentSearch;
    },
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { updateFavList, setCompanyInfo, setIsLoading } =
  dataReducer.actions;

export const getData = (data: any) => data;
export default dataReducer.reducer;