import { SET_PROVINCE } from "./types";
import axios from "axios";

export const dataProvince = (params) => ({
  type: SET_PROVINCE,
  payload: params,
});

export const getDataProvince = () => async (dispatch) => {
  try {
    await axios
      .get("http://localhost:5000/api/province")
      .then((response) => {
        if (response.status === 200) {
          dispatch(
            dataProvince({
              params: {
                name: "province",
                val: response.data.data.rajaongkir.results,
              },
            })
          );
        }
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(dataProvince({ params: { name: "province", val: [] } }));
      });
  } catch (error) {
    console.log(error.message);
    dispatch(dataProvince({ params: { name: "province", val: [] } }));
  }
};
