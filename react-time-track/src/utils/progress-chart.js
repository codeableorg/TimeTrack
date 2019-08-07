import Chart from "chart.js";

function progressChart(chartElement, labels, arrData) {
  const ctx = document.getElementById(chartElement);
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Estimated Cost",
          data: arrData.graphic_estimated,
          backgroundColor: "red",
          borderColor: "red",
          fill: false
        },
        {
          label: "Real Cost",
          data: arrData.graphic_real,
          backgroundColor: "blue",
          borderColor: "blue",
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: arrData.title,
        fontSize: 30,
        fontColor: "black"
      },
      tooltips: {
        mode: "index",
        intersect: false
      },
      hover: {
        mode: "nearest",
        intersect: true
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Week"
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "%Consume budget"
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 100
            }
          }
        ]
      }
    }
  });
}

export default progressChart;
