
// LINE CHART
let ctx1 = document.getElementById("websiteTrafficChart").getContext("2d");

const gradient = ctx1.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(92, 199, 255, 0.8)');   
gradient.addColorStop(1, 'rgba(92, 199, 255, 0)');     

let websiteTrafficChart = new Chart(ctx1, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Website Traffic",
        data: [
          3000, 2600, 2700, 2800, 3200, 3200, 3100, 3400, 3200, 3100, 3300,
          2800,
        ],
        backgroundColor: gradient,
        borderColor: "#4461f7",
        borderWidth: 2,
        pointBackgroundColor: "rgba(59, 130, 246, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(59, 130, 246, 1)",
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false,
                borderDash: [5, 15]
            }
        },
        y: {
          //   grid: {
          //     display: false
          // }
        }
    },
    //use width
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});

// PIE CHART
let ctx2 = document.getElementById("pieChart").getContext("2d");
let pieChart = new Chart(ctx2, {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "Dataset 1",
        data: [70.28, 18.92, 8.94, 2.31],
        backgroundColor: ["#4162ff", "#22bdff", "#6ed4ff", "#C7EEFF"],
        borderColor: ["#4162ff", "#22bdff", "#6ed4ff", "#C7EEFF"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltip: {
        enabled: true,
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
    radius: "85%",
    cutout: "70%",
  },
});

// BAR CHART
const imagePaths = [
  "./assets/australia.png",
  "./assets/brazil.png",
  "./assets/china.png",
  "./assets/denmark.png",
  "./assets/greece.png",
  "./assets/india.png",
  "./assets/spain.png",
  "./assets/united-kingdom.png",
  "./assets/united-states.png",
  "./assets/united-states.png",
];
const imageDimensions = {
  width: 18,
  height: 20,
};

let ctx3 = document.getElementById("barChart").getContext("2d");

const data = {
  labels: ["", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "sessions",
      data: [5600, 3500, 4800, 2500, 3700, 5300, 3200, 4200, 3000, 6000],
      barThickness: 18,
      backgroundColor: "#22BDFF",
      borderColor: "#22BDFF",
      borderWidth: 1,
      borderRadius: 5,
    },
  ],
};
const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      },
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
    tooltip: {
      enabled: true,
    },
  },
};

const config = {
  type: "bar",
  data: data,
  options: options,
  plugins: [
    {
      id: "custom-label-images",
      afterDraw: (chart) => {
        const ctx = chart.ctx;
        chart.data.labels.forEach((label, index) => {
          const meta = chart.getDatasetMeta(0);
          const x = meta.data[index].x;
          const y = chart.chartArea.bottom;

          const img = new Image();
          img.src = imagePaths[index];
          img.onload = () => {
            ctx.drawImage(
              img,
              x - imageDimensions.width / 2,
              y + 10,
              imageDimensions.width,
              imageDimensions.height
            );
          };
        });
      },
    },
  ],
};
let barChart = new Chart(ctx3, config);
