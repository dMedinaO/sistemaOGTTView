$(document).ready(function() {

	createFigs();

});

function createFig3A(response){

  //creacion grafico fig A1
  var dataInsulineValues = [];
  //definimos los intervalos
  var x_axis = [0, 30, 60, 90, 120];

  for (i=0; i<response.response.length; i++){

      //creamos el trace
      var dataY = [response.response[i][1], response.response[i][2], response.response[i][3], response.response[i][4], response.response[i][5]];
      var trace = {
        x: x_axis,
        y: dataY,
        mode: 'lines',
        name: 'Patient ID' + response.response[i][0],
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
      title: 'Glucosa values'
    }
  };

  Plotly.newPlot('fig2A', dataInsulineValues, layout);

}

function createFig3B(response){

  //creacion grafico fig A1
  var dataInsulineValues = [];
  //definimos los intervalos
  var x_axis = [0, 30, 60, 90, 120];

  for (i=0; i<response.response.length; i++){

      //creamos el trace
      var dataY = [response.response[i][6], response.response[i][7], response.response[i][8], response.response[i][9], response.response[i][10]];
      var trace = {
        x: x_axis,
        y: dataY,
        mode: 'lines',
        name: 'Patient ID' + response.response[i][0],
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
      title: 'Insulina values'
    }
  };

  Plotly.newPlot('fig2B', dataInsulineValues, layout);

}

function createFigs() {

	var grupoG = getQuerystring("glucose");
	var grupoI = getQuerystring("insuline");

  //hacemos la llamada al servicio
  $.ajax({
			method:"POST",
			url: "../php/fig2/processFig.php?grupoG="+grupoG+"&grupoI="+grupoI

	}).done( function(info){

		//obtenemos el nombre del set de datos
		var response = JSON.parse(info);
    createFig3A(response);
    createFig3B(response);
	});
}

//funcion para recuperar la clave del valor obtenido por paso de referencia
function getQuerystring(key, default_) {
  if (default_ == null)
    default_ = "";
  key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regex = new RegExp("[\\?&amp;]"+key+"=([^&amp;#]*)");
  var qs = regex.exec(window.location.href);
  if(qs == null)
    return default_;
  else
    return qs[1];
};
