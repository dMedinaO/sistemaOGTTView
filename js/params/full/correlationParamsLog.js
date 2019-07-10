$(function () {

	var processed_json = new Array();

  var url = "../../php/params/full/getParamsLogCorrelation.php";
	$.getJSON(url, function(data) {

		var array = data;

		var data = [{
	    z:array,

	    x: ['Age','Kjs', 'Kgj', 'Klj', 'tau', 'Klg', 'Kxg', 'Kxgi', 'c', 'klambda', 'fgi', 'Kxi', 'gamma', 'beta', 'D', 'GB', 'IB'],
	    y: ['Age','Kjs', 'Kgj', 'Klj', 'tau', 'Klg', 'Kxg', 'Kxgi', 'c', 'klambda', 'fgi', 'Kxi', 'gamma', 'beta', 'D', 'GB', 'IB'],
	    type: 'heatmap'
		}];

		Plotly.newPlot('correlationParamsLogs', data);

	});
});
