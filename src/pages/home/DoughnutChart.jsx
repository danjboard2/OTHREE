import React, {useLayoutEffect, useState, useEffect, useRef } from 'react';

import Chart from 'chart.js/auto';


// setup
const data = {
    labels: ["Public Sale", "Pre-Sale", "Founders/Team", "Advisors", "Reserve","Seed",  "Community", "Founders/Team", "Ecosystem Growth", "Protocol Insurance", "Pre-Seed", "Government Funds", "Liquidity Pool"],
    datasets: [
      {
        data: [10, 5, 7.5, 2.5, 15, 2.9, 15, 7.5, 10, 2.5, 12.5, 9.6],
        backgroundColor: [
          "#6A2D0B",
          "#954010",
          "#955010",
          "#957010",
          "#959010",
          "#738310",
          "#3D5A0B",
          "#505B0B",
          "#4B4408",
          "#4B3808",
          "#4B2C08",
          "#4B2008",
        ],
        borderColor: [
          "#6A2D0B",
          "#954010",
          "#955010",
          "#957010",
          "#959010",
          "#738310",
          "#3D5A0B",
          "#505B0B",
          "#4B4408",
          "#4B3808",
          "#4B2C08",
          "#4B2008",
        ],
      },
    ],
  };
  // pieLabelsLine plugin
  const pieLabelsLineMobile = {
    id: "pieLabelsLineMobile",
    afterDraw(chart) {
      let {
        ctx,
        chartArea: { width, height },
      } = chart;
      
  
      const cx = chart._metasets[0].data[0].x / 1.65;
      const cy = chart._metasets[0].data[0].y / 1.65;
  
      const sum = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
  
      chart.data.datasets.forEach((dataset, i) => {
        chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
          const { x: a, y: b } = datapoint.tooltipPosition();
  
          const x = 1.6 * a - cx;
          const y = 1.6 * b - cy;
  
          const halfwidth = width / 1.6;
          const halfheight = height / 1.5;
          const xLine = x >= halfwidth ? x + 10 : x - 10;
          const yLine = y >= halfheight ? y + 10 : y -10;
  
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
          ctx.font = "12px Roboto";
          // control the position
          const textXPosition = x >= halfwidth ? "left" : "right";
          const plusFivePx = x >= halfwidth ? 5 : -5;
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
  
          const halfwidth = width / 1.55;
          const halfheight = height / 1.55;
          const xLine = x >= halfwidth ? x + 20 : x - 20;
          const yLine = y >= halfheight ? y + 20 : y - 20;
  
          const extraLine = x >= halfwidth ? 20 : -20;
  
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
          const plusFivePx = x >= halfwidth ? 15 : -15;
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
  const configMobile = {
    type: "doughnut",
    indexLabelPlacement: "outside",
    data,
    options: {
      //events: [],
      chartArea: {
        height: '100%',
        width: '100%',
      },
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2.2,
      layout: {
        padding:40,
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
    plugins: [pieLabelsLineMobile],
  };
  const configDesktop = {
    type: "doughnut",
    indexLabelPlacement: "outside",
    data,
    options: {
      events: [],
      chartArea: {
        height: '100%',
        width: '100%',
      },
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1.6,
      layout: {
        padding:120,
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
  const [isCanvasVisible, setIsCanvasVisible] = useState(false);
  const chartContainerRef = useRef(null);
  const chartInstanceRef = useRef(null);
  useEffect(() => {
    const containerObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsCanvasVisible(true);
        containerObserver.unobserve(entry.target);
      }
    });

    if (chartContainerRef.current) {
      containerObserver.observe(chartContainerRef.current);
    }

    return () => {
      if (chartContainerRef.current) {
        containerObserver.unobserve(chartContainerRef.current);
      }
    };
  }, []);
  useEffect(() => {
    if (isCanvasVisible && !chartInstanceRef.current) {
      const context = chartContainerRef.current.querySelector('canvas').getContext('2d');
      const chartConfig = window.innerWidth > 800 ? configDesktop : configMobile;
      chartInstanceRef.current = new Chart(context, chartConfig);
      console.log('Chart instance created.');
    }
  }, [isCanvasVisible]);
  return (
    <>
    <div ref={chartContainerRef} className="block w-full overflow-hidden">
    <canvas id="myChart" className="block  m-0"></canvas>
  </div>
    </>
    )
};
export default Doughnut;