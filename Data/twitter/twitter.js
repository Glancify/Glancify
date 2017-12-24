var htmldata = ''
var no_of_li=0;

$(function() {
	$.get('https://twitter.com/i/notifications', function(data) {
		htmldata = ''+data;
		//console.log(data);
		
		var acitivity = $(htmldata).find(".ActivityItem").each(function(){
			// console.log($(this).html());
		});
		console.log(acitivity[0]);
		if(acitivity[0]==undefined){
			$('#card_twitter').append('<div class="list" style="margin-top: 30%; margin-left:20px; font-size:17px"><br>Sorry! You have to login first...<br><a href="https://twitter.com/login?lang=en" target="_blank"><center><span style="margin-left: -20px;">Login</span></center></a></div>');	
		}
		var act2 = $(acitivity[0]).find('.ActivityItem-icon').each(function(){

		});
		// console.log(act2);
		var text = $(acitivity.find('.ActivityItem-displayText')).each(function(){

		});
		console.log(text[0].textContent);

		//content text[i].textContent

		var faces = $(htmldata).find(".ActivityItem-facepileContainer").each(function(){

		});


		console.log(faces[1]);

		var imag = $(faces).find("img").each(function(){

		});
		console.log(imag[1]['src']);
		//faces faces[i]['src']
		var imgarray = $(imag).find("li").each(function(){

		});
		console.log(imgarray);


		var time = $(acitivity).find(".ActivityItem-activityTimestamp").each(function(){

		});
		console.log(time[0].textContent);
		$('#card_twitter').append('<br>');
		console.log("time");
		// console.log(htmldata);
		if(time[0]!=undefined){
			for(var i=0;i<time.length;++i){
		 	
				console.log(time[i].textContent);
				console.log(text[i].textContent);
				console.log(imag[i]['src']);
				$('#card_twitter').append('<div class="list"	><p class="text-left" style="display: -webkit-inline-box;"><img src="'+imag[i]['src']+'" class="img-responsive"> <span class="heading">'+imag[i]['alt']+'<br><span style="font-size: 10px;margin-left: 15px;">'+time[i].textContent+'</span><br><span class="glyphicon glyphicon-link" aria-hidden="true"></span></span></p><p class="text-left">'+text[i].textContent+'<a href="https://twitter.com/i/notifications" target="_blank"> see..</a><hr></div>');
		
			}
		}
		// else{$('#card_twitter').append('<div class="list"><h2>Sorry... You should Login first</h2><a href="https://twitter.com/login?lang=en" target="_blank"> login to twitter..</a><hr></div>');	
		// }
		
	})
});
