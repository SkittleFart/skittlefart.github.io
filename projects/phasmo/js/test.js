var GHOSTS_URL = "js/ghost.json";

/* Button functions */
function resetEvidence(){

}

function evidenceFound(evBtn){

}

function evidenceCross(){

}

function evidenceDisable(){

}

function checkEvidenceStatus(evBtnID){
    console.log("checking...");
    console.log(evBtn.id);
    evBtnID = "#".concat(evBtnID);
    
    if($(evBtnID).hasClass("btn-primary")){
        $(evBtnID).removeClass("btn-primary");
        $(evBtnID).addClass("btn-success");
    }else if($(evBtnID).hasClass("btn-success")){
        $(evBtnID).removeClass("btn-success");
        $(evBtnID).addClass("btn-danger");
    }else if($(evBtnID).hasClass("btn-danger")){
        $(evBtnID).removeClass("btn-danger");
        $(evBtnID).addClass("btn-primary");
    }
}

$('.evBTN').on('click', function(evt){
    console.log("oh hello there");
    checkEvidenceStatus(this.id);
});