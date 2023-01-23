var GHOSTS_URL = "js/ghost.json";
var GHOSTS = [];
var EVIDENCE = [];
var EVIDENCE_SET = new Set();
var evBtnClass_neutral = "btn-outline-info";
var evBtnClass_active = "btn-info";
var evBtnClass_crossed = "btn-outline-danger";
var evBtnClass_disabled = "btn-secondary";

$(document).ready(function() {
    $('.evBTN').on('click', function(evt){
        let evBtnID = "#".concat(this.id);
        let evBtnValue = $(evBtnID).attr("value");

        updateEvidence(evBtnID, evBtnValue);
    });
    $('#resetBTN').on('click', resetEvidence);

    console.log("Update: rrr");
});

// fetching ghost info from json and storing in arrays
fetch(GHOSTS_URL)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        var temp = new Map();
        for(var i=0; i<data.length; i++){
            var ghostDiv = $("<div id="+removeSpaces(data[i].name)+" class='card col-12 col-md-6 col-lg-4'><div class=card-body><h4 class='card-title'>"+data[i].name+"</h4><div><table class='table table-dark table-bordered'><thead><tr><th value="+removeSpaces(data[i].evidence[0])+">"+data[i].evidence[0]+"</th><th value="+removeSpaces(data[i].evidence[1])+">"+data[i].evidence[1]+"</th><th value="+removeSpaces(data[i].evidence[2])+">"+data[i].evidence[2]+"</th></tr></thead></table></div><div class='card card-body meow'><p class='card-text'>"+data[i].desc+"</p><p class='card-text'><strong class='strengths'>Strengths:</strong> "+data[i].stren+"</p><p class='card-text'><strong class='weakness'>Weaknesses:</strong> "+data[i].weak+"</p></div></div></div>");
            $("#ghosts").append(ghostDiv);
            GHOSTS[i] = removeSpaces(data[i].name);
            EVIDENCE[i] = data[i].evidence;
            temp.set(removeSpaces(data[i].name), data[i].evidence);
        }
        console.log("Ghosts: "+GHOSTS);
        console.log("Evidence: "+EVIDENCE);
        console.log("temp: "+temp);
    });

// Remove spaces from the ghost names
function removeSpaces(v){
    var moo = String(v).replace(/\s/g, '');
    return moo;
}

// Update evidence ----------------------------------------------------------

function updateEvidence(evBtnID, evBtnValue){
    var selectedEvidence = [];
}

// Reset button -----------------------------------------------------
function resetEvidence(){
    // revert all evidence buttons back to normal
    $('.evBTN').removeClass(evBtnClass_active);
    $('.evBTN').removeClass(evBtnClass_crossed);
    $('.evBTN').addClass(evBtnClass_neutral);

    // revert all evidence labels to normal
    $('th').removeClass("table-info");

    // show all ghosts
    for(var i=0; i < GHOSTS.length; i++){
        $("#"+GHOSTS[i]).show();
    }
}


// Change evidence button appearance -----------------------------------------------------

function setEvidenceBtnNeutral(evBtnID){
    // If evidence button is crossed, switch to neutral
    $(evBtnID).removeClass(evBtnClass_crossed);
    $(evBtnID).addClass(evBtnClass_neutral);
}

function setEvidenceBtnActive(evBtnID){
    // If evidence button is neutral, switch to active
    $(evBtnID).removeClass(evBtnClass_neutral);
    $(evBtnID).addClass(evBtnClass_active);
}

function setEvidenceBtnCrossed(evBtnID){
    // If evidence button is active, switch to crossed
    $(evBtnID).removeClass(evBtnClass_active);
    $(evBtnID).addClass(evBtnClass_crossed);
}

// Set evidence label (ghost) states -----------------------------------------------------

function setEvidenceLabelsFound(evBtnValue){
    // Change appearance of matching ghost traits to crossed
    $("th[value|="+evBtnValue+"]").addClass("table-info");
}



// Set disabled evidence -----------------------------------------------------

function setEvidenceDisabled(evBtnValue){
    var possibleEvidence = new Set();

    if(possibleEvidence.has(evBtnValue)){
        $("button[value|="+evBtnValue+"]").prop( "disabled", false );
    }else{
        $("button[value|="+evBtnValue+"]").prop( "disabled", true );
    }
}