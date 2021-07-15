
import React, {useState} from 'react';
import {Button, Divider} from 'antd'
import PieChart from './PieChart';
import {getExchangeRates} from '../services/ExchangeRates'

const Main = () => {

    const [data, setData] = useState([]);
    const [ilsRate, setIlsRate] = useState({});
    const [show, setShow] = useState(false);

    
    const setTimerVisibility = () => 
    {
        setShow(true);
        const timeId = setTimeout(() => {
            // After 5 seconds set the show value to false
            setShow(false);
          }, 5000);
      
          return () => {
            clearTimeout(timeId);
        }  
    }

    const displayPieChart = () => {
        setData(
            [
                ['Currency', 'Rate'],
                ['Arge9ntine Peso', Math.random() * 100],
                ['Nigerian Naira', Math.random() * 100],
                ['South African Rand', Math.random() * 100],
            ]);
       
        setTimerVisibility();
    }

    const getILSRate = () => {
        getExchangeRates().then((res) => {       
            if (res?.status === 200) {                 
                console.log ('handleDiagramDisplayClick _ ILS:'  + res?.data?.rates?.ils)
                   setIlsRate(res?.data?.rates?.ils);
            }
        });
        
    }

    const handleDiagramDisplayClick = () => {
        console.log('handleDiagramDisplayClick start');
   
        displayPieChart();
        
        getILSRate();
        
    };

    return (      
        <div style={{marginTop: '20px'}}>
            <Button
                type="primary"
                onClick={handleDiagramDisplayClick}
            >
                Display Diagram
            </Button>
            <Divider orientation="left">{ilsRate.value ? (ilsRate.name + ": " + ilsRate.value) : ""}</Divider>
            {!show ? "" : <PieChart dataSource={data}></PieChart>}
        </div>
    );
};

export default Main;