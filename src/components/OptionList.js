import React from "react";
import { Form } from "react-bootstrap";
const OptionList = (props) => {
  const { dataArray, setValue, value, type } = props;
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Form.Select value={value} size="lg" onChange={(e) => handleChange(e)}>
      <option>Silahkan Pilih</option>
      {dataArray ? (
        dataArray.map((region, index) => {
          if (type === "province") {
            return (
              <option value={region.province_id}>{region.province}</option>
            );
          } else if (type === "city") {
            return (
              <option value={region.city_id}>
                {region.city_name + " - " + region.postal_code}
              </option>
            );
          }
        })
      ) : (
        <>
          <option value="jne">JNE</option>
          <option value="pos">POS Indonesia</option>
          <option value="tiki">Tiki</option>
        </>
      )}
    </Form.Select>
  );
};

export default OptionList;
