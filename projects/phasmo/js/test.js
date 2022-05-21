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

function checkEvidenceStatus(evBtn){
    console.log("checking...");
    console.log(evBtn);
    /*
    if($('.evBTN').hasClass("btn-primary")){
        $('.evBTN').removeClass("btn-primary");
        $('.evBTN').addClass("btn-success");
    }else if($('.evBTN').hasClass("btn-success")){
        $('.evBTN').removeClass("btn-success");
        $('.evBTN').addClass("btn-danger");
    }else if($('.evBTN').hasClass("btn-danger")){
        $('.evBTN').removeClass("btn-danger");
        $('.evBTN').addClass("btn-primary");
    }*/
}

$('.evBTN').on('click', function(evt){
    console.log("oh hello there");
    checkEvidenceStatus(this);
});