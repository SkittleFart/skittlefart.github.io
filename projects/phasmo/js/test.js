var GHOSTS_URL = "js/ghost.json";

var tempEv = [["EMF 5", "Spirit Box", "Ghost Writing"],
              ["EMF 5", "Spirit Box", "DOTS"],
              ["Spirit Box", "Fingerprints", "DOTS"],
              ["Spirit Box", "Fingerprints", "Ghost Writing"],
              ["Fingerprints", "Ghost Orb", "DOTS"],
              ["EMF 5", "Fingerprints", "Freezing Temps"],
              ["Spirit Box", "Ghost Orb", "Ghost Writing"],
              ["Ghost Orb", "Ghost Writing", "Freezing Temps"],
              ["EMF 5", "Ghost Writing", "Freezing Temps"],
              ["Fingerprints", "Ghost Writing", "Freezing Temps"],
              ["Ghost Orb", "Freezing Temps", "DOTS"],
              ["EMF 5", "Freezing Temps", "DOTS"],
              ["Fingerprints", "Ghost Orb", "Freezing Temps"],
              ["Spirit Box", "Ghost Orb", "DOTS"],
              ["EMF 5", "Fingerprints", "DOTS"],
              ["EMF 5", "Fingerprints", "Ghost Writing"]
            ];

var GHOSTS = [];
var EVIDENCE = [];

fetch(GHOSTS_URL)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        //console.log(data[0].name);

        for(var i=0; i<data.length; i++){
            var ghostDiv = $("<div id="+data[i].name+" class='card col-lg-12'><div class=card-body><h5 class='card-title'>"+data[i].name+"</h5><ul class='list-group list-group-horizontal'><li class='list-group-item bg-secondary EV-"+data[i].evidence[0]+"'>"+data[i].evidence[0]+"</li><li class='list-group-item bg-secondary EV-"+data[i].evidence[1]+"'>"+data[i].evidence[1]+"</li><li class='list-group-item bg-secondary EV-"+data[i].evidence[2]+"'>"+data[i].evidence[2]+"</li></ul><div class='card card-body'><p class='card-text'>"+data[i].desc+"</p><p class='card-text'><strong>Strengths:</strong> "+data[i].stren+"</p><p class='card-text'><strong>Weaknesses:</strong> "+data[i].weak+"</p></div></div></div>");
            $("#ghostList").append(ghostDiv);
            GHOSTS[i] = data[i].name;
            EVIDENCE[i] = data[i].evidence;
        }
    });

Array.prototype.contains = function(v) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === v) return true;
    }
    return false;
};
    
Array.prototype.unique = function() {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        if (!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
};

$( document ).ready(function() {
    var newArr = [];

    for(var i=0; i<tempEv.length; i++){
        newArr = newArr.concat(tempEv[i]);
    }

    var availEv = newArr.unique();    

    console.log("availEv: "+availEv);

    /*
    for(var i=0; i<availEv.length; i++){
        var temp = String(availEv[i]);
        var evidenceListItem = $("<button type='button' class='evBTN btn btn-primary'>"+availEv[i]+"</button>");
        $('#posEvidence').append(evidenceListItem);
    }*/
    
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
                //console.log("this.text: "+$(this).text());
                //console.log("arrayText: "+EVIDENCE[j][k]);
                //console.log("thisGhost: "+GHOSTS[j]);
                if($(this).text().localeCompare(EVIDENCE[j][k]) == 0){
                    //console.log("Evidence is required");
                    evidenceFound = true;
                    $('.EV-'+EVIDENCE[j][k]).css("color", "darkgray");
                }else{
                    //console.log("Evidence is not required");
                }                
            }

            //console.log("Ghost: "+GHOSTS[j]);
            //console.log("evidenceFound: "+evidenceFound);
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
                    $('.EV-'+EVIDENCE[j][k]).css("color", "darkgray");
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
                    $('.EV-'+EVIDENCE[j][k]).css("color", "darkgray");
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

