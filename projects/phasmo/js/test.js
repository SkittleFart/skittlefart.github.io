var GHOSTS_URL = "js/ghost.json";
var GHOSTS = [];
var EVIDENCE = [];
var TOTAL_EVIDENCE = ["EMF", "Box", "Writing", "DOTS", "Prints", "Orbs", "Temps"];
var FOUND_EVIDENCE = [];
var AVOID_EVIDENCE = [];
var DISABLED_EVIDENCE = [];
var POSSIBLE_GHOSTS = [];
var IMPOSSIBLE_GHOSTS = [];

$(document).ready(function() {
    $('.evBTN').on('click', function(evt){
        let evBtnID = "#".concat(this.id);
        let evBtnValue = $(evBtnID).attr("value");
        $("th[value|="+evBtnValue+"]").addClass("table-info");

        updateEvidence();
    });
    $('#resetBTN').on('click', resetEvidence);
});


// fetching ghost info from json and storing in arrays
fetch(GHOSTS_URL)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        //console.log(data[0].name);

        for(var i=0; i<data.length; i++){
            var ghostDiv = $("<div id="+data[i].name+" class='card card col-12 col-md-6 col-lg-4'><div class=card-body><h4 class='card-title'>"+data[i].name+"</h4><div><table class='table table-dark table-bordered'><thead><tr><th value="+removeSpaces(data[i].evidence[0])+">"+data[i].evidence[0]+"</th><th value="+removeSpaces(data[i].evidence[1])+">"+data[i].evidence[1]+"</th><th value="+removeSpaces(data[i].evidence[2])+">"+data[i].evidence[2]+"</th></tr></thead></table></div><div class='card card-body'><p class='card-text'>"+data[i].desc+"</p><p class='card-text'><strong>Strengths:</strong> "+data[i].stren+"</p><p class='card-text'><strong>Weaknesses:</strong> "+data[i].weak+"</p></div></div></div>");
            $("#ghosts").append(ghostDiv);
            GHOSTS[i] = data[i].name;
            EVIDENCE[i] = data[i].evidence;
        }
        console.log("Ghosts: "+GHOSTS);
        console.log("Evidence: "+EVIDENCE);
    });



function removeSpaces(v){
    var moo = String(v).replace(/\s/g, '');
    console.log("moo: "+moo);

    return moo;
}

function updateEvidence(){
    console.log("Hello World");
}

// Reset button -----------------------------------------------------
function resetEvidence(){
    
}