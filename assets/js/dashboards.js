/**
 * Dashboard CRM
 */

'use strict';
(function () {
  let cardColor, labelColor, shadeColor, legendColor, borderColor;

  cardColor = config.colors.cardColor;
  labelColor = config.colors.textMuted;
  legendColor = config.colors.bodyColor;
  borderColor = config.colors.borderColor;
  shadeColor = '';

  // Earning Reports Tabs Function
  function statistiquesBarChart(arrayData, highlightData) {
    const basicColor = config.colors_label.primary,
      highlightColor = config.colors.primary;
    var colorArr = [];

    for (let i = 0; i < arrayData.length; i++) {
      if (i === highlightData) {
        colorArr.push(highlightColor);
      } else {
        colorArr.push(basicColor);
      }
    }

    const earningReportBarChartOpt = {
      chart: {
        height: 258,
        parentHeightOffset: 0,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '32%',
          startingShape: 'rounded',
          borderRadius: 7,
          distributed: true,
          dataLabels: {
            position: 'top'
          }
        }
      },
      grid: {
        show: false,
        padding: {
          top: 0,
          bottom: 0,
          left: -10,
          right: -10
        }
      },
      colors: colorArr,
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + 'k';
        },
        offsetY: -20,
        style: {
          fontSize: '15px',
          colors: [legendColor],
          fontWeight: '500',
          fontFamily: 'Public Sans'
        }
      },
      series: [
        {
          data: arrayData
        }
      ],
      legend: {
        show: false
      },
      tooltip: {
        enabled: false
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        axisBorder: {
          show: true,
          color: borderColor
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px',
            fontFamily: 'Public Sans'
          }
        }
      },
      yaxis: {
        labels: {
          offsetX: -15,
          formatter: function (val) {
            return parseInt(val / 1) + 'k';
          },
          style: {
            fontSize: '13px',
            colors: labelColor,
            fontFamily: 'Public Sans'
          },
          min: 0,
          max: 60000,
          tickAmount: 6
        }
      },
      responsive: [
        {
          breakpoint: 1441,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '41%'
              }
            }
          }
        },
        {
          breakpoint: 590,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '61%',
                borderRadius: 5
              }
            },
            yaxis: {
              labels: {
                show: false
              }
            },
            grid: {
              padding: {
                right: 0,
                left: -20
              }
            },
            dataLabels: {
              style: {
                fontSize: '12px',
                fontWeight: '400'
              }
            }
          }
        }
      ]
    };
    return earningReportBarChartOpt;
  }
  var chartJson = 'earning-reports-charts.json';
  // Earning Chart JSON data
  var statistiquesChart = $.ajax({
    url: assetsPath + 'json/' + chartJson, //? Use your own search api instead
    dataType: 'json',
    async: false
  }).responseJSON;

  // Earning Reports Tabs Orders
  // --------------------------------------------------------------------
  const statistiquesTabsOrdersEl = document.querySelector('#statistiquesTabsOrders'),
    statistiquesTabsOrdersConfig = statistiquesBarChart(
      statistiquesChart['data'][0]['chart_data'],
      statistiquesChart['data'][0]['active_option']
    );
  if (typeof statistiquesTabsOrdersEl !== undefined && statistiquesTabsOrdersEl !== null) {
    const statistiquesTabsOrders = new ApexCharts(statistiquesTabsOrdersEl, statistiquesTabsOrdersConfig);
    statistiquesTabsOrders.render();
  }
  // Earning Reports Tabs Sales
  // --------------------------------------------------------------------
  const statistiquesTabsSalesEl = document.querySelector('#statistiquesTabsSales'),
    statistiquesTabsSalesConfig = statistiquesBarChart(
      statistiquesChart['data'][1]['chart_data'],
      statistiquesChart['data'][1]['active_option']
    );
  if (typeof statistiquesTabsSalesEl !== undefined && statistiquesTabsSalesEl !== null) {
    const statistiquesTabsSales = new ApexCharts(statistiquesTabsSalesEl, statistiquesTabsSalesConfig);
    statistiquesTabsSales.render();
  }
  // Earning Reports Tabs Profit
  // --------------------------------------------------------------------
  const statistiquesTabsProfitEl = document.querySelector('#statistiquesTabsProfit'),
    statistiquesTabsProfitConfig = statistiquesBarChart(
      statistiquesChart['data'][2]['chart_data'],
      statistiquesChart['data'][2]['active_option']
    );
  if (typeof statistiquesTabsProfitEl !== undefined && statistiquesTabsProfitEl !== null) {
    const statistiquesTabsProfit = new ApexCharts(statistiquesTabsProfitEl, statistiquesTabsProfitConfig);
    statistiquesTabsProfit.render();
  }
  // Earning Reports Tabs Income
  // --------------------------------------------------------------------
  const statistiquesTabsIncomeEl = document.querySelector('#statistiquesTabsIncome'),
    statistiquesTabsIncomeConfig = statistiquesBarChart(
      statistiquesChart['data'][3]['chart_data'],
      statistiquesChart['data'][3]['active_option']
    );
  if (typeof statistiquesTabsIncomeEl !== undefined && statistiquesTabsIncomeEl !== null) {
    const statistiquesTabsIncome = new ApexCharts(statistiquesTabsIncomeEl, statistiquesTabsIncomeConfig);
    statistiquesTabsIncome.render();
  }
})();
