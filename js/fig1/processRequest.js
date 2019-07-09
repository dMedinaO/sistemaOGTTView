$(document).ready(function() {

	$('#getValuesFigure').bootstrapValidator({
				feedbackIcons: {
						valid: 'glyphicon glyphicon-ok',
						invalid: 'glyphicon glyphicon-remove',
						validating: 'glyphicon glyphicon-refresh'
				},
				fields: {
						rangoGI: {
								validators: {
										notEmpty: {
												message: 'El rango inicial de glucosa es obligatorio'
										}
								}
						},

						rangoGF: {
								validators: {
										notEmpty: {
												message: 'El rango final de glucosa es obligatorio'
										}
								}
						},

						rangoII: {
								validators: {
										notEmpty: {
												message: 'El rango inicial de insulina es obligatorio'
										}
								}
						},

						rangoIF: {
								validators: {
										notEmpty: {
												message: 'El rango final de insulina es obligatorio'
										}
								}
						},

						grupoG: {
								validators: {
										notEmpty: {
												message: 'El grupo de glucosa es obligatorio'
										}
								}
						},

						grupoI: {
								validators: {
										notEmpty: {
												message: 'El grupo de insulina es obligatorio'
										}
								}
						}
				}
		}).on('success.form.bv', function(e) {
			e.preventDefault();
			$('#loading').show();
			var rangoGI = $("#getValuesFigure #rangoGI").val();
			var rangoGF = $("#getValuesFigure #rangoGF").val();
			var rangoII = $("#getValuesFigure #rangoII").val();
			var rangoIF = $("#getValuesFigure #rangoIF").val();
      var grupoG = $("#getValuesFigure #grupoG").val();
			var grupoI = $("#getValuesFigure #grupoI").val();

			$.ajax({
					method: "POST",
					url: "../php/fig1/saveRequest.php",
					data: {
						"rangoGI"   : rangoGI,
						"rangoGF"   : rangoGF,
						"rangoII" : rangoII,
						"rangoIF"   : rangoIF,
						"grupoG"   : grupoG,
						"grupoI" : grupoI

					}
				}).done( function( info ){
					var response = JSON.parse(info);

					if (response.exec== "ERROR"){
						$('#loading').hide();
						$('#errorResponse').show();
						setTimeout("location.href=''", 5000);
					}else{
						location.href="response.html";
					}
				});
    });
});
