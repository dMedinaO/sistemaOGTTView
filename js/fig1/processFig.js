$(document).ready(function() {

	createFigs();

});

function createFig1(response) {

  //definimos los intervalos
  var x_axis = [0, 30, 60, 90, 120];
  var data = [];

  for (i=0; i<response.figA1.length; i++){

      //creamos el trace
      var dataY = [response.figA1[i][0], response.figA1[i][1], response.figA1[i][2], response.figA1[i][3], response.figA1[i][4]];
      var trace = {
        x: x_axis,
        y: dataY,
        mode: 'lines',
        name: 'Patient ID' + response.figA1[i][5],
        line: {shape: 'spline'},
        type: 'scatter'
      };

      //lo agregamos a la data...
      data.push(trace);
  }

  var layout = {
    legend: {
      y: 0.5,
      traceorder: 'reversed',
      font: {size: 16},
      yref: 'paper',
    },

    title: '',

    xaxis: {
      title: 'Time'
    },
    yaxis: {
      title: 'Glucose values'
    }
  };


  Plotly.newPlot('fig1A', data, layout);
}

function createFig1B(response) {

  //creacion grafico fig A1
  var dataInsuline = [];
  //definimos los intervalos
  var x_axis = [0, 30, 60, 90, 120];

  for (i=0; i<response.figA2.length; i++){

      //creamos el trace
      var dataY = [response.figA2[i][0], response.figA2[i][1], response.figA2[i][2], response.figA2[i][3], response.figA2[i][4]];
      var trace = {
        x: x_axis,
        y: dataY,
        mode: 'lines',
        name: 'Patient ID' + response.figA2[i][5],
        line: {shape: 'spline'},
        type: 'scatter'
      };

      //lo agregamos a la data...
      dataInsuline.push(trace);
  }

  var layout = {
    legend: {
      y: 0.5,
      traceorder: 'reversed',
      font: {size: 16},
      yref: 'paper',
    },

    title: '',

    xaxis: {
      title: 'Time'
    },
    yaxis: {
      title: 'Insuline values'
    }
  };

  Plotly.newPlot('fig1B', dataInsuline, layout);

}

function createFig2A(response){

  //creacion grafico fig A1
  var dataGlucose = [];
  //definimos los intervalos
  var x_axis = [0, 30, 60, 90, 120];
  console.log(response.fig2A.length);
  for (i=0; i<response.fig2A.length; i++){

      //creamos el trace
      var dataY = [response.fig2A[i][1], response.fig2A[i][2], response.fig2A[i][3], response.fig2A[i][4], response.fig2A[i][5]];
      var trace = {
        x: x_axis,
        y: dataY,
        mode: 'lines',
        name: 'Patient ID' + response.fig2A[i][0],
        line: {shape: 'spline'},
        type: 'scatter'
      };

      //lo agregamos a la data...
      dataGlucose.push(trace);
  }

  var layout = {
    legend: {
      y: 0.5,
      traceorder: 'reversed',
      font: {size: 16},
      yref: 'paper',
    },

    title: '',

    xaxis: {
      title: 'Time'
    },
    yaxis: {
      title: 'Glucose values'
    }
  };

  Plotly.newPlot('fig2A', dataGlucose, layout);

}

function createFig2B(response){

  //creacion grafico fig A1
  var dataInsulineValues = [];
  //definimos los intervalos
  var x_axis = [0, 30, 60, 90, 120];

  for (i=0; i<response.fig2A.length; i++){

      //creamos el trace
      var dataY = [response.fig2A[i][6], response.fig2A[i][7], response.fig2A[i][8], response.fig2A[i][9], response.fig2A[i][10]];
      var trace = {
        x: x_axis,
        y: dataY,
        mode: 'lines',
        name: 'Patient ID' + response.fig2A[i][0],
        line: {shape: 'spline'},
        type: 'scatter'
      };

      //lo agregamos a la data...
      dataInsulineValues.push(trace);
  }

  var layout = {
    legend: {
      y: 0.5,
      traceorder: 'reversed',
      font: {size: 16},
      yref: 'paper',
    },

    title: '',

    xaxis: {
      title: 'Time'
    },
    yaxis: {
      title: 'Insuline values'
    }
  };

  Plotly.newPlot('fig2B', dataInsulineValues, layout);

}

function createFig3A(response){

  //creacion grafico fig A1
  var dataInsulineValues = [];
  //definimos los intervalos
  var x_axis = [0, 30, 60, 90, 120];

  for (i=0; i<response.fig2B.length; i++){

      //creamos el trace
      var dataY = [response.fig2B[i][1], response.fig2B[i][2], response.fig2B[i][3], response.fig2B[i][4], response.fig2B[i][5]];
      var trace = {
        x: x_axis,
        y: dataY,
        mode: 'lines',
        name: 'Patient ID' + response.fig2B[i][0],
        line: {shape: 'spline'},
        type: 'scatter'
      };

      //lo agregamos a la data...
      dataInsulineValues.push(trace);
  }

  var layout = {
    legend: {
      y: 0.5,
      traceorder: 'reversed',
      font: {size: 16},
      yref: 'paper',
    },

    title: '',

    xaxis: {
      title: 'Time'
    },
    yaxis: {
      title: 'Insuline values'
    }
  };

  Plotly.newPlot('fig3A', dataInsulineValues, layout);

}

function createFig3B(response){

  //creacion grafico fig A1
  var dataInsulineValues = [];
  //definimos los intervalos
  var x_axis = [0, 30, 60, 90, 120];

  for (i=0; i<response.fig2B.length; i++){

      //creamos el trace
      var dataY = [response.fig2B[i][6], response.fig2B[i][7], response.fig2B[i][8], response.fig2B[i][9], response.fig2B[i][10]];
      var trace = {
        x: x_axis,
        y: dataY,
        mode: 'lines',
        name: 'Patient ID' + response.fig2B[i][0],
        line: {shape: 'spline'},
        type: 'scatter'
      };

      //lo agregamos a la data...
      dataInsulineValues.push(trace);
  }

  var layout = {
    legend: {
      y: 0.5,
      traceorder: 'reversed',
      font: {size: 16},
      yref: 'paper',
    },

    title: '',

    xaxis: {
      title: 'Time'
    },
    yaxis: {
      title: 'Glucose values'
    }
  };

  Plotly.newPlot('fig3B', dataInsulineValues, layout);

}

function createFigs() {

  //hacemos la llamada al servicio
  $.ajax({
			method:"POST",
			url: "../php/fig1/processFig.php"

	}).done( function(info){

		//obtenemos el nombre del set de datos
		var response = JSON.parse(info);
    createFig1(response);
    createFig1B(response);
    createFig2A(response);
    createFig2B(response);
    createFig3A(response);
    createFig3B(response);
	});
}
