var GHOSTS_URL = "js/ghosttest.json";
var GHOSTS = [];
var EVIDENCE = [];
var TOTAL_EVIDENCE = ["EMF", "Box", "Writing", "DOTS", "Prints", "Orbs", "Temps"];
var FOUND_EVIDENCE = [];
var AVOID_EVIDENCE = [];

// fetching ghost info from json and storing in arrays
fetch(GHOSTS_URL)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        //console.log(data[0].name);

        for(var i=0; i<data.length; i++){
            GHOSTS[i] = data[i].name;
            EVIDENCE[i] = data[i].evidence;
        }
        console.log("Ghosts: "+GHOSTS);
        console.log("Evidence: "+EVIDENCE);
    });

function resetTotalEvidenceList(){
    TOTAL_EVIDENCE = ["EMF", "Box", "Writing", "DOTS", "Prints", "Orbs", "Temps"];
}

function resetFoundEvidenceList(){
    FOUND_EVIDENCE = [];
}

function resetAvoidEvidenceList(){
    AVOID_EVIDENCE = [];
}

function addToTotalEvidence(evBtnValue){
    TOTAL_EVIDENCE.push(evBtnValue);
}

function removeFromTotalEvidence(evBtnValue){
    var totalIndex = TOTAL_EVIDENCE.indexOf(evBtnValue);
    TOTAL_EVIDENCE.splice(totalIndex, 1);
}

function addToFoundEvidence(evBtnValue){
    FOUND_EVIDENCE.push(evBtnValue);
}

function removeFromFoundEvidence(evBtnValue){
    var foundIndex = FOUND_EVIDENCE.indexOf(evBtnValue);
    FOUND_EVIDENCE.splice(foundIndex, 1);
}

function addToAvoidEvidence(evBtnValue){
    AVOID_EVIDENCE.push(evBtnValue);
}

function removeFromAvoidEvidence(evBtnValue){
    var avoidIndex = AVOID_EVIDENCE.indexOf(evBtnValue);
    AVOID_EVIDENCE.splice(avoidIndex, 1);
}


// Button appearance functions -----------------
function changeEvidenceBtnAppearance(evBtnID){    
    if($(evBtnID).hasClass("btn-primary")){
        set_BtnFound(evBtnID);
    }else if($(evBtnID).hasClass("btn-success")){
        set_BtnAvoid(evBtnID);
    }else if($(evBtnID).hasClass("btn-danger")){
        set_BtnDefault(evBtnID);
    }
}

function set_BtnFound(evBtnID){
    $(evBtnID).removeClass("btn-primary");
    $(evBtnID).addClass("btn-success");
}

function set_BtnAvoid(evBtnID){
    $(evBtnID).removeClass("btn-success");
    $(evBtnID).addClass("btn-danger");
    $(evBtnID).addClass("crossed");
}

function set_BtnDefault(evBtnID){
    $(evBtnID).removeClass("btn-secondary");
    $(evBtnID).removeClass("btn-danger");
    $(evBtnID).removeClass("crossed");
    $(evBtnID).addClass("btn-primary");
}

function set_BtnDisabled(evBtnID){
    $(evBtnID).removeClass("btn-success");
    $(evBtnID).removeClass("btn-primary");
    $(evBtnID).removeClass("btn-danger");
    $(evBtnID).removeClass("crossed");
    $(evBtnID).addClass("btn-secondary");
}

function printEvidenceLists(){
    console.log("Total Evidence: "+TOTAL_EVIDENCE);
    console.log("Found Evidence: "+FOUND_EVIDENCE);
    console.log("Avoid Evidence: "+AVOID_EVIDENCE);
}


// On Evidence button click ------------------------
$('.evBTN').on('click', function(evt){
    var evBtnID = this.id;
    evBtnID = "#".concat(evBtnID);
    var evBtnValue = $(evBtnID).attr("value");

    var totalIndex = TOTAL_EVIDENCE.indexOf(evBtnValue);
    var foundIndex = FOUND_EVIDENCE.indexOf(evBtnValue);
    var avoidIndex = AVOID_EVIDENCE.indexOf(evBtnValue);

    if (totalIndex !== -1) {
        removeFromTotalEvidence(evBtnValue);
        addToFoundEvidence(evBtnValue);
    }else if(foundIndex !== -1){
        removeFromFoundEvidence(evBtnValue);
        addToAvoidEvidence(evBtnValue);
    }else if(avoidIndex !== -1){
        removeFromAvoidEvidence(evBtnValue);
        addToTotalEvidence(evBtnValue);
    }

    printEvidenceLists();
});