import React from 'react'
import {Pie} from "react-chartjs-2"
// eslint-disable-next-line
import {Chart as Chartjs} from "chart.js/auto"

export const PieChart = ({chartData}) => {
  const chartOptions = {
    
    elements: {
      arc: {
        borderWidth: 1,
        borderColor: "#000000"
      }
    }
  };
  
  return <Pie data={chartData} options={chartOptions}/>
}

export default PieChart