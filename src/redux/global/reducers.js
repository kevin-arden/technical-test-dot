import { SET_PROVINCE } from "./types";

const initialState = {
  dataState: {
    isLoading: false,
    province: [],
    city: [],
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROVINCE: {
      return {
        ...state,
        dataState: {
          ...state.dataState,
          [action.payload.params.name]: action.payload.params.val,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
