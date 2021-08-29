var GHOSTS_URL = "ghost.json";

fetch("/ghost.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        //console.log(data[0].name);

        for(var i=0; i<data.length; i++){
            var ghostDiv = $("<div id="+data[i].name+" class='ghostBox'><h6>"+data[i].name+"</h6><p>"+data[i].desc+"</p><p><strong>Strengths: </strong>"+data[i].stren+"</p><p><strong>Weaknesses: </strong>"+data[i].weak+"</p><p>"+data[i].evidence+"</p></div>");
            $("#ghostList").append(ghostDiv);
        }        
    });

// Evidence buttons
$('.evBTN').on('click', function(evt){
    console.log("count1: "+$("#ev1 .evBTN").length);
    console.log("count2: "+$("#ev2 .evBTN").length);
    console.log("count3: "+$("#ev3 .evBTN").length);
    if ($("#ev1 .evBTN").length == 0){ 
        console.log("testing");
        $('#ev1').append(this);
    }else if($("#ev2 .evBTN").length == 0){
        console.log("testing2");
        $('#ev2').append(this);
    }else if($("#ev3 .evBTN").length == 0){
        console.log("testing3");
        $('#ev3').append(this);
    }
    /*
    var newBTN = $(this);
    $('#ev1').append(newBTN);
    */
    //$('.evBTN').show();
    //$(this).hide();
}); 

// Reset button
$('#resetBTN').on('click', function(evt){
    $("#posEvidence").append($("#ev1 .evBTN"));
    $("#posEvidence").append($("#ev2 .evBTN"));
    $("#posEvidence").append($("#ev3 .evBTN"));
}); 

