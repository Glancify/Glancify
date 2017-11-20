var htmldata = ''
console.log("quora");
$(document).ready(function() {
	$.get('https://www.quora.com/notifications', function(data) {
		htmldata = ''+data;
		// console.log('You are like a star');
		//console.log(data);
		
		$('#quora').append($(htmldata).find(".notif_item"));
		// $('body').append($(htmldata).find('#stream-items-id'));
		// // alert(data);
		// $(htmldata).find(".notif_item");
		// if(htmldata!==''){
		// 	$('#quora').append(htmldata);
		// }
		// else{
		// 	// $('#quora').append("<p>You have to login first</p>");
		// 	// window.open('https://twitter.com/login', '_blank');
		// }
		
	})
});
console.log("quora");

function printNotification() {

	//document.write(data);
}
