//var Mousetrap = require('mousetrap');
//var copy = require('clipboard-copy');

var Mousetrap = rezBundle.Mousetrap;
var copy = rezBundle.copy;


$(document).ready(function(){

//console.log( myData[0] );
//var myData = xsvr.locals.myData;
var sel1 = $("#sel1");
var selected_id;

sel1.attr("multiple", true).attr("size", 16);

//$("select option[value='0']").attr("selected","selected"); //.changed();

function doIt( filterData ){
	console.log("listen R2 they're dying")
		//sel1.selectedIndex
		selTx = $("#sel1 option:selected").val();
	selected_id = filterData[ selTx ]._id;
		//console.log( selTx );
	$("#myTitle").val( filterData[ selTx ].col_a );
	$("#myHK").val( filterData[ selTx ].col_b );
	$("#col2").html( filterData[ selTx ].col_c );
	$("#colD").html( filterData[ selTx ].col_d );
	$("#colE").html( filterData[ selTx ].col_e );
	$("#colF").html( filterData[ selTx ].col_f );
	$("#colG").html( filterData[ selTx ].col_g );
	$("#colH").html( filterData[ selTx ].col_h );

}

	doIt( myData ); //note... myData exists because in views_x1.ejs there is: <script>let myData = <%- JSON.stringify( data ) %>;</script>

//sel1.on("change", function() {console.log("nah holmes")} );
	var selTx;

	function saver( data ){ return function(){ doIt( data ); } }

	sel1.change( saver(myData) );


	$('#clr_btn').on('click', function () {

			console.log('clearing foo');

			$("#myTitle").val("");
			$("#myHK").val("");
			$("#col2").html("");
			$("#colD").html("");
			$("#colE").html("");
			$("#colF").html("");
			$("#colG").html("");
			$("#colH").html("");
			$("#colI").html("");
			$("#colJ").html("");

	});





	  $('#add_btn').on('click', function(){
		console.log('submitting yo');

		  //var item = $('#form1 input');
		  var my_x1 = {

				col_a: $("#myTitle").val(),
				col_b: $("#myHK").val(),
				col_c: $("#col2").val(),
				col_d: $("#colD").val(),
				col_e: $("#colE").val(),
				col_f: $("#colF").val(),
				col_g: $("#colG").val(),
				col_h: $("#colH").val(),
				col_i: $("#colI").val(),
				col_j: $("#colJ").val()
				};

		  $.ajax({
			type: 'POST',
			url: '/x1',
			data: my_x1,
			success: function(data){
			  //do something with the data via front-end framework
			  location.reload();
			}

		  });

		  return false;

	  });


		$("#del_btn").on('click', function(){
	      var item = selected_id; //$("#colH").val(); //$("#myTitle").attr('col_h'); //.replace(/ /g, "-");
		  console.log(item);
	      $.ajax({
	        type: 'DELETE',
	        url: '/x1' + item,
	        success: function(data){
	          //do something with the data via front-end framework
	          location.reload();

	        }
	      });
		});
		
	$('#filters').on('submit', function () {
		console.log('g-filter');
	});


//$( "#sel1 option:selected"
/*
  $('#form1').on('submit', function(){
	console.log('submitting yo');
      var item = $('#form1 input');
      var todoX = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/',
        data: todoX,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

   $('#form2').on('submit', function(){
	console.log('submitting 2 yo');
      var item = $('#form2 input');
      var todoX = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/form2',
        data: todoX,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).attr('name'); //.replace(/ /g, "-");
	  console.log(item);
      $.ajax({
        type: 'DELETE',
        url: '/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();

        }
      });
  });

  */

	var stage = new createjs.Stage("demoCanvas");
	var circle = new createjs.Shape();
	circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 30);
	circle.x = 30;
	circle.y = 30;
	stage.addChild(circle);
	stage.update();

	/*
	$.contextMenu({
		// define which elements trigger this menu
		selector: "#pork",
		// define the elements of the menu
		items: {
			foo: {name: "Foo", callback: function(key, opt){ alert("Foo!"); }},
			bar: {name: "Bar", callback: function(key, opt){ alert("Bar!") }}
		}
		// there's more, have a look at the demos and docs...
	});
		*/

});
