<?php

  #metodo para establecer la conexion con la base de datos
  $server = "localhost";
	$user = "root";
	$password = "123ewq";//poner tu propia contraseña, si tienes una.
	$bd = "dbSistemaGI";

	$conexion = mysqli_connect($server, $user, $password, $bd);
	if (!$conexion){
		die('Error de Conexión: ' . mysqli_connect_errno());

	}
?>
