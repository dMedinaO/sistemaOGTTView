$(function () {

	processGraphic('Kjs', 'Histograma for Kjs', 'h0');
	processGraphic('Kgj', 'Histograma for Kgj', 'h1');
	processGraphic('Klj', 'Histograma for Klj', 'h2');
	processGraphic('tau', 'Histograma for tau', 'h3');
	processGraphic('Klg', 'Histograma for Klg', 'h4');
	processGraphic('Kxg', 'Histograma for Kxg', 'h5');
	processGraphic('Kxgi', 'Histograma for Kxgi', 'h6');
	processGraphic('c', 'Histograma for c', 'h7');
	processGraphic('klambda', 'Histograma for klambda', 'h8');
	processGraphic('fgi', 'Histograma for fgi', 'h9');
	processGraphic('Kxi', 'Histograma for kxi', 'h10');
	processGraphic('gamma', 'Histograma for gamma', 'h11');
	processGraphic('beta', 'Histograma for beta', 'h12');
	processGraphic('D', 'Histograma for D', 'h13');
	processGraphic('GB', 'Histograma for GB', 'h14');
	processGraphic('IB', 'Histograma for IB', 'h15');

});

function processGraphic(param, titleData, idData ){


	var processed_json = new Array();
	$.getJSON('../../php/params/full/histogrameParam.php?param='+param, function(data) {

		// Populate series
		for (i = 0; i < data[0].data.length; i++){
			var cantidad = Math.log2(parseFloat(data[0].data[i]));
			processed_json.push(cantidad);
		}

		//creamos el histograma...
		var trace1 = {
			x: processed_json,
			name: param,
			autobinx: true,
			histnorm: "count",
			marker: {
				color: "rgba(255, 100, 102, 0.7)",
				 line: {
					color:  "rgba(255, 100, 102, 1)",
					width: 1
				}
			},

			type: "histogram",
		};

		var data = [trace1];
		var layout = {
			bargap: 0.05,
			title: titleData,
			bargroupgap: 0.2,
			barmode: "overlay",
			yaxis: {title: "Count"}
		};
		Plotly.newPlot(idData, data, layout);

	});
}
