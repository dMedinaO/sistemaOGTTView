<?php

  include("../connection.php");
  include("../checkResultDB.php");

  #recibimos los parametros...
  $rangoGI = $_REQUEST['rangoGI'];
  $rangoGF = $_REQUEST['rangoGF'];
  $rangoII = $_REQUEST['rangoII'];
  $rangoIF = $_REQUEST['rangoIF'];
  $grupoG = $_REQUEST['grupoG'];
  $grupoI = $_REQUEST['grupoI'];

  $query = "insert into solicitudesFig1 values (NULL, '$rangoGI', '$rangoGF', '$rangoII', '$rangoIF', '$grupoG', '$grupoI')";
  $resultado = mysqli_query($conexion, $query);
  $requestData = verificar_resultado($resultado);

  if ($requestData == "BIEN"){#movemos el archivo de tmp al path del usuario y ejecutamos el proceso solo si la opcion de algorithm es todos...

    $response['exec'] = "OK";

  }else{
    $response['exec'] = "ERROR";
  }

  echo json_encode($response);

?>
