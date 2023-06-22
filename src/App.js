import "./App.css";
import React, { useState } from "react";
import { PieChart } from "./Components/PieChart";
import { BarChart } from "./Components/BarChart";
import { dataPie } from "./DataPie.js";
import { dataBar } from "./DataBar.js";

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
        label: null,
        data: dataBar.map((data) => data.quantidade),
        backgroundColor: dataBar.map((data) => data.backgroundColor),
        hoverBackgroundColor: ["#6B1169", "#5AD3D1", "yellow", "chartreuse"],
      },
      
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
    </div>
  );
}

export default App;
