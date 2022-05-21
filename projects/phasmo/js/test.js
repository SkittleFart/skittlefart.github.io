var GHOSTS_URL = "js/ghost.json";

/* Button functions */
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

function evidenceFound(btn){

}

function evidenceCross(btn){

}

function evidenceDisable(btn){

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
        $(evBtnID).addClass("crossed");
        console.log("checking2");
    }else if($(evBtnID).hasClass("btn-danger")){
        $(evBtnID).removeClass("btn-danger");
        $(evBtnID).removeClass("crossed");
        $(evBtnID).addClass("btn-primary");
        console.log("checking3");
    }
}

$('.evBTN').on('click', function(evt){
    console.log("oh hello there");
    checkEvidenceStatus(this.id);
});