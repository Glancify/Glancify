$(document).ready(function(){
	var comming=[];
	var score=[];
	var matchdata=[];

	//matchdata matchdata[i].date = md.date;
	// matchdata[i].team1 = md.team-1;
	// matchdata[i].team2 = md.team-2;
	// matchdata[i].data = md.type;
	// if(md.matchStarted == true){
	// 	matchdata[i].status = true;
	// 	matchdata[i].toss_winner_team = md.toss_winner_team;

	//
	recentMatches(matchdata);
	// console.log(matchdata.length);

	for(var i=0;i<matchdata.length;++i){
		if(matchdata[i].status==true)
			scoredata(matchdata[i].id, score);
	}
	commingMatches(comming, 50);
	// console.log("shhow");
	show(matchdata,score);

});
function show(matchdata,score){
	for(var i=0;i<matchdata.length;++i){
		// console.log(matchdata[i].date);
		// console.log(matchdata[i].team1);
		// console.log(matchdata[i].team2);
		// console.log(matchdata[i].data);
		if(matchdata[i].status==true){
			// console.log(matchdata[i].toss_winner_team);
			// console.log(score[i].scor);
			// console.log(score[i].pubDate);
		}
		// console.log("da");
	}
	// console.log("dass");


}
function recentMatches(matchdata){
	var data;
	$.get("http://cricapi.com/api/matches?apikey=dD3IsklmZBhJfjg9AIeTAoUMThH2",function(response){
		/*	1123094
			date	"2017-11-13T00:00:00.000Z"
			team-2	"Guyana"
			team-1	"Leeward Islands"
			type	"First-class"
			dateTimeGMT	"2017-11-09T14:00:00.000Z"
			toss_winner_team	"Guyana"
			squad	false
			matchStarted*/
		data = response;
		// data = jQuery.parseJSON(response);
		response.matches.forEach(function(md){
			var i = matchdata.length;
			matchdata[i] = {};
			matchdata[i]["id"] = md.unique_id;
			matchdata[i].date = md.date;
			matchdata[i].team1 = md.team-1;
			matchdata[i].team2 = md.team-2;
			matchdata[i].data = md.type;
			if(md.matchStarted == true){
				matchdata[i].status = true;
				matchdata[i].toss_winner_team = md.toss_winner_team;

			}
			// console.log(md);
			// console.log(matchdata);
		});
		// console.log(data);
		// $('#card_cricbuzz').append('<br><center><B><font size="9">OnGoing</font></B></center><hr>');
		for(var i=49;i>=0;--i){

			// console.log(data["matches"][i].unique_id);
			// console.log(data["matches"][i].date);
			// console.log(data["matches"][i]["team-1"]);
			matchdata[i] = {};
			matchdata[i]["id"] = data["matches"][i].unique_id;
			matchdata[i].date = data["matches"][i]["date"];
			matchdata[i].team1 = data["matches"][i]["team-1"];
			matchdata[i].team2 = data["matches"][i]["team-2"];
			matchdata[i].data = data["matches"][i]["type"];
			if(data["matches"][i]["matchStarted"] == true){
				matchdata[i].status = true;
				matchdata[i].toss_winner_team = data["matches"][i]["toss_winner_team"];
			}
			// console.log("Show matchdata");

			console.log(matchdata[i]["id"]);
			console.log(matchdata[i]["date"]);
			console.log(matchdata[i]["team1"]);
			console.log(matchdata[i]["team2"]);
			console.log(matchdata[i]["data"]);
			console.log(matchdata[i]["status"]);

			if(matchdata[i]["status"]==true){
				console.log(matchdata[i]["toss_winner_team"]);
				var score =[];
				var d=scoredata(matchdata[i]["id"],score);
				console.log(d);
			}
			//<br><span style="font-size: 10px;margin-left: 15px;""><U>Match Type</U>:'+matchdata[i].data+'</span>
			///-------------------------------------------
			$('#card_cricbuzz').append('<div class="list"><p class="text-left" style="display: -webkit-inline-box;"><img src="Images/cricbuzz.png" class="img-responsive"><span class="heading"><U>Date</U>:<font size="2.5">'+matchdata[i].date+'</font><br><span style="font-size: 10px;margin-left: 15px;""><U>Team1</U>:'+matchdata[i].team1+'</span><br><span style="font-size: 10px;margin-left: 15px;""><U>Team2</U>:'+matchdata[i].team2+'</span></span><a href="http://www.cricbuzz.com/cricket-match/live-scores" target="_blank">...see...</a></p></div>');
			$('#card_cricbuzz').append('<hr>');

			// $('#card_cricbuzz').append('<div class="list"><p class="text-left" style="display: -webkit-inline-box;"><img src="Images/cricbuzz.png" class="img-responsive"><span class="heading"><U>Title</U>:'+matchCalendar[i].title+'<br><span style="font-size: 10px;margin-left: 15px;""><U>Date</U>:'+matchCalendar[i].date+'</span></span></p></div>')

		}
		// console.log(a);
		// console.log("__");
		// console.log(matchdata);

	});
}

function scoredata(id, score){
	$.getJSON("http://cricapi.com/api/cricketScore?apikey=dD3IsklmZBhJfjg9AIeTAoUMThH2&unique_id="+id, function(response){
		var i = score.length;
		score[i] = {};
		score[i].stat=response.stat;
		if(response.hasOwnProperty("score"))
			score[i].scor = response.score;
		score[i].pubDate=response.provider.pubDate;
		// console.log(response);
		return response;
	});
}

function commingMatches(comming,limit){
	var data ;
	$.getJSON("http://cricapi.com/api/matchCalendar?apikey=dD3IsklmZBhJfjg9AIeTAoUMThH2",function(response){
		data = response;
		response.data.forEach(function(md){
			var i = comming.length;
			comming[i] = {};
			comming[i].title = md.name;
			comming[i].date = md.date;
			if(i>limit)
				return false;
			// console.log(md);
		});

	});
	for (var i=0;i<20;++i){
		// console.log(data[i]);
	}
}
