import React, {useEffect} from "react";
import Chart from 'chart.js/auto';
import { useVisibilityHook } from 'react-observer-api';
    //Chart.register(ChartDataLabels);
// setup
const data = {
    labels: ["Seed", "Public Sale", "Pre-Sale", "Founders/Team", "Advisors", "Reserve", "Community", "Founders/Team", "Ecosystem Growth", "Protocol Insurance", "Pre-Seed", "Government Funds", "Liquidity Pool"],
    datasets: [
      {
        data: [2.9, 10, 5, 7.5, 2.5, 15, 15, 7.5, 10, 2.5, 12.5, 9.6],
        backgroundColor: [
          "#316065",
          "#1A7F89",
          "#2D9CA7",
          "#2D86A7",
          "#1167A7",
          "#142440",
        ],
        borderColor: [
          "#316065",
          "#1A7F89",
          "#2D9CA7",
          "#2D86A7",
          "#1167A7",
          "#142440",
        ],
      },
    ],
  };
  // pieLabelsLine plugin
  const pieLabelsLine = {
    id: "pieLabelsLine",
    afterDraw(chart) {
      let {
        ctx,
        chartArea: { width, height },
      } = chart;
      
  
      const cx = chart._metasets[0].data[0].x / 2.5;
      const cy = chart._metasets[0].data[0].y / 2.5;
  
      const sum = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
  
      chart.data.datasets.forEach((dataset, i) => {
        chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
          const { x: a, y: b } = datapoint.tooltipPosition();
  
          const x = 1.4 * a - cx;
          const y = 1.4 * b - cy;
  
          // draw line
          const halfwidth = width / 1.8;
          const halfheight = height / 1.8;
          const xLine = x >= halfwidth ? x + 20 : x - 20;
          const yLine = y >= halfheight ? y + 20 : y - 20;
  
          const extraLine = x >= halfwidth ? 10 : -10;
  
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.arc(x, y, 2, 0, 2 * Math.PI, true);
          ctx.fill();
          ctx.moveTo(x, y);
          ctx.lineTo(xLine, yLine);
          ctx.lineTo(xLine + extraLine, yLine);
          // ctx.strokeStyle = dataset.backgroundColor[index];
          ctx.strokeStyle = "black";
          ctx.stroke();
  
          // text
          const textWidth = ctx.measureText(chart.data.labels[index]).width;
          ctx.font = "16px Roboto";
          // control the position
          const textXPosition = x >= halfwidth ? "left" : "right";
          const plusFivePx = x >= halfwidth ? 25 : -25;
          ctx.textAlign = textXPosition;
          ctx.textBaseline = "middle";
          // ctx.fillStyle = dataset.backgroundColor[index];
          ctx.fillStyle = "black";
  
          ctx.fillText(
            ((chart.data.datasets[0].data[index] * 100) / sum).toFixed(2) +
              "% " + chart.data.labels[index],
            xLine + extraLine + plusFivePx,
            yLine
          );
        });
      });
    },
  };
  // config
  const config = {
    type: "doughnut",
    indexLabelPlacement: "outside",
    data,
    options: {
      chartArea: {
        height: '100%',
        width: '100%',
      },
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1.9,
      layout: {
        padding:60,
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true,
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
        x: {
          display: false,
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
          position: "bottom",
        },
      },
    },
    plugins: [pieLabelsLine],
  };

export const Doughnut = () => {
    const {setElement, isVisible } = useVisibilityHook();
    useEffect(() => {
         var cv_values =  document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(cv_values,  config );
        function handleResize() {
          
          myChart = new Chart(cv_values,  config );
        }
        window.addEventListener('resize', handleResize);
        return () => {
          myChart.destroy()
        }
        }, []);
  return (
  <canvas id="myChart" className="block w-full min-[1240px]:!w-4/5 !h-auto"></canvas>
);
};

export default Doughnut;