// be sure to include jquery
// be sure to replace <YOUR API KEY> with your actual api key

// $(document).ready(function() {
// 	$.getJSON("https://cricapi.com/api/cricket?apikey='dD3IsklmZBhJfjg9AIeTAoUMThH2'", function(matchdata) {
// 		matchdata.data.forEach(function(md) {
// 			console.log(md.description + " - to grab more details, simply use the unique_id " + md.unique_id + " with the cricketScore api!");
// 		});
// 	});	// body...
// });


//http://cricapi.com/api/cricketScore?unique_id=946765

//addEventListener

$(document).ready(function(){
  var comming=[];
  var score=[];
  var matchdata=[];

	// $.get("https://cricapi.com/api/cricket?apikey=dD3IsklmZBhJfjg9AIeTAoUMThH2", function(matchdata) {
	// 	matchdata.data.forEach(function(md) {
	// 		console.log(matchdata);

	// 		var i = recent.length;
	// 		console.log(md.description + " - to grab more details, simply use the unique_id " + md.unique_id + " with the cricketScore api!");
	// 		$('#content').append(md.description);
	// 		 // recent[i].id =  


	// 		// var na = document.createElement('a');
	// 		// na.setAttribute('href','http://cricapi.com/api/cricketScore?unique_id='+md.unique_id+'&apikey=dD3IsklmZBhJfjg9AIeTAoUMThH2');
	// 		// na.innerHTML='Scores';
	// 		// $('#content').append(na);
	// 		// $('#content').append('\n');

	// 		$('#link').on("click",function(response){
	// 			$('#content').innerHTML="";
	// 			$('#content').html("<h3>Score"+response+" </h3>");				
	// 		});


	// 	});
	// });
	recentMatches(matchdata);
	scoredata(1123094,score);
	commingMatches(comming, 100);

});
function recentMatches(matchdata){
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
			console.log(md);
		});
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
		console.log(response);
	});
}

function commingMatches(comming,limit){
	$.getJSON("http://cricapi.com/api/matchCalendar?apikey=dD3IsklmZBhJfjg9AIeTAoUMThH2",function(response){
		response.data.forEach(function(md){
			var i = comming.length;
			comming[i] = {};
			comming[i].title = md.name;
			comming[i].date = md.date;
			if(i>limit)
				return false; 
			console.log(md);
		});
	});
}



