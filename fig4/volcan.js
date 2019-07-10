$(function () {

  var porcentaje = [90.0000, 91.0000, 92.0000, 93.0000, 94.0000, 95.0000, 96.0000, 97.0000, 98.0000, 99.0000, 100.0000, 101.0000, 102.0000, 103.0000, 104.0000, 105.0000, 106.0000, 107.0000, 108.0000, 109.0000, 110.0000];

  var data1 = [200.12,185.1,174.86,159.68,150.61,141.38,133.18,125.63,118.5,113.27,100,106.97,107.86,112.01,116.05,119.78,126.49,132.21,138.99,144.82,151.11];
  var data2 = [371.19,333.79,299.8,267.2,233.79,203.75,176.27,151.11,129.31,113.25,100,122.31,138.33,163.69,183.14,208.87,235.21,262.17,289.34,316.84,345.35];
  var data3 = [326.81,301.28,273.72,248.88,224.51,201.18,178.9,157.02,136.26,116.94,100,108.86,120.1,134.31,150.72,168.53,187.89,208.47,223.29,244.33,266.26];
  var data4 = [615.74,560.15,503.82,446.52,384.97,335.57,286.54,247.34,190.37,145.89,100,152.67,203.36,278.01,348.08,434.99,519.98,604.12,713.88,846.88,955.27];
  var data5 = [138.84,134.4,130.08,125.88,121.8,117.84,113.99,110.23,106.6,103.09,100,106.62,108.72,110.98,111.44,113.84,116.31,118.83,121.4,123.99,126.6];
  var data6 = [546.1,496.49,448.04,400.73,354.52,309.99,265.96,223.91,180.98,139.86,100,134.92,172.8,209.32,246.23,282.6,319.44,357.68,392.61,420.31,453.89];
  var data7 = [101.16,101.03,100.9,100.77,100.64,100.52,100.39,100.27,100.15,100.05,100,104.79,104.73,104.66,104.6,104.54,104.49,104.43,104.38,104.34,104.29];
  var data8 = [523.27,479.2,436.1,393.39,351.46,307.74,265.16,222.74,180.52,138.99,100,143.38,187.44,232.05,277.04,322.61,369.53,415.04,461.85,509.04,556.58];
  var data9 = [159.95,153.38,146.85,141.32,134.9,127.52,121.19,114.95,108.89,103.79,100,106.05,112.24,118.4,124.53,130.63,136.71,142.77,148.8,154.8,160.78];
  var data10 = [778.81,660.4,548.59,452.14,372.95,306.21,252.46,208.58,162.67,126.33,100,114.3,158.44,198.8,248.16,301.52,358.16,421.84,491.49,574.93,651.61];
  var data11 = [272.57,244.14,223.63,203.35,184.67,166.21,152.93,137.43,124.56,114.93,100,104.77,108.39,117.43,126.61,139.86,154.29,169.68,181.85,199.71,215.92];
  var data12 = [2509.6,2256.3,1984,1700.8,1426.4,1144.5,860.74,588.22,339.51,191.92,100,193.34,344.56,541.96,835.43,1221.4,1642.2,2085.4,2549.2,3028.6,3552.1];
  var data13 = [107.84,105.84,105.86,105.61,105.43,105.28,105.18,105.1,105.05,104.61,100,100.03,100.09,100.17,100.26,100.38,100.49,101.63,104.1,103.93,103.96];

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

  trace1 = createTrace(data1, porcentaje, header[0]);
  trace2 = createTrace(data2, porcentaje, header[1]);
  trace3 = createTrace(data3, porcentaje, header[2]);
  trace4 = createTrace(data4, porcentaje, header[3]);
  trace5 = createTrace(data5, porcentaje, header[4]);
  trace6 = createTrace(data6, porcentaje, header[5]);
  trace7 = createTrace(data7, porcentaje, header[6]);
  trace8 = createTrace(data8, porcentaje, header[7]);
  trace9 = createTrace(data9, porcentaje, header[8]);
  trace10 = createTrace(data10, porcentaje, header[9]);
  trace11 = createTrace(data11, porcentaje, header[10]);
  trace12 = createTrace(data12, porcentaje, header[11]);
  trace13 = createTrace(data13, porcentaje, header[12]);

  var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12, trace13];

  var layout = {
    legend: {
      y: 0.5,
      font: {size: 16},
      yref: 'paper'
    },
    height: 600,
    yaxis: {
      range: [100, 200],
      autorange: false,
      title: 'Percentage variation of the error'
    },

    xaxis: {
      title: 'Percentage variation of the parameter'
    },

    font:{
      size: 16
    }
  };

  Plotly.newPlot('volcan', data, layout);

});

function createTrace(dataValues, percentage, name) {

  //hacemos las trace
  var trace = {
    x: percentage,
    y: dataValues,
    mode: 'lines+markers',
    name: name,
    line: {
      shape: 'spline'
    },
    type: 'scatter'
  };

  return trace;
}
