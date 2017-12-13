var htmldata = ''
var data=[];
//console.log("quora");
$(document).ready(function() {
	$.get('https://www.codechef.com/', function(data) {
		htmldata = ''+data;
		// console.log(data);
 		var notif = $(htmldata).find( ".upcoming-contest" ).each(function(){

 		});
 		console.log(notif[0]);

		var notif1 = $(notif).find( "#upcoming-timer" ).each(function(){

 		});
 		console.log(notif1[0]);

 		 var contest = $(notif1).find(".timer").each(function(){

 		 });
 		  console.log(contest[0]);

 		 var name = $(notif1[0]).find("p").each(function(){

 		 });
 		 console.log(name[0]);
 		 
 		 var a =$(name[0]).find("a").each(function(){

 		 });
 		 //link and text date of upcomming contest
 		 var link = $(a).attr("href");
 		 console.log(link);
 		 var text = $(name[0]).text();
 		 console.log(text);

 		 var date = $(contest).find("li").each(function(){

 		 });
 		console.log(date[0]);
 		
 		console.log("sjdh");
 		var time = "";
 		 for(var i =0;i<contest.length;++i){
 		 	time+=contest[i].textContent;
 		 	time+=":";
 		 }
 		 console.log(time);
	})
	$.get('https://www.codechef.com/contests',function(data1){
		var html = ''+data1;
		//console.log(html);

		var content = $(html).find(".content-wrapper").each(function(){

		});
		console.log(content[0]);

		var table = $(content).find('div table').each(function(){

		});
		console.log(table);

		var ptabel = $(table[0]).find('tbody tr').each(function(){

		});
		console.log(ptabel[0]);


		//printing present contest
		for(var i=0;i<ptabel.length;++i){
			console.log(ptabel[i]);
			var ptd = $(ptabel[i]).find('td').each(function(){

			});
			console.log(ptd);
			var code,name,link,sdate,edate;
			code = ptd[0].textContent;//$(ptabel[i]).find('td')[0].textContent;
			link = 'https://www.codechef.com/'+ $(ptabel[i]).find('td a').attr("href");
			name = ptd[1].textContent;//$(ptabel[i]).find('td a').textContent;
			sdate =ptd[2].textContent;//$(ptabel[i]).find('td start_date').textContent;
			edate = ptd[3].textContent;//$(ptabel[i]).find('td end_date').textContent;
			console.log(code);
			console.log(name);
			console.log(link);
			console.log(sdate);
			console.log(edate);
			console.log("end");

			//append from here-----------for present contest
			$('#home').append('<div class="list"><p class="text-left" style="display: -webkit-inline-box;"><img src="Images/codeshef.png" class="img-responsive"><span class="heading">'+code+'<br><span class="text-left" style="font-size: 15px; margin-left: 15px;">'+name+'</span><br><span class="glyphicon glyphicon-link" aria-hidden="true"></span><span class ="link" style="font-size: 10px;"> <a href="'+link+'" target="_blank">See..</a></span></span></p><p class="text-left"><span>Start: </span><span style="margin-left: 15px;">'+sdate+'</span><br><span>End:   </span><span style=" margin-left: 20px;">'+edate+'</span><hr></p></div>');
		}

		var ftable = $(table[1]).find('tbody tr').each(function(){

		});

		//printing upcoming contest
		for(var i=0;i<ftable.length;++i){
			console.log(ftable[i]);
			var ptd = $(ftable[i]).find('td').each(function(){

			});
			console.log(ptd);
			var code,name,link,sdate,edate;
			code = ptd[0].textContent;//$(ptabel[i]).find('td')[0].textContent;
			link = 'https://www.codechef.com/'+ $(ptabel[i]).find('td a').attr("href");
			name = ptd[1].textContent;//$(ptabel[i]).find('td a').textContent;
			sdate =ptd[2].textContent;//$(ptabel[i]).find('td start_date').textContent;
			edate = ptd[3].textContent;//$(ptabel[i]).find('td end_date').textContent;
			// console.log(code);
			// console.log(name);
			// console.log(link);
			// console.log(sdate);
			// console.log(edate);
			// console.log("future");

			//append from here-----------for present contest
			$('#any').append('<div class="list"><p class="text-left" style="display: -webkit-inline-box;"><img src="Images/codeshef.png" class="img-responsive"><span class="heading">'+code+'<br><span class="text-left" style="font-size: 15px; margin-left: 15px;">'+name+'</span><br><span class="glyphicon glyphicon-link" aria-hidden="true"></span><span class ="link" style="font-size: 10px;"> <a href="'+link+'" target="_blank">See..</a></span></span></p><p class="text-left"><span>Start: </span><span style="margin-left: 15px;">'+sdate+'</span><br><span>End:   </span><span style=" margin-left: 20px;">'+edate+'</span><hr></p></div>');

		}


	})
});