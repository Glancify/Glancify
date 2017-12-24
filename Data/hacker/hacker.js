var htmldata = ''
var data=[];
//console.log("quora");
$(document).ready(function() {
	$.get('https://www.hackerrank.com/contests', function(data) {
		htmldata = ''+data;
		var repo_name=[]
		var repo_links=[]
		var notif_titles=[]
		var notif_links=[]

		var repos1=[]
		var repos2=[]
		var not = $(htmldata).find(".contest-view").each(function(){

		});
		console.log(not[0]);
		var cont = $(not[0]).find(".active_contests").each(function(){

		});
		console.log(cont[0]);

		var cont2 = $(cont[0]).find("ul li").each(function(){

		});
		console.log(cont2[0]);

		for(var i=0;i<cont2.length;++i){
		console.log(cont2[i]);
		
		var nam = $(cont2[i]).find(".contest-name").each(function(){

		})
		console.log(nam[0].textContent);

		var status = $(cont2[i]).find(".contest-status").each(function(){

		})
		console.log(status[0]);

		var date = $(cont2[i]).find("meta").each(function(){

		})
		var strt,end,dur;
		if ($(date[0]).attr('content')!=undefined){
			// console.log($(date[0]).attr('content'));
			strt = $(date[0]).attr('content').substr(0,$(date[0]).attr('content').indexOf("T"));
			console.log("Start "+strt);
			end = $(date[1]).attr('content').substr(0,$(date[1]).attr('content').indexOf("T"));
			console.log("End "+end);

			dur = $(date[2]).attr('content').substr($(date[2]).attr('content').indexOf("T")+1,$(date[2]).attr('content').length);
			console.log(dur);

		}
		var lin = $(cont2[i]).find(".contest-item-buttons a").each(function(){

		})
		var link = "https://www.hackerrank.com/contests"+$(lin[0]).attr("href");
		console.log(link);
		//append here --------------------
		// $("#card_hacker").append('<div class="list"><p class="text-left" style="display: -webkit-inline-box;"><img src="Images/hackerrank.png" class="img-responsive"> <span class="heading">'+imgURL[i]['alt']+'<br><span style="font-size: 10px;margin-left: 15px;"><a href="'+link+'" target="_blank"> See..</a></span><br><span class="glyphicon glyphicon-link" aria-hidden="true"></span></span></p><p class="text-left">'+notifications[i].textContent+'<hr></div>');
		if(strt!=undefined){
			$("#card_hacker").append('<div class="list"><p class="text-left" style="display: -webkit-inline-box;"><img src="./Images/Hackerrank.png" class="img-responsive"><span class="heading">'+nam[0].textContent+'<br><span class="glyphicon glyphicon-link" aria-hidden="true"></span><span class ="link" style="font-size: 10px;"> <a href="'+link+'" target="_blank">See..</a></span></span></p><p class="text-left"><span>Start: </span><span style="margin-left: 15px;">'+strt+'</span><br><span>End:   </span><span style=" margin-left: 20px;">'+end+'</span><br><span>Duration: </span><span style=" margin-left: 20px;">'+dur+'</span><hr></p></div>');
		}
		else{
			$("#card_hacker").append('<div class="list"><p class="text-left" style="display: -webkit-inline-box;"><img src="Images/Hackerrank.png" class="img-responsive"><span class="heading">'+nam[0].textContent+'<br><span class="glyphicon glyphicon-link" aria-hidden="true"></span><span class ="link" style="font-size: 10px;"> <a href="'+link+'" target="_blank">See..</a></span></span></p><p class="text-left"><span>Status:   </span><span style=" margin-left: 20px;">'+status[0].textContent+'</span><hr></p></div>');
		}
	}
	})
	$.get('https://www.hackerrank.com/notifications',function(data){
		// console.log(data);
		var notify = $(data).find("div class").each(function(){

		});
		console.log(notify);
		for(var i=0;i<notify.length;++i)
		console.log(notify[i]);

		var cont = $(data).find("#content").each(function(){

		});
		console.log(cont);

	})
});