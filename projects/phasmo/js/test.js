var GHOSTS_URL = "js/ghost.json";

/* Button functions */
function resetEvidence(){

}

function evidenceFound(){

}

function evidenceCross(){

}

function evidenceDisable(){

}

$('.ghostBTN').on('click', function(evt){
    if(evt.hasClass("btn-primary")){
        evt.removeClass("btn-primary");
        evt.addClass("btn-success");
    }else if(evt.hasClass("btn-success")){
        evt.removeClass("btn-success");
        evt.addClass("btn-danger");
    }else if(evt.hasClass("btn-danger")){
        evt.removeClass("btn-danger");
        evt.addClass("btn-primary");
    }
});