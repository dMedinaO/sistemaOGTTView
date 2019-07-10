$(function () {

	listarStatisticParam();

});
    // DATA TABLES
    // =================================================================
    // Require Data Tables
    // -----------------------------------------------------------------
    // http://www.datatables.net/
    // =================================================================

    $.fn.DataTable.ext.pager.numbers_length = 5;

    //listamos los datos...
		var listarStatisticParam = function(){

			var url = "../../php/params/full/statisticParams.php";
	    var t = $('#statisticParams').DataTable({
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
						{"data":"param"},
						{"data":"min"},
						{"data":"max"},
						{"data":"avg"},
						{"data":"std"},
						{"data":"var"}
					]
	    });


	}
