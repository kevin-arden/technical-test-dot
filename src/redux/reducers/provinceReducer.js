import { ActionTypes } from "../action-types";

const initialState = {
  province: [
    {
      data: "asdasd",
    },
  ],
};

const provinceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PROVINCE:
      return {
        ...state,
        province: payload,
      };

    default:
      return state;
  }
};

export default provinceReducer;
