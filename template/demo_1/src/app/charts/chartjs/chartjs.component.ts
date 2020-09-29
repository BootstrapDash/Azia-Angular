import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  barChartData = [{
    label: '# of Votes',
    data: [12, 39, 20, 10, 55, 18],
  }];

  barChartColors = [
    {
      backgroundColor: '#560bd0'
    }
  ];

  barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  barChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontSize: 10,
          min:0,
          max: 80
        }
      }],
      xAxes: [{
        barPercentage: 0.6,
        ticks: {
          beginAtZero:true,
          fontSize: 11
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  barChartData2 = [{
    label: '# of Votes',
    data: [12, 39, 20, 10, 25, 18],
  }];

  barChartColors2 = [
    {
      borderColor: 'rgba(0,123,255,.5)',
      backgroundColor: 'rgba(0,123,255,.5)'
    }
  ];


  barChartColors3 = [
    {
      backgroundColor: ['#560bd0', '#007bff','#00cccc','#cbe0e3','#74de00','#f10075']
    }
  ];


  barChartData3 = [{
      data: [12, 39, 20, 10, 25, 18],
      backgroundColor: ['#560bd0', '#007bff','#74de00','#f10075','#74de00','#f10075']
    }, {
      data: [22, 30, 25, 30, 20, 60],
      backgroundColor: '#cad0e8'
    }];

      barChartColors4 = [
    {
      backgroundColor: ['#560bd0', '#007bff','#00cccc','#cbe0e3','#74de00','#f10075']
    },
    {
      backgroundColor: '#cad0e8'
    }
  ];

  lineChartData = [{
      data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
      borderColor: '#f10075',
      borderWidth: 1,
      fill: false
    },{
      data: [10, 20, 25, 55, 50, 45, 35, 30, 45, 35, 55, 40],
      borderColor: '#007bff',
      borderWidth: 1,
      fill: false
    }];

  lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  lineChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  lineChartData2 = [{
    data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
    borderWidth: 1,
    fill: true
  },{
    data: [10, 20, 25, 55, 50, 45, 35, 30, 45, 35, 55, 40],
    borderWidth: 1,
    fill: true
  }];

  lineChartColors2 = [
    {
      borderColor: 'rgba(241,0,117,1)',
      backgroundColor: 'rgba(241,0,117,.2)'
    },
    {
      borderColor: 'rgba(0,123,255,1)',
      backgroundColor: 'rgba(0,123,255,.2)'
    }
  ];

  doughnutPieChartData = [{
    label: '# of Votes',
    data: [20,20,30,5,25]
  }];

  doughnutPieChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

  doughnutPieChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: false
  };

  doughnutPieChartColors = [
    {
      backgroundColor: ['#560bd0', '#007bff','#00cccc','#cbe0e3','#74de00']
    }
  ]

}
