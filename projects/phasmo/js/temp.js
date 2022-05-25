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


































// ------------------------------------------------------------------------

/* Button appearance functions */
// reset button function to reset all evidence buttons back to default
function resetEvidenceBtn(){
    // first set all button appearances back to default
    // evidence buttons
    $('.evBTN').removeClass("btn-success");
    $('.evBTN').removeClass("btn-danger");
    $('.evBTN').removeClass("crossed");
    $('.evBTN').removeClass("btn-secondary");
    $('.evBTN').addClass("btn-primary");
    // ghost buttons
    $('.ghostBTN').removeClass("btn-secondary");
    $('.ghostBTN').addClass("btn-primary");

    // then set found evidence list to empty
    resetEvidenceList();
}

// set evidence button to blue (possible evidence)
function setEvidenceDefault(evBtnID){
    $(evBtnID).removeClass("btn-secondary");
    $(evBtnID).removeClass("btn-danger");
    $(evBtnID).removeClass("crossed");
    $(evBtnID).addClass("btn-primary");
}

// set evidence button to green (found)
function setEvidenceFound(evBtnID){
    // changing the appearance of the button that was clicked
    $(evBtnID).removeClass("btn-primary");
    $(evBtnID).addClass("btn-success");

    // adding the assigned evidence of this button to the current evidence list
      
}

// mark evidence not likely
function setEvidenceCross(evBtnID){
    // set appearance of button to crossed out
    $(evBtnID).removeClass("btn-success");
    $(evBtnID).addClass("btn-danger");
    $(evBtnID).addClass("crossed");

    // remove the value of this evidence button from the current list of evidence
    
    // then add it to the avoid list
    
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
function changeEvidenceBtnAppearance(evBtnID){    
    if($(evBtnID).hasClass("btn-primary")){
        setEvidenceFound(evBtnID);
    }else if($(evBtnID).hasClass("btn-success")){
        setEvidenceCross(evBtnID);
    }else if($(evBtnID).hasClass("btn-danger")){
        setEvidenceDefault(evBtnID);
    }
}

// set ghost buttons back to default
function setGhostDefault(ghostID){
    $(ghostID).removeClass("btn-secondary");
    $(ghostID).addClass("btn-primary");
}

// set ghost buttons to impossible
function setGhostImpossible(ghostID){
    console.log("This ghost is not a match for this evidence");
    $(ghostID).removeClass("btn-primary");
    $(ghostID).addClass("btn-secondary");
}

// set the found evidence list to empty
function resetEvidenceList(){
    FOUND_EVIDENCE = [];
}

// add evidence value to found evidence list
function addFoundEvidence(evBtnValue){
    FOUND_EVIDENCE.push(evBtnValue);
}

// remove this evidence from the found evidence list
function removeFoundEvidence(evBtnID){
    var index = FOUND_EVIDENCE.indexOf($(evBtnID).attr("value"));
    if(index !== -1){
        FOUND_EVIDENCE.splice(index, 1);
    }
}

// add this evidence to the avoid list
function addAvoidEvidence(evBtnID){
    AVOID_EVIDENCE.push($(evBtnID).attr("value"));
}





// every time an evidence button is clicked
$('.evBTN').on('click', function(evt){
    var evBtnID = this.id;
    evBtnID = "#".concat(evBtnID);
    var evBtnValue = $(evBtnID).attr("value");

    // change appearance of button clicked
    changeEvidenceBtnAppearance(evBtnID);

    // --if evidence is found
    addFoundEvidence(evBtnValue);
    // gray out all ghosts that DON'T use found evidence
    for(var j=0; j<GHOSTS.length; j++){
        var ghostHasEvidence = false;
        for(var k=0; k<EVIDENCE[j].length; k++){
            for(var h=0; h<FOUND_EVIDENCE.length; h++){
                if(FOUND_EVIDENCE[h].localeCompare(EVIDENCE[j][k]) == 0){
                    ghostHasEvidence = true;
                }
            }
        }

        if(!ghostHasEvidence){
            // this will only run if this ghost does NOT contain the found evidence
            setGhostImpossible("#ghostBtn-"+GHOSTS[j]);
        }
    }
    // --if evidence is crossed out

    // gray out all ghosts that DO use found evidence













    // update ghost list depending on evidence selected
    /*
    for(var j=0; j<GHOSTS.length; j++){
        var evidenceFound = false;
        console.log("Ghost: "+GHOSTS[j]);
        for(var k=0; k<EVIDENCE[j].length; k++){
            console.log("Evidence "+k+": "+EVIDENCE[j][k]);
            for(var h=0; h<FOUND_EVIDENCE.length; h++){
                if(FOUND_EVIDENCE[h].localeCompare(EVIDENCE[j][k]) == 0){
                    console.log("match at "+j+" | "+k);// this code will only run if the evidence selected matches a ghost
                    evidenceFound = true;
                }
            }         
            
        }
        if(evidenceFound){
            // this will only run if the ghost is a match for current evidence
            console.log("This ghost is a match for this evidence")
        }else{
            // this will only run if the ghost is not a match for current evidence
            setGhostImpossible("#ghostBtn-"+GHOSTS[j]);
        }
    }*/
});