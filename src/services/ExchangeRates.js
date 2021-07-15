import axios from 'axios';
const apiUrl = 'https://api.coingecko.com/api/v3/exchange_rates';

export const getExchangeRates = () => {
    return axios.get(apiUrl)
    .then(res=>{
        return res;
    })
    .catch(err=>{
        console.log(err);
    })
  };