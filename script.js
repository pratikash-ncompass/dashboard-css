let linectx = document.getElementById("websiteTrafficChart").getContext("2d");
let piectx = document.getElementById("pieChart").getContext("2d");
let barctx = document.getElementById("barChart").getContext("2d");
let lineUpctx1 = document.getElementById("lineUp").getContext("2d");
let lineUpctx2 = document.getElementById("lineUp2").getContext("2d");
let linedownctx1 = document.getElementById("linedown").getContext("2d");
let linedownctx2 = document.getElementById("linedown2").getContext("2d");

const gradient = linectx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(92, 199, 255, 0.8)");
gradient.addColorStop(1, "rgba(92, 199, 255, 0)");

const gradient2 = lineUpctx1.createLinearGradient(0, 0, 0, 400);
gradient2.addColorStop(0, "rgba(0, 255, 0, 0.1)");
gradient2.addColorStop(1, "rgba(0, 255, 0, 0)");

const gradient3 = linedownctx1.createLinearGradient(0, 0, 0, 400);
gradient3.addColorStop(0, "rgba(255, 0, 0, 0.1)");
gradient3.addColorStop(1, "rgba(255, 0, 0, 0)");

const imagePaths = [
  "./assets/united-states.png",
  "./assets/australia.png",
  "./assets/india.png",
  "./assets/nz.png",
  "./assets/bosnia.png",
  "./assets/turkey.png",
  "./assets/germany.png",
  "./assets/bangladesh.png",
  "./assets/spain.png",
  "./assets/argentina.png",
];

const imageDimensions = {
  width: 18,
  height: 20,
};

// LINE CHART
let websiteTrafficChart = new Chart(linectx, {
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
        pointRadius: 0, // Hide points by default
        pointHoverRadius: 6, // Show points on hover
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
          borderDash: [5, 15],
        },
      },
      y: {
        //   grid: {
        //     display: false
        // }
      },
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

let lineUpChart = new Chart(lineUpctx1, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Website Traffic",
        data: [1000, 1500, 1300, 2000],
        backgroundColor: gradient2,
        borderColor: "green",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    //use width
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

let lineUpChart2 = new Chart(lineUpctx2, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Website Traffic",
        data: [1000, 1500, 1300, 2000],
        backgroundColor: gradient2,
        borderColor: "green",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    //use width
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

let linedownChart = new Chart(linedownctx1, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Website Traffic",
        data: [2000, 1300, 1500, 1000],
        backgroundColor: gradient3,
        borderColor: "red",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    //use width
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

let linedownChart2 = new Chart(linedownctx2, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Website Traffic",
        data: [2000, 1300, 1500, 1000],
        backgroundColor: gradient3,
        borderColor: "red",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    //use width
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// PIE CHART
let pieChart = new Chart(piectx, {
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
const data = {
  labels: ["", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "",
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
  ticks:{
    x:{
      
    }
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
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

let barChart = new Chart(barctx, config);
