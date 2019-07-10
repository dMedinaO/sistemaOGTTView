$(function () {

	//creamos los arreglos para los intervalos de tiempo
	var intervalP1 = new Array();
	var intervalP2 = new Array();
	var intervalP3 = new Array();
	var intervalP4 = new Array();
	var intervalP5 = new Array();
	var intervalP6 = new Array();
	var intervalP7 = new Array();
	var intervalP8 = new Array();
	var intervalP9 = new Array();
	var intervalP10 = new Array();
	var intervalP11 = new Array();
	var intervalP12 = new Array();
	var intervalP13 = new Array();
	var intervalP14 = new Array();
	var intervalP15 = new Array();
	var intervalP16 = new Array();

	//funcion que permite crear un trace
	function createTrace(data, key){

		var trace = {
		  y: data,
		  type: 'box',
		  name: key,
		  marker: {
		    color: 'rgb(8,81,156)',
		    outliercolor: 'rgba(219, 64, 82, 0.6)',
		    line: {
		      outliercolor: 'rgba(219, 64, 82, 1.0)',
		      outlierwidth: 2
		    }
		  },
		  boxpoints: 'suspectedoutliers'
		};

		return trace;
	}

	var url = "../../php/params/full/getParamsBoxPlot.php";

	$.getJSON(url, function(data) {

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p1.length; i++){
			var cantidad = Math.log(parseFloat(data.p1[i].Kjs));
			intervalP1.push(cantidad);
		}

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p2.length; i++){
			var cantidad = Math.log(parseFloat(data.p2[i].Kgj));
			intervalP2.push(cantidad);
		}

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p3.length; i++){
			var cantidad = Math.log(parseFloat(data.p3[i].Klj));
			intervalP3.push(cantidad);
		}

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p4.length; i++){
			var cantidad = Math.log(parseFloat(data.p4[i].tau));
			intervalP4.push(cantidad);
		}

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p5.length; i++){
			var cantidad = Math.log(parseFloat(data.p5[i].Klg));
			intervalP5.push(cantidad);
		}

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p6.length; i++){
			var cantidad = Math.log(parseFloat(data.p6[i].Kxg));
			intervalP6.push(cantidad);
		}

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p7.length; i++){
			var cantidad = Math.log(parseFloat(data.p7[i].Kxgi));
			intervalP7.push(cantidad);
		}

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p8.length; i++){
			var cantidad = Math.log(parseFloat(data.p8[i].c));
			intervalP8.push(cantidad);
		}

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p9.length; i++){
			var cantidad = Math.log(parseFloat(data.p9[i].klambda));
			intervalP9.push(cantidad);
		}

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p10.length; i++){
			var cantidad = Math.log(parseFloat(data.p10[i].fgi));
			intervalP10.push(cantidad);
		}

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p11.length; i++){
			var cantidad = Math.log(parseFloat(data.p11[i].Kxi));
			intervalP11.push(cantidad);
		}

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p12.length; i++){
			var cantidad = Math.log(parseFloat(data.p12[i].gamma));
			intervalP12.push(cantidad);
		}

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p13.length; i++){
			var cantidad = Math.log(parseFloat(data.p13[i].beta));
			intervalP13.push(cantidad);
		}

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p14.length; i++){
			var cantidad = Math.log(parseFloat(data.p14[i].D));
			intervalP14.push(cantidad);
		}

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p15.length; i++){
			var cantidad = Math.log(parseFloat(data.p15[i].GB));
			intervalP15.push(cantidad);
		}

		//recorremos intervalo por intervalo...
		for (i = 0; i < data.p16.length; i++){
			var cantidad = Math.log(parseFloat(data.p16[i].IB));
			intervalP16.push(cantidad);
		}


		//creamos las trace...
		var trace1 = createTrace(intervalP1, 'Kjs');
		var trace2 = createTrace(intervalP2, 'Kgj');
		var trace3 = createTrace(intervalP3, 'Klj');
		var trace4 = createTrace(intervalP4, 'tau');
		var trace5 = createTrace(intervalP5, 'Klg');
		var trace6 = createTrace(intervalP6, 'Kxg');
		var trace7 = createTrace(intervalP7, 'Kxgi');
		var trace8 = createTrace(intervalP8, 'c');
		var trace9 = createTrace(intervalP9, 'klambda');
		var trace10 = createTrace(intervalP10, 'fgi');
		var trace11 = createTrace(intervalP11, 'Kxi');
		var trace12 = createTrace(intervalP12, 'Gamma');
		var trace13 = createTrace(intervalP13, 'Beta');
		var trace14 = createTrace(intervalP14, 'D');
		var trace15 = createTrace(intervalP15, 'GB');
		var trace16 = createTrace(intervalP16, 'IB');

		var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12, trace13, trace14, trace15, trace16];

		var layout = {
		  title: 'Params Distribution for Group in Log Scale'
		};

		Plotly.newPlot('bpParams', data, layout);
	});

});
