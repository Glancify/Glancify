var htmldata = ''
var no_of_li=0;

jQuery(function() {
	$.get('https://www.facebook.com/notifications', function(data) {
		htmldata = ''+data;
		console.log(data);
		// $('body').append($(htmldata).find('#stream-items-id').eq(0));
		//console.log(find('#stream-items-id'));
		// window.no_of_li = $("#stream-items-id > li").size();
		// alert(no_of_li);	




		
	});
});

 
// for( i = 1; i <= no_of_li; i++ ) {

// 	var newDiv = document.createElement('div');
// 	document.body.appendChild(newDiv);
// 	newDiv.style.width = "500px";
// 	newDiv.style.height = "500px";
// 	newDiv.style.background = "#77a4d4";
// 	newDiv.style.borderStyle = "solid";
// 	newDiv.style.borderWidth = "1px";
// 	newDiv.style.color = "blue";

// 	alert("alok");

// }
