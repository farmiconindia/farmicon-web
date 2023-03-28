import axios from "axios";
import React, { useRef, useState } from "react";
import { Line } from "react-chartjs-2";
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
      text: "Chart.js Bar Chart",
    },
  },
};

const CropPrice = () => {
  const [stateNames, setStateName] = useState([]);
  const [commodityNames, setCommodityNames] = useState([]);
  const [chartData, setChartData] = useState([]);
  const selectedCommodityRef = useRef("");
  const selectedStateRef = useRef("");
  const chartRef = useRef(null);

  const getStates = async () => {
    try {
      const res = await axios.get("http://170.187.249.130:5000/get_data");
      console.log(res.data.message);
      const states = [...new Set(res.data.message.map((item) => item.state))];
      const commodities = [
        ...new Set(res.data.message.map((item) => item.commodity)),
      ];
      //console.log(states);
      setStateName(states);
      setCommodityNames(commodities);
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    getStates();
  }, []);

  const getPriceAndDate = async () => {
    try {
      const res = await axios.get(
        `http://170.187.249.130:5000/get_data?state=${selectedStateRef.current}&commodity=${selectedCommodityRef.current}`
      );
      console.log(res.data.message);
      const dates = res.data.message?.map((d) => d?.arrival_date);
      const prices = res.data.message?.map((d) => Number(d?.modal_price));
      console.log(dates);
      console.log(prices);

      const data = {
        labels: dates,
        datasets: [
          {
            label: "Dataset 1",
            data: prices,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      };
      setChartData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommodityChange = (event) => {
    selectedCommodityRef.current = event.target.value;
  };
  const handleStateChange = (event) => {
    selectedStateRef.current = event.target.value;
  };

  return (
    <div className="container">
      <h1>Crop Price History</h1>
      <div className="selects">
        <select onChange={handleStateChange} name="" id="">
          <option value="">SELECT STATE</option>
          {stateNames.map((state, i) => {
            return (
              <option key={i} value={state}>
                {state}
              </option>
            );
          })}
        </select>
        <select onChange={handleCommodityChange} name="" id="">
          <option value="">SELECT COMMODITY</option>
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
            console.log(selectedCommodityRef.current);
            console.log(selectedStateRef.current);
            getPriceAndDate();
          }}
        >
          Show
        </button>
      </div>
      <div onClick={console.log(chartData)}>
        {chartData.length !== 0 && <Bar options={options} data={chartData} />}
      </div>
    </div>
  );
};

export default CropPrice;
