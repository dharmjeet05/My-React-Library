import { LOCALES } from "../../i18n/locales";
import { FETCH_DATA, SET_LANG } from "../action-types";

const initialState = {
  mainData: {},
  lang: LOCALES.ENGLISH,
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        mainData: action.payload,
      };

    case SET_LANG:
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
};

export default main;
