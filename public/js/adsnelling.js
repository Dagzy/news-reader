$(document).ready(function(){

    var API_KEY = '00c420fa304d4d58847afdc5cb24bbb0';

    $('#listauthor').on('click', function(){

        
        $(".articleblock").remove();

        var API_KEY = '00c420fa304d4d58847afdc5cb24bbb0';
        $.ajax({
            type: 'GET',
            url:'https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey='+API_KEY,
            success: (function(data){
                $.each(data.articles, function(i,data){
                    printArticle(data);
                });
                
            }),
            error: function(){
                alert("Hey man the server messed up...");
            }
        });
        

    });
//END Function
    $('#listtitle').on('click', function(){
        //here add function that checks if there are html elements inside #listtitle
        
       $(".articleblock").remove();


        $.ajax({
            type: 'GET',
            url:'https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey='+API_KEY,
            success: (function(data){
                $.each(data.articles, function(i,data){
                    printArticleTwo(data);
                });
                
            }),
            error: function(){
                alert("Hey man the server messed up...");
            }
        });
        

    });