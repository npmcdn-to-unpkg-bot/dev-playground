var baseURL;
var firms_rankings_json;
var firms_metrics_json;
var series = [];
var remaining_series = [];

$(function () {
  renderChart();
  renderFirmsMetrics();

  // Toggle embed code
  $('.embed-reveal').click(function (event) {
    $(this).siblings('div').toggle(300, function () {
      $('.embed-code').select();
    });
  });

  $('#view-the-chart').click(function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $("#firms-rankings").offset().top - 100
    }, 500);
  });

  // Add button handler to add all series to the chart
  $('#add-next-series').click(function () {
    var chart = $('#firms-rankings').highcharts();

    for (var i = 0; i < chart.series.length; i++) {
      if (!chart.series[i].visible) {
        chart.series[i].show();
        break;
      }
    };
  });

  // Add button handler to add all series to the chart
  $('#add-all-series').click(function () {
    var chart = $('#firms-rankings').highcharts();

    for (var i = 0; i < chart.series.length; i++) {
      if (!chart.series[i].visible) {
        chart.series[i].show();
      }
      $(this).find('.state').text("top 9");
    };

    if ($(this).hasClass('less')) {
      for (var i = 0; i < chart.series.length; i++) {
        if (i < 9) {
          chart.series[i].show();
        } else {
          chart.series[i].hide();
        }
      };
      $(this).find('.state').text("all");
    }

    $(this).toggleClass('less');
  });

  // Select / Highlight metrics row
  $('#metric-ratings').on('click', '.metric-row', function () {
    $(this).toggleClass('selected');
    $(this).find('.metric-value').toggleClass('row-selected');
  });

  // Select / Highlight metrics col
  $('#metric-ratings').on('click', '.metric-firm', function () {
    var col_index = $(this).data('firm-index');

    $('#metric-ratings .metric-values').children('.metric-value[data-value-index=' + col_index + ']').toggleClass('col-selected');
  });

  // Select / Highlight metrics col for click on value
  $('#metric-ratings').on('click', '.metric-value', function () {
    var col_index = $(this).data('value-index');

    $('#metric-ratings .metric-values').children('.metric-value[data-value-index=' + col_index + ']').toggleClass('col-selected');
  });

  // Highlight metrics row/col on hover
  $('#metric-ratings').on('mouseenter', '.metric-value', function () {
    var index = $(this).data('value-index');
    $('.metric-row:not(.total)').children('.metric-values')
      .children('.metric-value[data-value-index="' + index + '"]')
      .addClass('on');
  }).on('mouseleave', '.metric-value', function () {
    var index = $(this).data('value-index');
    $('.metric-row:not(.total)').children('.metric-values')
      .children('.metric-value[data-value-index="' + index + '"]')
      .removeClass('on');
  });

  // set highlights for firm name hover
  $('#metric-ratings').on('mouseenter', '.metric-firm', function () {
    var index = $(this).data('firm-index');
    $('.metric-row:not(.total)').children('.metric-values')
      .children('.metric-value[data-value-index="' + index + '"]')
      .addClass('on');
  }).on('mouseleave', '.metric-firm', function () {
    var index = $(this).data('firm-index');
    $('.metric-row:not(.total)').children('.metric-values')
      .children('.metric-value[data-value-index="' + index + '"]')
      .removeClass('on');
  });
});

/**
 * [getRankingData description]
 * @return {[type]} [description]
 *
 */
