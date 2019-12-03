new Chart(document.getElementById("chartt"), {
  type: 'line',
  data: {
    labels: [12,13,14,15,16,17,18,19,20,21,22],
    datasets: [{
      borderWidth: 3,
      lineTension: 0,
      data: [2.8,3.1,2.2,1.2,2.3,4.2,5,3.8,2.8,3.4,4.8],
      label: "Africa",
      borderColor: "#2ecc71",
      fill: false,
      pointBackgroundColor: "#fff",
      pointBorderColor:"#2ecc71",
      pointBorderWidth: 3,

      }
    ]
  },
  options: {
    scales:{
      xAxes: [{
        gridLines:{
          lineWidth: 0,
          drawBorder: false,
          drawTicks: true,
          // beginAtZero:true,
        },
        ticks:{
          fontColor: "#b8bec7",
        },
      }],
      yAxes: [{
        gridLines:{
          lineWidth: 0,
        },
        ticks:{
          display: false
        },
      }],
    },
    legend:{
      display: false,
    },
    title: {
      display: true,
    }
  }
});
