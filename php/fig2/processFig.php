<?php

  include("../connection.php");

  $glucoseGroup = $_REQUEST['grupoG'];#$_REQUEST['glucoseG'];
  $insulineGroup = $_REQUEST['grupoI'];#$_REQUEST['insulineG'];

  $responseFull = [];

  #manipulamos la informacion con respecto al grupo de insulina seleccionado
  $query = "select * from glucoseM join insulineM on (glucoseM.idglucoseM = insulineM.idinsulineM) where glucoseM.idglucoseM in (select paciente.idpaciente from paciente join grupoPaciente on (paciente.idpaciente = grupoPaciente.paciente) join grupo on (grupo.idgrupo = grupoPaciente.grupo) where grupo.idgrupo in (select grupo.idgrupo from grupo where grupo.numberGrupo = '$insulineGroup' AND grupo.tipoGrupo = 'INSULINE') AND paciente.idpaciente in (select paciente.idpaciente from paciente join grupoPaciente on (paciente.idpaciente = grupoPaciente.paciente) join grupo on (grupo.idgrupo = grupoPaciente.grupo) where grupo.idgrupo in (select grupo.idgrupo from grupo where grupo.numberGrupo = '$glucoseGroup' AND grupo.tipoGrupo = 'GLUCOSE')))";

  #procesamos el resultado de la query
  $resultado = mysqli_query($conexion, $query);

  $responseValues = [];

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

      $responseValues[$index] = $rowdata;
      $index+=1;
		}
	}

  $responseFull['response'] = $responseValues;

  echo json_encode($responseFull);


?>
