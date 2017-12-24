var htmldata = ''
var data=[];
//console.log("quora");
$(document).ready(function() {
	$.get('https://www.facebook.com/notifications', function(data) {
		htmldata = ''+data;
		// console.log(data);
 		var notif = $(htmldata).find( "#globalContainer" ).each(function(){

 		});
 		console.log(notif[0]);


 		var notif1 = $(notif[0]).find( ".UIStandardFrame_Container" ).each(function(){

 		});
 		console.log(notif1[0]);

		
// 		$('#card_github').append('<br>');
// 		for(var i=0; i<notif_titles.length; i++) {
// 			// $('#card_github').append('<div class="list"><p class="text-left" style="display: -webkit-inline-box;"><span class="heading">'+notif_titles[i]+'</span><br><span class="heading"><a href="'+notif_links[i]+'">See</a></span></p></div><hr>')
// 			$('#card_github').append('<div class="list"><p class="text-left" style="display: -webkit-inline-box;"><img src="Images/github.png" class="img-responsive"><span class="heading"><B>'+notif_titles[i]+'</B><br><span style="font-size: 10px;margin-left: 15px;"><a href="'+notif_links[i]+'">See</a></span><br><span class="glyphicon glyphicon-link" aria-hidden="true"></span></span></p></div><hr>')
// 		}
// //		console.log(notificats[0])
// 		// console.log(repo_name[0]);
// 		// console.log(repo_name[1]);
// 		// console.log(repo_links[0]);
// 		// console.log(repo_links[1]);

// 	});content-wrapper

	})
});