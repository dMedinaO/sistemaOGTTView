$(document).ready(function() {

	$('#getValuesFigure').bootstrapValidator({
				feedbackIcons: {
						valid: 'glyphicon glyphicon-ok',
						invalid: 'glyphicon glyphicon-remove',
						validating: 'glyphicon glyphicon-refresh'
				},
				fields: {

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

      var grupoG = $("#getValuesFigure #grupoG").val();
			var grupoI = $("#getValuesFigure #grupoI").val();

			location.href="response.html?glucose="+grupoG+"&insuline="+grupoI;

    });
});
