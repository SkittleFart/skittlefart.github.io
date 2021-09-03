var GHOSTS_URL = "js/ghost.json";

var GHOSTS = [];
var EVIDENCE = [];

fetch(GHOSTS_URL)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        //console.log(data[0].name);

        for(var i=0; i<data.length; i++){
            var ghostDiv = $("<div id="+data[i].name+" class='ghostBox'><h6>"+data[i].name+"</h6><p>"+data[i].desc+"</p><p><strong>Strengths: </strong>"+data[i].stren+"</p><p><strong>Weaknesses: </strong>"+data[i].weak+"</p><p class='evidence'>"+data[i].evidence[0]+"</p><p class='evidence'>"+data[i].evidence[1]+"</p><p class='evidence'>"+data[i].evidence[2]+"</p></div>");
            $("#ghostList").append(ghostDiv);
            GHOSTS[i] = data[i].name;
            EVIDENCE[i] = data[i].evidence;
        }
    });

// Evidence buttons
$('.evBTN').on('click', function(evt){
    console.log("GHOSTS: "+GHOSTS);
    console.log("EVIDENCE:"+EVIDENCE);

    if ($("#ev1 .evBTN").length == 0){ 
        $('#ev1').append(this);

        // scan ghosts to eliminate potential options
        for(var j=0; j<GHOSTS.length; j++){
            var evidenceFound = false;
            for(var k=0; k<EVIDENCE[j].length; k++){
                //console.log("Evidence["+j+"]["+k+"]: "+EVIDENCE[j][k]);
                console.log("this.text: "+$(this).text());
                console.log("arrayText: "+EVIDENCE[j][k]);
                console.log("thisGhost: "+GHOSTS[j]);
                if($(this).text().localeCompare(EVIDENCE[j][k]) == 0){
                    console.log("Evidence is required");
                    evidenceFound = true;
                }else{
                    console.log("Evidence is not required");
                }                
            }

            console.log("Ghost: "+GHOSTS[j]);
            console.log("evidenceFound: "+evidenceFound);
            if(!evidenceFound){
                $('#'+GHOSTS[j]).hide();
            }
        }
    }else if($("#ev2 .evBTN").length == 0){
        $('#ev2').append(this);

        // scan ghosts to eliminate potential options
        for(var j=0; j<GHOSTS.length; j++){
            var evidenceFound = false;
            for(var k=0; k<EVIDENCE[j].length; k++){
                //console.log("Evidence["+j+"]["+k+"]: "+EVIDENCE[j][k]);
                console.log("this.text: "+$(this).text());
                console.log("arrayText: "+EVIDENCE[j][k]);
                console.log("thisGhost: "+GHOSTS[j]);
                if($(this).text().localeCompare(EVIDENCE[j][k]) == 0){
                    console.log("Evidence is required");
                    evidenceFound = true;
                }else{
                    console.log("Evidence is not required");
                }                
            }

            console.log("Ghost: "+GHOSTS[j]);
            console.log("evidenceFound: "+evidenceFound);
            if(!evidenceFound){
                $('#'+GHOSTS[j]).hide();
            }
        }
    }else if($("#ev3 .evBTN").length == 0){
        $('#ev3').append(this);

        // scan ghosts to eliminate potential options
        for(var j=0; j<GHOSTS.length; j++){
            var evidenceFound = false;
            for(var k=0; k<EVIDENCE[j].length; k++){
                //console.log("Evidence["+j+"]["+k+"]: "+EVIDENCE[j][k]);
                console.log("this.text: "+$(this).text());
                console.log("arrayText: "+EVIDENCE[j][k]);
                console.log("thisGhost: "+GHOSTS[j]);
                if($(this).text().localeCompare(EVIDENCE[j][k]) == 0){
                    console.log("Evidence is required");
                    evidenceFound = true;
                }else{
                    console.log("Evidence is not required");
                }                
            }

            console.log("Ghost: "+GHOSTS[j]);
            console.log("evidenceFound: "+evidenceFound);
            if(!evidenceFound){
                $('#'+GHOSTS[j]).hide();
            }
        }
    }
}); 

// Reset button
$('#resetBTN').on('click', function(evt){
    $("#posEvidence").append($("#ev1 .evBTN"));
    $("#posEvidence").append($("#ev2 .evBTN"));
    $("#posEvidence").append($("#ev3 .evBTN"));
    for(var j=0; j<GHOSTS.length; j++){
        $('#'+GHOSTS[j]).show();
    }
}); 

