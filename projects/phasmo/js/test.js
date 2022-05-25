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

function setFoundEvidence(){}

function setAvoidEvidence(){}

function setOpenEvidence(){}

function resetEvidence(){}


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


// On Evidence button click ------------------------
$('.evBTN').on('click', function(evt){
    var evBtnID = this.id;
    evBtnID = "#".concat(evBtnID);
    var evBtnValue = $(evBtnID).attr("value");

    var evIndex = TOTAL_EVIDENCE.indexOf(evBtnValue);
    if (evIndex !== -1) {
        TOTAL_EVIDENCE.splice(evIndex, 1);
        console.log("Evidence removed.");
        console.log("Total Evidence: "+TOTAL_EVIDENCE);
    }else{
        console.log("Evidence unaffected.");
        console.log("Total Evidence: "+TOTAL_EVIDENCE);
    }
});