function renderChart() {
  // Options for highchart
  var chartOptions = {
    chart: {
      renderTo: 'firms-rankings'
    },
    plotOptions: {
      series: {
        cursor: 'pointer'
      }
    },
    colors: [
      '#F78181',
      '#F5DA81',
      '#D8F781',
      '#81F781',
      '#81F7D8',
      '#81BEF7',
      '#8181F7',
      '#BE81F7',
      '#F781F3'
    ],
    tooltip: {
      formatter: function () {
        if (this.point.link || this.point.comment) {
          var tip_content = "";

          tip_content = '<strong>' + this.series.name + '</strong> ';

          tip_content += '<br/>Rating: ' + this.y;

          if (this.point.comment) {
            tip_content += '<div style="margin-top:10px; min-width: 200px; max-width:400px;  white-space:normal;">' + this.point.comment + "</div>";
          }

          if (this.point.link) {
            tip_content += '<a style="display:block; text-decoration:underline; padding: 15px 0" href="' + this.point.link + '" target="_blank" />read more</a>';
          }

          return tip_content;
        }

        // dont return any tooltip
        return false;
      }
    },
    series: [],
    yAxis: {
      title: {
        text: 'Consulting Firm Rating'
      }
    }
  };

  var firms_list = ["Bain & Co.", "McKinsey & Co.", "BCG", "Roland Berger", "AT Kearney", "Oliver Wyman", "PJP", "OC&C", "AD Little", "LEK", "PA Consulting", "PIP", "Deloitte S&O", "PwC Strategy&", "KPMG", "E&Y", "Accenture", "Capgemini", "IBM"]
  var dashed_firms_list = ["AD Little", "Capgemini", "E&Y", "IBM", "KPMG", "LEK", "OC&C", "PA Consulting", "PIP"];

  // retrieve the data from firms_rankings_json file to populate the chart
  $.getJSON(firms_rankings_json, function (json_data) {

    // Iterate through the Firms list and data to set the chart point properties
    _.each(firms_list, function (firm_name, index) {
      var firm_obj = {};
      var dataArr = [];

      firm_obj.name = firm_name;

      // Add dashed line style for low priority series
      if (dashed_firms_list.indexOf(firm_name) !== -1) {
        firm_obj.dashStyle = 'shortdash';
      }

      // Add custom color for specific firms
      switch (firm_obj.name) {
      case "McKinsey & Co.":
        firm_obj.color = "#9cd5f4";
        break;
      case "BCG":
        firm_obj.color = "#77DD77";
        break;
      case "Bain & Co.":
        firm_obj.color = "#ec716e";
        break;
      }

      // pluck the raiting value out of each json object index
      _.each(json_data, function (data, index) {
        var point_value;
        var point_meta;

        if (data.firm === firm_name) {
          point_meta = {
            name: data.firm,
            firm: data.firm,
            link: data.link || "",
            comment: data.comment || ""
          };

          // if the data point has a link or comment show a custom marker
          // position here is importent
          // marker should go directly after 'y' value
          if (data.link || data.comment) {
            point_value = {
              y: data.rating,
              marker: {
                radius: 6,
                states: {
                  hover: {
                    radius: 8
                  }
                }
              }
            };
          } else {
            point_value = {
              y: data.rating
            };
          } // end if/else

          dataArr.push($.extend(point_value, point_meta));
        } // end if
      });

      // set the series data property for chart use
      firm_obj.data = dataArr;

      // get the last recorded rank value
      // y = rating value on y-axis
      firm_obj.lastRank = _.last(firm_obj.data).y;

      // grab the last two ranks for the firm
      // to determine their rank change from the last week
      var lastTwoRanks = _.last(firm_obj.data, 2);
      var lastRank = lastTwoRanks[1].y;
      var prevRank = lastTwoRanks[0].y;

      // Set status movement from last two weeks
      if (lastRank > prevRank) {
        firm_obj.status = "up";
      } else if (lastRank < prevRank) {
        firm_obj.status = "down";
      } else if (lastRank === prevRank) {
        firm_obj.status = "neutral";
      }

      series.push(firm_obj);
    });

    // sort the firms based on their last rank,
    // after all have the data was added
    series = _.sortBy(series, function (firm_obj, index) {
      // return the negative value to sort DESC
      return -firm_obj.lastRank;
    });

    _.each(series, function (value, key, list) {
      chartOptions.series.push(value);
    });

    // creat a new Highchart object to be render
    var chart = new Highcharts.Chart(chartOptions);

    // hide some series
    for (var i = 9; i < chart.series.length; i++) {
      chart.series[i].hide();
    };

    // return series after index 5 because they are already rendered on the chart
    remaining_series = _.rest(series, 9);

    // Render the sorted firms list
    renderFirmsList(series).done(
      // render the plusone buttons after all firm data has been processed
      gapi.plusone.go()
    );

  });
};

/**
 * [renderFirmsList description]
 * @return {[type]} [description]
 */
