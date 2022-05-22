var GHOSTS_URL = "js/ghosttest.json";
var GHOSTS = [];
var EVIDENCE = [];
var FOUND_EVIDENCE = [];

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

/* Button functions */
// reset button function to reset all evidence buttons back to default
function resetEvidence(){
    FOUND_EVIDENCE = [];
    var evidenceCounter = 7;
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
    // changing the appearance of the button that was clicked
    $(evBtnID).removeClass("btn-primary");
    $(evBtnID).addClass("btn-success");

    // adding the assigned evidence of this button to the current evidence list
    FOUND_EVIDENCE.push($(evBtnID).attr("value"));
    console.log("Current evidence list: "+FOUND_EVIDENCE);
}

// mark evidence not likely
function setEvidenceCross(evBtnID){
    // changing the appearance of the button that was clicked
    $(evBtnID).removeClass("btn-success");
    $(evBtnID).addClass("btn-danger");
    $(evBtnID).addClass("crossed");

    // remove the value of this evidence button from the current list of evidence
    var index = FOUND_EVIDENCE.indexOf($(evBtnID).attr("value"));
    if(index !== -1){
        FOUND_EVIDENCE.splice(index, 1);
    }
    console.log("Current evidence list: "+FOUND_EVIDENCE);
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

// check evidence button status
function checkEvidenceStatus(evBtnID){    
    if($(evBtnID).hasClass("btn-primary")){
        setEvidenceFound(evBtnID);
    }else if($(evBtnID).hasClass("btn-success")){
        setEvidenceCross(evBtnID);
    }else if($(evBtnID).hasClass("btn-danger")){
        setEvidenceDefault(evBtnID);
    }
}

function setGhostDefault(ghostID){}

function setGhostImpossible(ghostID){}

// every time an evidence button is clicked
$('.evBTN').on('click', function(evt){
    var evBtnID = this.id;
    evBtnID = "#".concat(evBtnID);

    var IDvalue = $(evBtnID).attr("value");

    // change appearance of button clicked and assign or remove evidence
    checkEvidenceStatus(evBtnID);

    // update ghost list depending on evidence selected
    for(var j=0; j<GHOSTS.length; j++){
        var evidenceFound = false;
        console.log("Ghost: "+GHOSTS[j]);
        for(var k=0; k<EVIDENCE[j].length; k++){
            console.log("Evidence "+k+": "+EVIDENCE[j][k]);            
            if(IDvalue.localeCompare(EVIDENCE[j][k]) == 0){
                console.log("match at "+j+" | "+k);// this code will only run if the evidence selected matches a ghost
                evidenceFound = true;
            }
            /*
            if(IDvalue.localeCompare(EVIDENCE[j][k]) !== 0){
                console.log("ghost not possible");// this code will only run if the evidence selected does not match a ghost
            }*/
        }
        if(!evidenceFound){
            console.log("This ghost is a match for this evidence")
        }
    }
});

