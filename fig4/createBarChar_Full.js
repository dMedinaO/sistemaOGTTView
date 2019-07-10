$(function () {

  var s1 = "k"+"js".sub();
  var s2 = "k" + "gj".sub();
  var s3 = "k"+"lj".sub();
  var s4 = "k"+"lg".sub();
  var s5 = "k" + "xg".sub();
  var s6 = "k"+"xgi".sub();
  var s7 = "f"+"gi".sub();
  var s8 = "k"+"xi".sub();
  var s9 = "G"+"b".sub();
  var s10 = "I"+"b".sub();
  var s11 = "k"+"λ".sub();

  header = [s1,s2,s3,'τ',s4,s5, s6,'η',s11, s7 ,s8,'γ','β','D',s9,s10];

  for (var i = 0; i < header.length; i++) {
    header[i] = header[i].italics();
  }


  originalValuePatient = [0.15318,	0.10193,	0.039085,	75.117,	0.19297,	0.015939,	1.26E-07,	0.018959,	0.037605,	3.9036,	0.01731,	1.5873,	117.18,	406.42,	4.6,	34.233];
  valores1 = [0.15473, 0.097143, 0.03892, 74.918, 0.1927, 0.015886, 1.21E-07, 0.019229, 0.034259, 4.1296, 0.018421, 1.5585, 114.22, 414.84, 4.6324,	33.859];
  valores2 = [0.15173, 0.10155, 0.04062, 75.388, 0.19445, 0.015683, 1.19E-07, 0.018838, 0.032977, 4.2664, 0.018316, 1.5365, 117.49, 411.47, 4.5382, 33.335];
  valores3 = [0.15469, 0.10069, 0.039845, 75.131, 0.19025, 0.015972, 1.27E-07, 0.019245, 0.036806, 4.0299, 0.018082, 1.5797, 108.44, 415.06, 4.6466,	33.508];
  valores4 = [0.15168, 0.098424, 0.040204, 75.405, 0.19505, 0.015683, 1.14E-07, 0.019104, 0.033175, 4.2616, 0.018544, 1.5444, 116.04, 406.57, 4.5043,	33.147];
  valores5 = [0.16009, 0.099083, 0.04044, 74.897, 0.1985, 0.015796, 1.23E-07, 0.019622, 0.035082, 4.2132, 0.018732, 1.5472, 119.23, 413.09, 4.6553, 34.003];
  valores6 = [0.16142, 0.098695, 0.04086, 75.589, 0.18816, 0.015949, 1.30E-07, 0.019152, 0.034154, 3.9468, 0.018368, 1.5776, 119.05, 411.37, 4.4531,	32.9];

  error1 = [0.020704, 0.0051813, 0.0036113, 1.4923, 0.021092, 0.0011729, 1.87E-08, 0.0015411, 0.0046777, 0.53715, 0.00087245, 0.084527, 4.356, 8.766, 0.078048, 0.28821];
  error2 = [0.011555, 0.0069639, 0.0019802, 1.7371, 0.031874, 0.0013313, 1.56E-08, 0.0020849, 0.0046263, 0.38247, 0.0013839, 0.059471, 7.6498, 7.6852, 0.097455, 1.1059];
  error3 = [0.020793, 0.010805, 0.0045805, 1.4148, 0.031012, 0.0013736, 1.45E-08, 0.0018507, 0.0061341, 0.46555, 0.0011331, 0.092225, 7.7638, 9.1011, 0.099234, 0.8881];
  error4 = [0.015956, 0.0017588, 0.0035702, 1.523, 0.034974, 0.0014538, 1.52E-08, 0.0021495, 0.0048428, 0.48072, 0.0013755, 0.057978, 5.8017, 1.2921, 0.13158, 0.98804];
  error5 = [0.022502, 0.013268, 0.0054352, 2.2143, 0.02858, 0.0018492, 1.73E-08, 0.0021214, 0.0068805, 0.55618, 0.0013772, 0.077604, 10.796, 7.596, 0.11658, 0.79803];
  error6 = [0.013399, 0.011254, 0.0041586, 1.6665, 0.018485, 0.002084, 1.91E-08, 0.0025544, 0.0043342, 0.39834, 0.00096641, 0.078951, 10.822, 7.6384, 0.17364, 1.136];

  error1 = createVectorError(error1, valores1);
  error2 = createVectorError(error2, valores2);
  error3 = createVectorError(error3, valores3);
  error4 = createVectorError(error4, valores4);
  error5 = createVectorError(error5, valores5);
  error6 = createVectorError(error6, valores6);

  console.log(error1);

  //formamos las trace para la data original
  var trace0 = {
    x: header,
    y: transformLogValues(originalValuePatient),
    name: 'Original Values',
    type: 'bar'
  };

  //formamos las trace
  var trace1 = {
    x: header,
    y: transformLogValues(valores1),
    name: 'Experimental Glucose +5%',
    type: 'bar',

    error_y: {
      type: 'data',
      symmetric: false,
      array: error1,
      arrayminus: error1
    }
  };

  //formamos las trace
  var trace2 = {
    x: header,
    y: transformLogValues(valores2),
    name: 'Experimental Glucose -5%',
    type: 'bar',

    error_y: {
      type: 'data',
      symmetric: false,
      array: error2,
      arrayminus: error2
    }
  };

  //formamos las trace
  var trace3 = {
    x: header,
    y: transformLogValues(valores3),
    name: 'Experimental Glucose +7%',
    type: 'bar',

    error_y: {
      type: 'data',
      symmetric: false,
      array: error3,
      arrayminus: error3
    }
  };

  //formamos las trace
  var trace4 = {
    x: header,
    y: transformLogValues(valores4),
    name: 'Experimental Glucose -7%',
    type: 'bar',

    error_y: {
      type: 'data',
      symmetric: false,
      array: error4,
      arrayminus: error4
    }
  };

  //formamos las trace
  var trace5 = {
    x: header,
    y: transformLogValues(valores5),
    name: 'Experimental Glucose +10%',
    type: 'bar',

    error_y: {
      type: 'data',
      symmetric: false,
      array: error5,
      arrayminus: error5
    }
  };

  //formamos las trace
  var trace6 = {
    x: header,
    y: transformLogValues(valores6),
    name: 'Experimental Glucose -10%',
    type: 'bar',

    error_y: {
      type: 'data',
      symmetric: false,
      array: error6,
      arrayminus: error6
    }
  };

  var data = [trace0, trace1, trace2, trace3, trace4, trace5, trace6];
  var layout = {
    barmode: 'group',
    title: '',
    yaxis:{
      title:'Parameter value in log10 scale'
    },

    xaxis:{
      title: 'Parameters of the mathematical model'
    },

    font:{
      size: 20
    }
  };

  Plotly.newPlot('barFull', data, layout);

});

function createVectorError(arrayError, arrayData){

  var arrayValues = [];

  for (i=0; i<arrayError.length; i++){
    arrayValues.push(arrayError[i]/arrayData[i]);
  }

  return arrayValues;
}

function transformLogValues(array){

    var arrayTransform = [];

    for (i=0; i<array.length; i++){
      arrayTransform.push(Math.log10(array[i]));
    }

    return arrayTransform;
}
