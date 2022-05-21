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
    evBtnID = "#".concat(evBtnID);
    
    if($(evBtnID).hasClass("btn-primary")){
        $(evBtnID).removeClass("btn-primary");
        $(evBtnID).addClass("btn-success");
        console.log("checking1");
    }else if($(evBtnID).hasClass("btn-success")){
        $(evBtnID).removeClass("btn-success");
        $(evBtnID).addClass("btn-danger");
        console.log("checking2");
    }else if($(evBtnID).hasClass("btn-danger")){
        $(evBtnID).removeClass("btn-danger");
        $(evBtnID).addClass("btn-primary");
        console.log("checking3");
    }
}

$('.evBTN').on('click', function(evt){
    console.log("oh hello there");
    checkEvidenceStatus(this.id);
});