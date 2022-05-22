var GHOSTS_URL = "js/ghosttest.json";

/* Button functions */
// reset button function to reset all evidence buttons back to default
function resetEvidence(){
    var evidenceCounter = 7
    for(var i=1; i<=evidenceCounter; i++){
        if($('#evBtn-'+i).hasClass("btn-success")){
            $('#evBtn-'+i).removeClass("btn-success");
            $('#evBtn-'+i).addClass("btn-primary");
        }
        if($('#evBtn-'+i).hasClass("btn-danger")){
            $('#evBtn-'+i).removeClass("btn-danger");
            $('#evBtn-'+i).removeClass("crossed");
            $('#evBtn-'+i).addClass("btn-primary");
        }
    }
}

// mark evidence not yet found (default)
function setEvidenceDefault(evBtnID){
    $(evBtnID).removeClass("btn-secondary");
    $(evBtnID).removeClass("btn-danger");
    $(evBtnID).removeClass("crossed");
    $(evBtnID).addClass("btn-primary");
    console.log("evidence possible");
}

// mark evidence found
function setEvidenceFound(evBtnID){
    $(evBtnID).removeClass("btn-primary");
    $(evBtnID).addClass("btn-success");
    console.log("evidence found");
}

// mark evidence not likely
function setEvidenceCross(evBtnID){
    $(evBtnID).removeClass("btn-success");
    $(evBtnID).addClass("btn-danger");
    $(evBtnID).addClass("crossed");
    console.log("evidence crossed out");
}

// mark evidence impossible
function setEvidenceDisable(evBtnID){
    $(evBtnID).removeClass("btn-success");
    $(evBtnID).removeClass("btn-primary");
    $(evBtnID).removeClass("btn-danger");
    $(evBtnID).removeClass("crossed");
    $(evBtnID).addClass("btn-secondary");
    console.log("evidence impossible");
}

function checkEvidenceStatus(evBtnID){
    console.log("checking...");
    evBtnID = "#".concat(evBtnID);
    
    if($(evBtnID).hasClass("btn-primary")){
        setEvidenceFound(evBtnID);
    }else if($(evBtnID).hasClass("btn-success")){
        setEvidenceCross(evBtnID);
    }else if($(evBtnID).hasClass("btn-danger")){
        setEvidenceDefault(evBtnID);
    }
}

// 
$('.evBTN').on('click', function(evt){
    console.log("oh hello there");
    checkEvidenceStatus(this.id);
});