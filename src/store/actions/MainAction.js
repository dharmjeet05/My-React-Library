import { FETCH_DATA, SET_LANG } from "../action-types";

const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};

const setLang = (lang) => {
  return {
    type: SET_LANG,
    payload: lang,
  };
};

export default {
  setLang,
  fetchData,
};
