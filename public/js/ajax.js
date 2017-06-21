var $author = $('#author');
var $title = $('#title');
var $description = $('#description');
var $results = $('#results');
var API_KEY = '96959cfac023468cbae49ac61eab7936';
var $urlToImage = $('#urlToImage');
var $url = $('#url');

var authorResults = "" +
	"<div>" +
	"<h1>{{author}}</h1>" +
	"<h2>{{title}}</h2>" +
	// "<img src= '{{urlToImage}}'>" +
	"<a href='{{url}}' target='_blank'><img src= '{{urlToImage}}'></a>" +
	"</div>";

var articleResults = "" +
	"<div>" +
	"<h1>{{title}}</h1>" +
	"<h2>{{author}}</h2>" +
	"<a href='{{url}}' target='_blank'><img src= '{{urlToImage}}'></a>" +
	"</div>";


function makeList(article){
	$results.append(Mustache.render(authorResults, article));
};
function makeList2(article){
	$results.append(Mustache.render(articleResults, article));
};

$(document).ready(function(){

	$('#authorList').on('click', function(){
		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey=' + API_KEY,
			success: (function(data){
				$.each(data.articles, function(i, dorko){
					makeList(dorko);
				});
			}),
			error: (function(){
				alert("Server Down!");
			})

		});
	});

	$('#titleList').on('click', function(){
		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey=' + API_KEY,
			success: (function(data){
				$.each(data.articles, function(i, data){
					makeList2(data);
				});
			}),
			error: (function(){
				alert("Server Down!");
			})
		});
	});

	// $.ajax({
	// 	type:'GET',
	// 	url:'https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey=' + API_KEY,	// use .done and .fail
	// })
		// success: (function(data){
		// 	$.each(data.articles, function(i,data){
		// 		makeList(data);
		// 	});
			
		// });
		// error: (function(){
		//  	alert("Server unresponsive");
		//  });






	console.log("Ajax loaded");
});



