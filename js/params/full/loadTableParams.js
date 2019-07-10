
// Tables-DataTables.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -



$(window).on('load', function() {

	listarTable();

});
    // DATA TABLES
    // =================================================================
    // Require Data Tables
    // -----------------------------------------------------------------
    // http://www.datatables.net/
    // =================================================================

    $.fn.DataTable.ext.pager.numbers_length = 5;

    //listamos los datos...
		var listarTable = function(){

			var url = "../../php/params/full/getParamsTable.php";
	    var t = $('#paramsValues').DataTable({
	        "responsive": true,
					dom: 'Bfrtip',
	        buttons: [
	            'copyHtml5',
	            'excelHtml5',
	            'csvHtml5',
	            'pdfHtml5'
	        ],

					"destroy":true,
					"ajax":{
						"method":"POST",
						"url": url
					},

					"columns":[
						{"data":"idpaciente"},
						{"data":"edad"},
						{"data":"sexo"},
						{"data":"Kjs"},
						{"data":"Kgj"},
						{"data":"Klj"},
						{"data":"tau"},
						{"data":"Klg"},
						{"data":"Kxg"},
						{"data":"Kxgi"},
						{"data":"c"},
						{"data":"klambda"},
						{"data":"fgi"},
						{"data":"Kxi"},
						{"data":"gamma"},
						{"data":"beta"},
						{"data":"D"},
						{"data":"GB"},
						{"data":"IB"}

					]
	    });
	}
