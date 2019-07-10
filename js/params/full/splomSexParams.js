$(function () {

	var url = "../../php/params/full/getParamsSplom.php";
	var intervalKjs = new Array();
	var intervalKgj = new Array();
	var intervalKlj = new Array();
	var intervaltau = new Array();
	var intervalKlg = new Array();
	var intervalKxg = new Array();
	var intervalKxgi = new Array();
	var intervalc = new Array();
	var intervalklambda = new Array();
	var intervalfgi = new Array();
  var intervalKxi = new Array();
	var intervalgamma = new Array();
	var intervalbeta = new Array();
	var intervalD = new Array();
	var intervalGB = new Array();
	var intervalIB = new Array();
	var intervalEdad = new Array();
	var intervalSexo = new Array();

	$.getJSON(url, function(data) {

		for (i=0; i< data.dataResponse.length; i++){
			intervalKjs.push(Math.log2(parseFloat(data.dataResponse[i].Kjs)));
			intervalKgj.push(Math.log2(parseFloat(data.dataResponse[i].Kgj)));
			intervalKlj.push(Math.log2(parseFloat(data.dataResponse[i].Klj)));
			intervaltau.push(Math.log2(parseFloat(data.dataResponse[i].tau)));
			intervalKlg.push(Math.log2(parseFloat(data.dataResponse[i].Klg)));
			intervalKxg.push(Math.log2(parseFloat(data.dataResponse[i].Kxg)));
			intervalKxgi.push(Math.log2(parseFloat(data.dataResponse[i].Kxgi)));
			intervalc.push(Math.log2(parseFloat(data.dataResponse[i].c)));
			intervalklambda.push(Math.log2(parseFloat(data.dataResponse[i].klambda)));
			intervalfgi.push(Math.log2(parseFloat(data.dataResponse[i].fgi)));
      intervalKxi.push(Math.log2(parseFloat(data.dataResponse[i].Kxi)));
			intervalgamma.push(Math.log2(parseFloat(data.dataResponse[i].gamma)));
			intervalbeta.push(Math.log2(parseFloat(data.dataResponse[i].beta)));
			intervalD.push(Math.log2(parseFloat(data.dataResponse[i].D)));
			intervalGB.push(Math.log2(parseFloat(data.dataResponse[i].GB)));
			intervalIB.push(Math.log2(parseFloat(data.dataResponse[i].IB)));

			intervalEdad.push(Math.log2(parseInt(data.dataResponse[i].edad)));
			intervalSexo.push(data.dataResponse[i].sexo);
		}

		//creamos los arreglos para los intervalos de tiempo

    colors = [];
    for (i=0; i < intervalSexo.length; i++) {
      if (intervalSexo[i] == "F") {
        colors.push(0);
      }else{
        colors.push(0.5);
      }
    }

    var pl_colorscale=[
        [0.0, '#19d3f3'],
        [0.333, '#19d3f3'],
        [0.333, '#e763fa'],
        [0.666, '#e763fa'],
        [0.666, '#636efa'],
        [1, '#636efa']
    ];

    axis = {
      showline:false,
      zeroline:false,
      gridcolor:'#ffff',
      ticklen:4
    }

    var dataValues = [{
      type: 'splom',
      dimensions: [

        {label: 'Kjs', values:intervalKjs },
      	{label: 'Kgj', values:intervalKgj },
      	{label: 'Klj', values:intervalKlj },
      	{label: 'tau', values:intervaltau },
      	{label: 'Klg', values:intervalKlg },
      	{label: 'Kxg', values:intervalKxg },
      	{label: 'Kxgi', values:intervalKxgi },
      	{label: 'c', values:intervalc },
      	{label: 'klambda', values:intervalklambda },
      	{label: 'fgi', values:intervalfgi },
        {label: 'Kxi', values:intervalKxi },
      	{label: 'gamma', values:intervalgamma },
      	{label: 'beta', values:intervalbeta },
      	{label: 'D', values:intervalD },
      	{label: 'GB', values:intervalGB },
      	{label: 'IB', values:intervalIB },
      	{label: 'Age', values:intervalEdad}

      ],
      text: intervalSexo,
      marker: {
        color: colors,
        colorscale:pl_colorscale,
        size: 7,
        line: {
          color: 'white',
          width: 0.5
        }
      }
    }];

    var layout = {
      title:'Data Set Params Group Patients view by Sex',
      height: 1100,
      width: 1000,
      autosize: false,
      hovermode:'closest',
      dragmode:'select',
      plot_bgcolor:'rgba(240,240,240, 0.95)',
      xaxis:axis,
      yaxis:axis,
      xaxis2:axis,
      xaxis3:axis,
      xaxis4:axis,
      yaxis2:axis,
      yaxis3:axis,
      yaxis4:axis
    }

    Plotly.react('splomSex', dataValues, layout);

	});
});
