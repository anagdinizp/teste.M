import { createSlice } from "@reduxjs/toolkit";
import { ICard, IChart } from "../../components/organisms/dashboard";

interface IData {
  currentSearch: ICard;
  recentSearchList: ICard[];
  chartPoints: IChart[];
  isLoading: boolean;
}

// Estado inicial dos dados que vão ser recebidos
const initialState: IData = {
  currentSearch: {
    companyName: "", // Nome da empresa
    latestPrice: 0, // O valor mais atual da ação dessa empresa
    symbol: "", // Símbolo que representa o nome da empresa, por exemplo, AAPL para Apple
    isFav: false, // Booleano para verificar se é uma empresa favorita pelo usuário
    diffRange: 0, // O range é a diferença calculada do intervalo de tempo de um mês das ações da empresa, pegando o primeiro e o ultimo valor para definir, dependendo do resultado, se a ação da empresa está subindo ou descendo
    percentageRange: 0, // É o mesmo valor calculado pelo diffRange só que em porcentagem
  },
  recentSearchList: [], // Lista de empresas recentemente pesquisadas
  chartPoints: [], // Valores referentes a data e valor da ação que vão ser utilizados para formar o eixo x e y do gráfico
  isLoading: false, // Booleano para utilizar o loading durante o ato de pesquisar
};

export const dataReducer = createSlice({
  name: "data",
  initialState,
  reducers: {
    // Função que atualiza a lista de empresas favoritadas
    updateFavList: (state, action: { payload: { quote: ICard } }) => {
      const { quote } = action.payload;
      const newFavList = state.recentSearchList.map((fav) =>
        fav.symbol !== quote.symbol ? fav : { ...fav, isFav: !quote.isFav }
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