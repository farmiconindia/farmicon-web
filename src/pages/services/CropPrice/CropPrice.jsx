import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./cropPrice.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Price v/s Date",
    },
  },
  maxBarThickness: 30, // Change this value to adjust the width of the bars
};

const CropPrice = ({ changeLang }) => {
  const [stateNames, setStateName] = useState([]);
  const [commodityNames, setCommodityNames] = useState([]);
  const [districtNames, setDistrictNames] = useState([]);
  const [marketNames, setMarketNames] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [isChart, setIsChart] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isStateLoading, setIsStateLoading] = useState(false);
  const selectedCommodityRef = useRef("");
  const selectedStateRef = useRef("");
  const selectedDistrictRef = useRef("");
  const selectedMarketRef = useRef("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const getStates = async () => {
    setIsStateLoading(true);
    try {
      const res = await axios.get(
        "https://jiqj9h6n9f.execute-api.ap-south-1.amazonaws.com/prod/api/get_data"
      );

      const states = [...new Set(res.data.message.map((item) => item.state))];
       

      setStateName(states);
      setIsStateLoading(false);
    } catch (error) {
      console.log(error);
      setIsStateLoading(false);
    }
  };

  useEffect(() => {
    getStates();
    // console.log(stateNames)
  }, []);

  const getPriceAndDate = async () => {
    if (selectedCommodityRef.current === "" || selectedStateRef.current === "")
      return;
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://jiqj9h6n9f.execute-api.ap-south-1.amazonaws.com/prod/api/get_data?state=${selectedStateRef.current}&&district=${selectedDistrictRef.current}&market=${selectedMarketRef.current}&commodity=${selectedCommodityRef.current}`
      );
      const dates = res.data.message?.map((d) => d?.arrival_date);
      const prices = res.data.message?.map((d) => Number(d?.modal_price));
      setIsChart(dates.length > 0 && prices.length > 0);
        console.log(res)
      const data = {
        labels: dates,
        datasets: [
          {
            label: "Price (in Rupees)",
            data: prices,
            backgroundColor: "#023731",
          },
        ],
      };
      setChartData(data);
      setIsLoading(false);
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommodityChange = (event) => {
    selectedCommodityRef.current = event.target.value;
  };
  const handleStateChange = async (event) => {
    // set next values zero
    setDistrictNames([]);
    setMarketNames([]);
    setCommodityNames([]);
    selectedStateRef.current = event.target.value;
    // set values for state
    const res = await axios.get(
      `https://jiqj9h6n9f.execute-api.ap-south-1.amazonaws.com/prod/api/get_data?state=${selectedStateRef.current}`
    );
    const districts = [
      ...new Set(res.data.message.map((item) => item.district)),
    ];
    setDistrictNames(districts);
  };
  const handleDistrictChange = async (event) => {
    // set next values zero
    setMarketNames([]);
    setCommodityNames([]);
    selectedDistrictRef.current = event.target.value;
    // set values for district
    const res = await axios.get(
      `https://jiqj9h6n9f.execute-api.ap-south-1.amazonaws.com/prod/api/get_data?state=${selectedStateRef.current}&&district=${selectedDistrictRef.current}`
    );
    const markets = [...new Set(res.data.message.map((item) => item.market))];
    setMarketNames(markets);
  };
  const handleMarketChange = async (event) => {
    // set next values zero
    setCommodityNames([]);
    selectedMarketRef.current = event.target.value;
    // set values for market
    const res = await axios.get(
      `https://jiqj9h6n9f.execute-api.ap-south-1.amazonaws.com/prod/api/get_data?state=${selectedStateRef.current}&district=${selectedDistrictRef.current}&market=${selectedMarketRef.current}`
    );
    const commodities = [
      ...new Set(res.data.message.map((item) => item.commodity)),
    ];
    if (commodities.length > 0) {
      setCommodityNames(commodities);
    } else {
      setCommodityNames(["No data found"]);
    }
  };

  return (
    <div className="crop-container">
      <h1> {!changeLang ? "Crop Price History" : "फसल मूल्य इतिहास"}</h1>
      {isStateLoading && (
        <div className="loading">
          <span>Loading...</span>
        </div>
      )}
      {!isStateLoading && (
        <div className="selects">
          <select onChange={handleStateChange} name="" id="">
            <option value="">
              {!changeLang ? "SELECT STATE" : "राज्य चुनें"}
            </option>
            {stateNames.map((state, i) => {
              return (
                <option key={i} value={state}>
                  {state}
                </option>
              );
            })}
          </select>
          <select onChange={handleDistrictChange} name="" id="">
            <option value="">
              {!changeLang ? "SELECT DISTRICT" : "जिले का चयन करें"}
            </option>
            {districtNames.map((district, i) => {
              return (
                <option key={i} value={district}>
                  {district}
                </option>
              );
            })}
          </select>
          <select onChange={handleMarketChange} name="" id="">
            <option value="">
              {!changeLang ? "SELECT MANDI" : "मंडी का चयन करें"}
            </option>
            {marketNames.map((market, i) => {
              return (
                <option key={i} value={market}>
                  {market}
                </option>
              );
            })}
          </select>
          <select onChange={handleCommodityChange} name="" id="">
            <option value="">
              {!changeLang ? "SELECT COMMODITY" : "कमोडिटी का चयन करें"}
            </option>
            {commodityNames.map((state, i) => {
              return (
                <option key={i} value={state}>
                  {state}
                </option>
              );
            })}
          </select>
          <button
            type="button"
            onClick={() => {
              getPriceAndDate();
            }}
          >
            {!changeLang ? "Show" : "दिखाना"}
          </button>
        </div>
      )}
      {isLoading && (
        <div style={{ textAlign: "center", marginTop: "16vh" }}>Loading...</div>
      )}
      {!isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "6vh",
          }}
        >
          {isChart === false && (
            <span style={{ textAlign: "center", marginTop: "10vh" }}>
              No Data Found
            </span>
          )}
          {isChart && <Bar options={options} data={chartData} />}
        </div>
      )}
    </div>
  );
};

export default CropPrice;
