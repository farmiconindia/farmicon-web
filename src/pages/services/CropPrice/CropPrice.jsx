import React, { useState } from 'react';
import FilterForm from './FilterForm';
import DataTable from './DataTable';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import CropPriceChart from './CropPriceChart';

const CropPrice = () => {
  const [data, setData] = useState([]);
  const [noDataMessage, setNoDataMessage] = useState('');
  const [historicalData, setHistoricalData] = useState([]);
  const [compareMarketData, setCompareMarketData] = useState([]);
  const [chartType, setChartType] = useState('bar');

  const handleFilterChange = async (filters) => {
    const { state, district, market, compareMarket, commodity, dateFrom, dateTo } = filters;

    let priceUrl = `http://172.212.230.201:5000/recent_crop_prices?state=${state}&district=${district}&market=${market}&commodity=${commodity}`;

    if (dateFrom && dateTo) {
      priceUrl = `http://172.212.230.201:5000/range_crop_prices?state=${state}&district=${district}&market=${market}&commodity=${commodity}&date_from=${dateFrom}&date_to=${dateTo}`;
    }

    try {
      const response = await axios.get(priceUrl);
      const items = response.data;

      if (items.length === 0) {
        setData([]);
        setNoDataMessage('No Data Found');
      } else {
        const sortedItems = items.sort((a, b) => new Date(b.arrival_date) - new Date(a.arrival_date));
        setData(sortedItems);
        // setData(items);
        setNoDataMessage('');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setData([]);
      setNoDataMessage('Error fetching data');
    }

    let trendUrl = `http://172.212.230.201:5000/price_trends?state=${state}&district=${district}&market=${market}&commodity=${commodity}`;
    
    if (dateFrom && dateTo) {
      trendUrl = `http://172.212.230.201:5000/price_trends?state=${state}&district=${district}&market=${market}&commodity=${commodity}&date_from=${dateFrom}&date_to=${dateTo}`;
    }
    
    try {
      const graphResponse = await axios.get(trendUrl);
      const historicalItems = graphResponse.data;

      if (historicalItems.length === 0) {
        setHistoricalData([]);
      } else {
        setHistoricalData(historicalItems);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setHistoricalData([]);
      setNoDataMessage('Error fetching data');
    }

    if (compareMarket) {
      let comparetrendUrl = `http://172.212.230.201:5000/price_trends?state=${state}&district=${district}&market=${compareMarket}&commodity=${commodity}`;

      if (dateFrom && dateTo) {
        comparetrendUrl = `http://172.212.230.201:5000/price_trends?state=${state}&district=${district}&market=${compareMarket}&commodity=${commodity}&date_from=${dateFrom}&date_to=${dateTo}`;
      }
      
      try {
        if(compareMarket === 'Nothing') {
          setCompareMarketData([]);
          return;
        }
        const comparegraphResponse = await axios.get(comparetrendUrl);
        const comparehistoricalItems = comparegraphResponse.data;
  
        if (comparehistoricalItems.length === 0) {
          setCompareMarketData([]);
        } else {
          setCompareMarketData(comparehistoricalItems);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setCompareMarketData([]);
        setNoDataMessage('Error fetching data');
      }
    }
  };

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  return (
    <div className="App">
      <h1>Crop Price History</h1>
      <FilterForm onFilterChange={handleFilterChange} />
      <DataTable data={data} noDataMessage={noDataMessage} />
      <div style={{ margin: '32px 96px 10px', display: 'flex', alignItems: 'center' }}>
        <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
          <Button
            variant={chartType === 'bar' ? 'contained' : 'outlined'}
            color={chartType === 'bar' ? 'success' : 'success'}
            onClick={() => handleChartTypeChange('bar')}
            sx={{
              minWidth: '150px',
              height: '45px',
              fontWeight: 'bold',
              borderColor: chartType === 'bar' ? 'success.main' : 'success.main',
              color: chartType === 'bar' ? 'white' : 'success.main',
              backgroundColor: chartType === 'bar' ? 'success.main' : 'transparent',
              '&:hover': {
                backgroundColor: 'success.main',
                color: 'white',
                borderColor: 'success.main',
              },
            }}
          >
            Bar Chart
          </Button>
          <Button
            variant={chartType === 'line' ? 'contained' : 'outlined'}
            color={chartType === 'line' ? 'primary' : 'primary'}
            onClick={() => handleChartTypeChange('line')}
            sx={{
              minWidth: '150px',
              height: '45px',
              fontWeight: 'bold',
              borderColor: chartType === 'line' ? 'primary.main' : 'primary.main',
              color: chartType === 'line' ? 'white' : 'primary.main',
              backgroundColor: chartType === 'line' ? 'primary.main' : 'transparent',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'white',
                borderColor: 'primary.main',
              },
            }}
          >
            Line Chart
          </Button>
        </Box>
      </div>
      <CropPriceChart 
        historicalData={historicalData} 
        compareMarketData={compareMarketData} 
        chartType={chartType} 
      />
    </div>
  );
};

export default CropPrice;
