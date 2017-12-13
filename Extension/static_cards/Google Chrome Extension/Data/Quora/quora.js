var htmldata = ''
var data=[];
$(document).ready(function() {
	$.get('https://www.quora.com/notifications', function(data) {
		htmldata = ''+data;
		// console.log(htmldata);
		var imglink = $(htmldata).find( ".notif_item" ).each(function( index ) {
			// console.log(imglink);
		});
		console.log(imglink[0]);
		if(imglink[0]==undefined){
			// $('#card_quora').append('<div class="list"><br>Sorry You have to login first...<a href="https://www.quora.com/" target="_blank">Login..</a></div>');
			$('#card_quora').append('<div class="list" style="margin-top: 30%; margin-left:20px; font-size:17px"><br>Sorry! You have to login first...<br><a href="https://www.quora.com/" target="_blank"><center><span style="margin-left: -20px;">Login</span></center></a></div>');	

		}

		var link = $(htmldata).find(".overlay").each(function(){
		});

		// console.log("sad");
		//console.log(imglink);
		var a;
		var notifications =$(htmldata).find('.notif_title').each(function(data){
			//console.log(data);
			//console.log(time);
			//console.log(a);
		});
		//console.log(notifications);
		var time = $(notifications).find('.timestamp').each(function(data){
			//console.log($(this).html());
		});


		//photo
		var imgURL = $(imglink).find("img").each(function() {
			//	console.log($(this).attr('src'));
			//	console.log($(this).attr('alt'));
		});

		//console.log(imgURL);
		$('#card_quora').append('<br>');
		for(var i=0;i<imgURL.length;++i){
			data[i]={};
			//console.log("IMGURL")
			//console.log(imgURL[i]);
			//data[i].image = imgURL[i]['src'];
			//console.log(imgURL[i]['src']);
			//console.log(imgURL[i]['alt']);

			// 	console.log(notifications[i].textContent);

			//	console.log(link[i]);
			//	console.log($(link[i]).attr('href'));
			var linkToNotification = 'https://www.quora.com'+$(link[i]).attr('href');
			//	console.log("::"+linkToNotification);


			$('#card_quora').append('<div class="list"><p class="text-left" style="display: -webkit-inline-box;"><img src="'+imgURL[i]['src']+'" class="img-responsive"> <span class="heading">'+imgURL[i]['alt']+'<br><span style="font-size: 10px;margin-left: 15px;"><a href="'+linkToNotification+'" target="_blank"> See..</a></span><br><span class="glyphicon glyphicon-link" aria-hidden="true"></span></span></p><p class="text-left">'+notifications[i].textContent+'<hr></div>');
		}
	})

});