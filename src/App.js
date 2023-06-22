import "./App.css";
import React, { useState } from "react";
import { PieChart } from "./Components/PieChart";
import { BarChart } from "./Components/BarChart";
import { BarChartInteg } from "./Components/BarChartInteg";
import { BarChartDNA } from "./Components/BarChartDNA";
import { dataPie } from "./DataPie.js";
import { dataBar } from "./DataBar.js";
import {dataBarInteg} from "./DataBarInteg.js"
import {dataBarDNA} from "./DataBarDNA.js"

function App() {
  const [ChartPieData, setChartPieData] = useState({
    labels: ["Homem", "Mulher"],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ["#F7464A", "#46BFBD"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"],
      },
    ],
  });

  const [ChartBarData, setChartBarData] = useState({
    labels: dataBar.map((data) => data.agePeople),

    datasets: [
      
      {
        
        data: dataBar.map((data) => data.quantidade),
        backgroundColor: dataBar.map((data) => data.backgroundColor),
        hoverBackgroundColor: ["#6B1169", "#5AD3D1", "yellow", "chartreuse"],
      }

      
      
    ],
  });
  const [ChartBarInteg, setChartBarInteg] = useState({

    labels: dataBarInteg.map((data) => data.label),

    datasets: [
      
      {
        
        data: dataBarInteg.map((data) => data.yes),
        backgroundColor: ["green"],
        // hoverBackgroundColor: ["green"],
      },
      {
        
        data: dataBarInteg.map((data) => data.not),
        backgroundColor: ["red"],
        // hoverBackgroundColor: ["red"],
      }
      
      
    ],
    
  });
  const [ChartBarDNA, setChartBarDNA] = useState({

    labels: dataBarDNA.map((data) => data.label),

    datasets: [
      
      {
        
        data: dataBarDNA.map((data) => data.yes),
        backgroundColor: ["green"],
        // hoverBackgroundColor: ["green"],
      },
      {
        
        data: dataBarDNA.map((data) => data.not),
        backgroundColor: ["red"],
        // hoverBackgroundColor: ["red"],
      }
      
      
    ],
    
  });
  console.log(dataBar.map((data) => data.agePeople))
  return (
    <div className="App">
      <div className="ChartStyle">
        <PieChart chartData={ChartPieData} />
      </div>
      <div className="ChartStyle" style={{ width: 1000, height: 200 }}>
        <BarChart chartData={ChartBarData} />
      </div>
      <div className="ChartStyle" style={{ width: 1000, height: 200 }}>
        <BarChartInteg chartData={ChartBarInteg} />
      </div>
      <div className="ChartStyle" style={{ width: 1000, height: 200 }}>
        <BarChartDNA chartData={ChartBarDNA} />
      </div>
    </div>
  );
}

export default App;
