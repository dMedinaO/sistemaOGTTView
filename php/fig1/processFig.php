<?php

  include("../connection.php");

  #hacemos la consulta para obtener toda la informacion asociada a la solicitud
  $query = "select  * from solicitudesFig1 where idsolicitudesFig1 in (select MAX(idsolicitudesFig1) from solicitudesFig1)";
  $resultado = mysqli_query($conexion, $query);

  $data = mysqli_fetch_assoc($resultado);

  $glucoseGroup = $data['grupoG'];#$_REQUEST['glucoseG'];
  $insulineGroup = $data['grupoI'];#$_REQUEST['insulineG'];
  $rangoGI = explode("-", $data['rangoGI']);
  $rangoGF = explode("-", $data['rangoGF']);
  $rangoII = explode("-", $data['rangoII']);
  $rangoIF = explode("-", $data['rangoIF']);

  #parametros para figura A1
  $rangeInitGlucose = $rangoGI[0];# $_REQUEST['rig'];
  $rangeInitGlucose2 = $rangoGI[1];
  $rangeFinGlucose = $rangoGF[0];#$_REQUEST['rfg'];
  $rangeFinGlucose2 = $rangoGF[1];#$_REQUEST['rfg'];

  #parametros para figura A2
  $rangeInitinsuline = $rangoII[0];#$_REQUEST['rii'];
  $rangeInitinsuline2 = $rangoII[1];#$_REQUEST['rii'];
  $rangeFinInsuline = $rangoIF[0];#$_REQUEST['rfi'];
  $rangeFinInsuline2 = $rangoIF[1];#$_REQUEST['rfi'];


  $responseFull = [];

  #hacemos las consultas correspondientes y formamos la respuesta con respecto a la informacion de interes
  $responseFigA1 = [];
  $query = "select * from glucoseM where glucoseM.gB >= $rangeInitGlucose AND glucoseM.gB <= $rangeInitGlucose2 AND glucoseM.g120 >= $rangeFinGlucose AND glucoseM.g120 <= $rangeFinGlucose2";

  #procesamos el resultado de la query
  $resultado = mysqli_query($conexion, $query);

	if (!$resultado){
		die("Error");
	}else{

    $index=0;
		while($data = mysqli_fetch_assoc($resultado)){

			$rowdata = [];
      $rowdata[0] = $data['gB'];
      $rowdata[1] = $data['g30'];
      $rowdata[2] = $data['g60'];
      $rowdata[3] = $data['g90'];
      $rowdata[4] = $data['g120'];
      $rowdata[5] = $data['idglucoseM'];
      $responseFigA1[$index] = $rowdata;
      $index+=1;
		}
	}

  $responseFull['figA1'] = $responseFigA1;


  $responseFigA2 = [];
  $query2 = "select * from insulineM where insulineM.iB >= $rangeInitinsuline AND insulineM.iB <= $rangeInitinsuline2 AND insulineM.i120 >= $rangeFinInsuline AND insulineM.i120 <= $rangeFinInsuline2";

  #procesamos el resultado de la query
  $resultado = mysqli_query($conexion, $query2);

	if (!$resultado){
		die("Error");
	}else{

    $index=0;
		while($data = mysqli_fetch_assoc($resultado)){

			$rowdata = [];
      $rowdata[0] = $data['iB'];
      $rowdata[1] = $data['i30'];
      $rowdata[2] = $data['i60'];
      $rowdata[3] = $data['i90'];
      $rowdata[4] = $data['i120'];
      $rowdata[5] = $data['idinsulineM'];
      $responseFigA2[$index] = $rowdata;
      $index+=1;
		}
	}

  $responseFull['figA2'] = $responseFigA2;

  #manipulamos la informacion con respecto al grupo de glucosa seleccionado
  $query = "select * from glucoseM join insulineM on (glucoseM.idglucoseM = insulineM.idinsulineM ) where glucoseM.idglucoseM in (select paciente.idpaciente from paciente join grupoPaciente on (paciente.idpaciente = grupoPaciente.paciente) join grupo on (grupo.idgrupo = grupoPaciente.grupo) where grupo.numberGrupo = '$glucoseGroup' AND grupo.tipoGrupo = 'GLUCOSE')";

  #procesamos el resultado de la query
  $resultado = mysqli_query($conexion, $query);

  $responseFig2A = [];

	if (!$resultado){
		die("Error");
	}else{

    $index=0;
		while($data = mysqli_fetch_assoc($resultado)){

			$rowdata = [];
      $rowdata[0] = $data['idglucoseM'];#id...
      $rowdata[1] = $data['gB'];
      $rowdata[2] = $data['g30'];
      $rowdata[3] = $data['g60'];
      $rowdata[4] = $data['g90'];
      $rowdata[5] = $data['g120'];

      $rowdata[6] = $data['iB'];
      $rowdata[7] = $data['i30'];
      $rowdata[8] = $data['i60'];
      $rowdata[9] = $data['i90'];
      $rowdata[10] = $data['i120'];

      $responseFig2A[$index] = $rowdata;
      $index+=1;
		}
	}

  $responseFull['fig2A'] = $responseFig2A;


  #manipulamos la informacion con respecto al grupo de insulina seleccionado
  $query = "select * from glucoseM join insulineM on (glucoseM.idglucoseM = insulineM.idinsulineM ) where glucoseM.idglucoseM in (select paciente.idpaciente from paciente join grupoPaciente on (paciente.idpaciente = grupoPaciente.paciente) join grupo on (grupo.idgrupo = grupoPaciente.grupo) where grupo.numberGrupo = '$insulineGroup' AND grupo.tipoGrupo = 'INSULINE')";

  #procesamos el resultado de la query
  $resultado = mysqli_query($conexion, $query);

  $responseFig2B = [];

	if (!$resultado){
		die("Error");
	}else{

    $index=0;
		while($data = mysqli_fetch_assoc($resultado)){

			$rowdata = [];
      $rowdata[0] = $data['idglucoseM'];#id...
      $rowdata[6] = $data['gB'];
      $rowdata[7] = $data['g30'];
      $rowdata[8] = $data['g60'];
      $rowdata[9] = $data['g90'];
      $rowdata[10] = $data['g120'];

      $rowdata[1] = $data['iB'];
      $rowdata[2] = $data['i30'];
      $rowdata[3] = $data['i60'];
      $rowdata[4] = $data['i90'];
      $rowdata[5] = $data['i120'];

      $responseFig2B[$index] = $rowdata;
      $index+=1;
		}
	}

  $responseFull['fig2B'] = $responseFig2B;

  echo json_encode($responseFull);


?>
