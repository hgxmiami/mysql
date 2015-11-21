
        
$.ajax({

    url: "http://localhost:5235/transactions",

    success: function(res){
    $('#info').append('<li>'+res[0].donation+'</li');
    $('#info').append('<li>'+res[0].id+'</li');
    $('#info').append('<li>'+res[0].sid+'</li');
    console.log(res[0].donation);
    console.log(res);
    },
    error: function(request, errortype, errorMessage){
        console.log("it is not working");   
    }
});

$("#btn-submit").on("click", function(){
                    console.log("it's working")
});

