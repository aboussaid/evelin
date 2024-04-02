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

  // Earning Reports Tabs Naissance
  // --------------------------------------------------------------------
  const statistiquesTabsNaissanceEl = document.querySelector('#statistiquesTabsNaissance'),
    statistiquesTabsNaissanceConfig = statistiquesBarChart(
      statistiquesChart['data'][0]['chart_data'],
      statistiquesChart['data'][0]['active_option']
    );
  if (typeof statistiquesTabsNaissanceEl !== undefined && statistiquesTabsNaissanceEl !== null) {
    const statistiquesTabsNaissance = new ApexCharts(statistiquesTabsNaissanceEl, statistiquesTabsNaissanceConfig);
    statistiquesTabsNaissance.render();
  }
  // Earning Reports Tabs Reconnaisance
  // --------------------------------------------------------------------
  const statistiquesTabsReconnaisanceEl = document.querySelector('#statistiquesTabsReconnaisance'),
    statistiquesTabsReconnaisanceConfig = statistiquesBarChart(
      statistiquesChart['data'][1]['chart_data'],
      statistiquesChart['data'][1]['active_option']
    );
  if (typeof statistiquesTabsReconnaisanceEl !== undefined && statistiquesTabsReconnaisanceEl !== null) {
    const statistiquesTabsReconnaisance = new ApexCharts(
      statistiquesTabsReconnaisanceEl,
      statistiquesTabsReconnaisanceConfig
    );
    statistiquesTabsReconnaisance.render();
  }
  // Earning Reports Tabs Mariage
  // --------------------------------------------------------------------
  const statistiquesTabsMariageEl = document.querySelector('#statistiquesTabsMariage'),
    statistiquesTabsMariageConfig = statistiquesBarChart(
      statistiquesChart['data'][2]['chart_data'],
      statistiquesChart['data'][2]['active_option']
    );
  if (typeof statistiquesTabsMariageEl !== undefined && statistiquesTabsMariageEl !== null) {
    const statistiquesTabsMariage = new ApexCharts(statistiquesTabsMariageEl, statistiquesTabsMariageConfig);
    statistiquesTabsMariage.render();
  }
  // Earning Reports Tabs Deces
  // --------------------------------------------------------------------
  const statistiquesTabsDecesEl = document.querySelector('#statistiquesTabsDeces'),
    statistiquesTabsDecesConfig = statistiquesBarChart(
      statistiquesChart['data'][3]['chart_data'],
      statistiquesChart['data'][3]['active_option']
    );
  if (typeof statistiquesTabsDecesEl !== undefined && statistiquesTabsDecesEl !== null) {
    const statistiquesTabsDeces = new ApexCharts(statistiquesTabsDecesEl, statistiquesTabsDecesConfig);
    statistiquesTabsDeces.render();
  }

  // Earning Reports Tabs Divorce
  // --------------------------------------------------------------------
  const statistiquesTabsDivorceEl = document.querySelector('#statistiquesTabsDivorce'),
    statistiquesTabsDivorceConfig = statistiquesBarChart(
      statistiquesChart['data'][2]['chart_data'],
      statistiquesChart['data'][2]['active_option']
    );
  if (typeof statistiquesTabsDivorceEl !== undefined && statistiquesTabsDivorceEl !== null) {
    const statistiquesTabsDivorce = new ApexCharts(statistiquesTabsDivorceEl, statistiquesTabsDivorceConfig);
    statistiquesTabsDivorce.render();
  }

  const statistiqueCommune = document.querySelector('#statistique-commune .card-body');
  if (statistiqueCommune) {
    new PerfectScrollbar(statistiqueCommune, {
      wheelPropagation: false
    });
  }
})();
