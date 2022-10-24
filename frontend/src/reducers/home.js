import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  SEARCH_TERM_CHANGED,
} from "../constants/actionTypes";

const defaultState = {
  searchTerm: "",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        tags: action.payload[0].tags,
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case SEARCH_TERM_CHANGED:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    default:
      return state;
  }
};

export default reducer;
