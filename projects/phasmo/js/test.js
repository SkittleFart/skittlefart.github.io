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

$('.evBTN').on('click', function(evt){
    console.log("oh hello there");
    if(this.hasClass("btn-primary")){
        this.removeClass("btn-primary");
        this.addClass("btn-success");
    }else if(this.hasClass("btn-success")){
        this.removeClass("btn-success");
        this.addClass("btn-danger");
    }else if(this.hasClass("btn-danger")){
        this.removeClass("btn-danger");
        this.addClass("btn-primary");
    }
});