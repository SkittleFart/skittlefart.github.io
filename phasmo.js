var GHOSTS_URL = "ghost.json";

var testGhosts = '{"name": "Spirit","desc": "A spirit is the most common Ghost you will come across, however it is still very powerful and dangerous. They are usually discovered at one of their hunting grounds after an unexplained death.", "stren": "Nothing", "weak": "Using Smudge Sticks on a Spirit will stop it from attacking for a long period of time.", "evidence": ["EMF 5", "Spirit Box", "Ghost Writing"]}';

var ghosts = JSON.parse(testGhosts);

fetch("/ghost.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        //console.log(data[0].name);

        for(var i=0; i<data.length; i++){
            var ghostDiv = $("<div id="+data[i].name+" class='ghostBox'><h6>"+data[i].name+"</h6><p>"+data[i].desc+"</p><p><strong>Strengths: </strong>"+data[i].stren+"</p><p><strong>Weaknesses: </strong>"+data[i].weak+"</p><p class='evidence1'>"+data[i].evidence[0]+"</p><p class='evidence2'>"+data[i].evidence[1]+"</p><p class='evidence3'>"+data[i].evidence[2]+"</p></div>");
            $("#ghostList").append(ghostDiv);
        }
    });

// Evidence buttons
$('.evBTN').on('click', function(evt){
    /*
    console.log("count1: "+$("#ev1 .evBTN").length);
    console.log("count2: "+$("#ev2 .evBTN").length);
    console.log("count3: "+$("#ev3 .evBTN").length);
    console.log("testJSON: "+ghosts.evidence[0]);
    console.log("buttonText: "+ $(this).text());
    */
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

