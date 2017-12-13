var htmldata = ''
var data=[];
//console.log("quora");
$(document).ready(function() {
	$.get('https://github.com/notifications', function(data) {
		htmldata = ''+data;
		var repo_name=[]
		var repo_links=[]
		var notif_titles=[]
		var notif_links=[]

		var repos1=[]
		var repos2=[]
		var not = $(htmldata).find(".notification-center").each(function(){

		});
		console.log(not[0]);

		if(not[0]==undefined){
			// $('#card_github').append('<div class="list" margin: auto>Sorry you have to login first....<br><a href="https://github.com/login" target="_blank">Login..</a> </div><hr>');	
			$('#card_github').append('<div class="list" style="margin-top: 30%; margin-left:20px; font-size:17px"><br>Sorry! You have to login first...<br><a href="https://github.com/login" target="_blank"><center><span style="margin-left: -20px;">Login</span></center></a></div>');	
			
		}


		var not1 = $(not[0]).find(".gutter ul li").each(function(){

		});
		console.log(not1[0]);

		var count = $(not1[0]).find(".count").each(function(){

		});
		console.log(count[0].textContent);

		var notif = $(htmldata).find( ".notifications-list" ).each(function(){

		});
		console.log(notif[0]);

		var repoH3 = $(notif[0]).find("h3").each(function() {

		});
		console.log(repoH3);
		for (var i = 0; i < repoH3.length; i++) {
			repo_name[i] = repoH3[i].textContent
			repos1[i] = $(repoH3[i]).find("a").each(function() {

			});

			repo_links[i] = $(repos1[i][0]).attr('href');
		}

		var notificats = $(notif[0]).find(".list-group-item-link").each(function() {

		});
		for(var i=0; i<notificats.length; i++) {
			notif_titles[i] = notificats[i].textContent
			notif_links[i] = $(notificats[i]).attr('href');
		}

		console.log(notif_titles[0]);
		console.log(notif_titles[1]);
		console.log(notif_titles[2]);

		console.log(notif_links[0]);
		console.log(notif_links[1]);
		console.log(notif_links[2]);
		if(count[0].textContent==0){
			// $('#card_github').append('<div class="list">You have no Unread notifications..</div><hr>');
			$('#card_github').append('<div class="list" style="margin-top: 30%; margin-left:20px; font-size:17px"><br>You have no Unread notifications..</div>');	
			
			console.log("sdsd");
		}
		$('#card_github').append('<br>');
		for(var i=0; i<notif_titles.length; i++) {
			$('#card_github').append('<div class="list"><p class="text-left" style="display: -webkit-inline-box;"><img src="Images/github.png" class="img-responsive"><span class="heading"><B>'+notif_titles[i]+'</B><br><span style="font-size: 10px;margin-left: 15px;"><a href="'+notif_links[i]+'">See</a></span><br><span class="glyphicon glyphicon-link" aria-hidden="true"></span></span></p></div><hr>')
		}
//		console.log(notificats[0])
		// console.log(repo_name[0]);
		// console.log(repo_name[1]);
		// console.log(repo_links[0]);
		// console.log(repo_links[1]);

	});

	$.get('https://github.com/', function(data) {
		var dat = ''+data;
		// console.log('You are like a star');
		//console.log(data);
		var news = $(dat).find('.news').html();
		//console.log(news);
		var i =0;
		$(news).find('.flex-items-baseline ').each(function( index ) {
//  			console.log( index + ": " + $( this ).html() );
			// data.push($(this).text());
			i++;
			if(i>10)
				return false;
		});
	})


});