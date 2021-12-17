import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import { fetchProvinsi } from "../redux/actions/action";
import { getDataProvince } from "../redux/global/actions";
import OptionList from "../components/OptionList";

const Homepage = () => {
  const dataProvince = useSelector((state) => state.global.dataState.province);
  const dispatch = useDispatch();

  const [cityOriginSelect, setCityOriginSelect] = useState();
  const [provinceOrigin, setProvinceOrigin] = useState(null);
  const [cityOriginId, setCityOriginId] = useState(null);

  const [cityDestinationSelect, setCityDestinationSelect] = useState();
  const [provinceDestination, setProvinceDestination] = useState(null);
  const [cityDestinationId, setCityDestinationId] = useState(null);

  const [weight, setWeight] = useState(null);
  const [kurir, setKurir] = useState(null);
  const [ongkir, setOngkir] = useState(null);

  const fetchKota = async (id, dataSet) => {
    try {
      const responseCity = await axios.get(
        `http://localhost:5000/api/city/${id}`
      );
      dataSet(responseCity.data.data.rajaongkir.results);
    } catch (err) {
      console.log(err);
    }
  };

  const cekOngkir = async (origin, destination, weight, courier) => {
    try {
      const hasilOngkir = await axios.get(
        `http://localhost:5000/api/ongkir/${origin}/${destination}/${weight}/${courier}`
      );
      setOngkir(hasilOngkir.data.data.rajaongkir.results[0].costs);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setWeight(e.target.value);
  };

  useEffect(() => {
    function getData() {
      dispatch(getDataProvince());
    }
    getData();
  }, []);

  useEffect(() => {
    fetchKota(provinceOrigin, setCityOriginSelect);
  }, [provinceOrigin]);

  useEffect(() => {
    fetchKota(provinceDestination, setCityDestinationSelect);
  }, [provinceDestination]);

  return (
    <div>
      <Container>
        <h1>Cek Ongkir</h1>
        <Form>
          <Row className="mt-3">
            <Col>
              <Form.Label>Pilih Provinsi Asal</Form.Label>
              <OptionList
                type="province"
                dataArray={dataProvince}
                setValue={setProvinceOrigin}
                value={provinceOrigin}
              />
              <Form.Label className="mt-3">Pilih Kota Asal</Form.Label>
              <OptionList
                type="city"
                dataArray={cityOriginSelect}
                setValue={setCityOriginId}
                value={cityOriginId}
              />
            </Col>
            <Col>
              <Form.Label>Pilih Provinsi Tujuan</Form.Label>
              <OptionList
                type="province"
                dataArray={dataProvince}
                setValue={setProvinceDestination}
                value={provinceDestination}
              />
              <Form.Label className="mt-3">Pilih Kota Tujuan</Form.Label>
              <OptionList
                type="city"
                dataArray={cityDestinationSelect}
                setValue={setCityDestinationId}
                value={cityDestinationId}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className="mt-3">Pilih Kurir</Form.Label>
              <OptionList type="kurir" setValue={setKurir} value={kurir} />
              <Form.Label className="mt-3">Berat Kiriman</Form.Label>
              <Form.Control
                onChange={handleChange}
                size="lg"
                type="text"
                placeholder="Berat"
              />
              <Button
                onClick={() =>
                  cekOngkir(cityOriginId, cityDestinationId, weight, kurir)
                }
                className="mt-3"
                variant="primary"
              >
                Input
              </Button>
            </Col>
          </Row>
        </Form>
        <Row className="mt-3">
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Description</th>
                  <th>Cost Per Kg</th>
                  <th>Cost With Weight</th>
                  <th>Estimate</th>
                </tr>
              </thead>
              <tbody>
                {ongkir
                  ? ongkir.map((item) => (
                      <tr>
                        <td>{item.service}</td>
                        <td>{item.description}</td>
                        <td>{item.cost[0].value}</td>
                        <td>{item.cost[0].value * weight}</td>
                        <td>{item.cost[0].etd}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