function renderFirmsList(series) {
  // Deferred for used for plus one buttons
  var defr = $.Deferred();

  // Render the template
  // add an index/pathname for each item AFTER sorting
  var plusone_base = "https://plus.google.com/111271433783857277612/posts/";
  var plusone_ids = [
    { key: "Accenture", val: "gtnvMuE9yER" },
    { key: "AD Little", val: "2M4UXbpTdou" },
    { key: "AT Kearney", val: "WTHTrS9WtuB" },
    { key: "Bain & Co.", val: "6aketVxseVc" },
    { key: "BCG", val: "XsjBWPpaww9" },
    { key: "Capgemini", val: "VCQbjQsks2b" },
    { key: "Deloitte S&O", val: "Saji4Ykd3gu" },
    { key: "E&Y", val: "WHtzXeoWVU3" },
    { key: "IBM", val: "6kyhLPtdF5d" }, 
    { key: "KPMG", val: "DShCXebYVt1"}, 
    { key: "LEK", val: "3cekXLH4dtN"}, 
    { key: "McKinsey & Co.", val: "1M1XnzmWyB2"}, 
    { key: "OC&C", val: "6ytrxsfbnk7"}, 
    { key: "Oliver Wyman", val: "fTsWyDVCVRN"}, 
    { key: "PA Consulting", val: "5t6Pdhb89R3"}, 
    { key: "PIP", val: "Vb6n7XfxZpq"}, 
    { key: "PJP", val: "E9q5XoNmnh1"}, 
    { key: "PwC Strategy&", val: "gbH3ApfvNwr"}, 
    { key: "Roland Berger", val: "14NeUfp9H2L"}
  ];

  var firm_abbr_tooltip = [
    { key: "Accenture"}, 
    { key: "AD Little"}, 
    { key: "AT Kearney"}, 
    { key: "Bain & Co."}, 
    { key: "BCG"}, 
    { key: "Capgemini"}, 
    { key: "Deloitte S&O"}, 
    { key: "E&Y"}, 
    { key: "IBM"}, 
    { key: "KPMG"}, 
    { key: "LEK"}, 
    { key: "McKinsey & Co."}, 
    { key: "OC&C"}, 
    { key: "Oliver Wyman"}, 
    { key: "PA Consulting"}, 
    { key: "PIP", tooltip: "Partners in Performance"}, 
    { key: "PJP", tooltip: "Port Jackson Partners"}, 
    { key: "PwC Strategy&"}, 
    { key: "Roland Berger"}
  ];

  var template = _.template($('#firms-template').html());

  // add meta data for firms
  _.each(series, function (firm_obj, index) {
    // add index prop
    firm_obj.index = index + 1;

    // add plusone prop
    firm_obj.plusonelink = plusone_base + _.pluck(_.where(plusone_ids, {
      key: firm_obj.name
    }), 'val');

    if (index < 5) {
      firm_obj.top_five = true;
    }

    // Add custom tooltips for firms list
    firm_tooltip = _.pluck(_.where(firm_abbr_tooltip, {
      key: firm_obj.name
    }), 'tooltip');

    firm_obj.tooltip = (firm_tooltip[0]) ? firm_tooltip : firm_obj.name;

    // add the rendered template to the DOM
    $('#firms-list').append(template(firm_obj));
  });

  return defr.resolve();
};

/**
 * [renderFirmsMetrics description]
 * @return {[type]} [description]
 */
function renderFirmsMetrics() {
  var template = _.template($('#firms-metrics-template').html());

  $.getJSON(firms_metrics_json, function (json, textStatus) {

    var firms_list = [
      { firm: "Bain & Co.", group: "C-Suiters"}, 
      { firm: "McKinsey & Co.", group: "C-Suiters"}, 
      { firm: "BCG", group: "C-Suiters"}, 
      { firm: "Roland Berger", group: "C-Suiters"}, 
      { firm: "AT Kearney", group: "Generalists"}, 
      { firm: "Oliver Wyman", group: "Generalists"}, 
      { firm: "PJP", group: "Generalists"}, 
      { firm: "OC&C", group: "Boutiques"}, 
      { firm: "AD Little", group: "Boutiques"}, 
      { firm: "LEK", group: "Boutiques"}, 
      { firm: "PA Consulting", group: "Operators"}, 
      { firm: "PIP", group: "Operators"}, 
      { firm: "Deloitte S&O", group: "Multi-Disciplinarians"}, 
      { firm: "PwC Strategy&", group: "Multi-Disciplinarians"}, 
      { firm: "KPMG", group: "Multi-Disciplinarians"}, 
      { firm: "E&Y", group: "Multi-Disciplinarians"}, 
      { firm: "Accenture", group: "Integrators"}, 
      { firm: "Capgemini", group: "Integrators"}, 
      { firm: "IBM", group: "Integrators" }
    ];

    var metrics_data = _.groupBy(json, 'group')
    var firms_list = _.groupBy(firms_list, 'group');

    // Render template
    $('#metric-ratings').append(template({
      metrics: metrics_data,
      firms: firms_list
    }));
  });
};