var GHOSTS_URL = "js/ghost.json";
var GHOSTS = [];
var EVIDENCE = [];
var COMPLETE_SET = new Set();
var IS_MATCH = new Map();
var evBtnClass_neutral = "btn-outline-info";
var evBtnClass_active = "btn-info";
var evBtnClass_crossed = "btn-outline-danger";
var evBtnClass_disabled = "btn-secondary";

var selectedEvidence = new Set();
var crossedEvidence = new Set();
var possibleEvidence = new Set();

$(document).ready(function() {
    $('.evBTN').on('click', function(evt){
        let evBtnID = "#".concat(this.id);
        let evBtnValue = $(evBtnID).attr("value");
        let evBtnText = $(evBtnID).text();

        updateEvidence(evBtnID, evBtnValue, evBtnText);
    });
    $('#resetBTN').on('click', resetEvidence);

    console.log("Update: rrr");
});

// fetching ghost info from json and storing in arrays
fetch(GHOSTS_URL)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        var temp = new Map();
        for(var i=0; i<data.length; i++){
            var ghostDiv = $("<div id="+removeSpaces(data[i].name)+" class='ghostCard card col-12 col-md-6 col-lg-4'><div class=card-body><h4 class='card-title'>"+data[i].name+"</h4><div><table class='table table-dark table-bordered'><thead><tr><th value="+removeSpaces(data[i].evidence[0])+">"+data[i].evidence[0]+"</th><th value="+removeSpaces(data[i].evidence[1])+">"+data[i].evidence[1]+"</th><th value="+removeSpaces(data[i].evidence[2])+">"+data[i].evidence[2]+"</th></tr></thead></table></div><div class='card card-body meow'><p class='card-text'>"+data[i].desc+"</p><p class='card-text'><strong class='strengths'>Strengths:</strong> "+data[i].stren+"</p><p class='card-text'><strong class='weakness'>Weaknesses:</strong> "+data[i].weak+"</p></div></div></div>");
            $("#ghosts").append(ghostDiv);
            GHOSTS[i] = removeSpaces(data[i].name);
            EVIDENCE[i] = data[i].evidence;
            temp.set(removeSpaces(data[i].name), removeSpaces(data[i].evidence));
            IS_MATCH.set(GHOSTS[i], false);
        }
        COMPLETE_SET = temp;
        console.log("Ghosts: "+GHOSTS);
        console.log("Evidence: "+EVIDENCE);
        console.log("temp size: "+temp.size);
        temp.forEach(function(evidence, name){console.log("Name: "+name+" / Evidence: "+evidence);});
        console.log(GHOSTS[17]+": "+temp.get(GHOSTS[17]));
        console.log("blah2: "+temp.get(GHOSTS[17])[0]);
        console.log("blah3: "+temp.has(GHOSTS[17]));

        setPossibleEvidence();
    });

// Remove spaces from the ghost names
function removeSpaces(v){
    var moo = String(v).replace(/\s/g, '');
    return moo;
}

// Compare strings - returns 0 if strings are equal
function compareStrings(str1, str2){
    let result = str1.localeCompare(str2);
    return result;
}


// Update evidence ----------------------------------------------------------

function updateEvidence(evBtnID, evBtnValue, evBtnText){
    // Check status of evidence button when clicked
    if($(evBtnID).hasClass(evBtnClass_neutral)){
        // If button is neutral, change to active
        setEvidenceBtnActive(evBtnID);
        selectedEvidence.add(evBtnText);
        setEvidenceLabelsFound(evBtnValue);

        // Call function to show/hide ghosts
        updateGhosts(evBtnText);

    }else if($(evBtnID).hasClass(evBtnClass_active)){
        // If button is active, change to crossed
        setEvidenceBtnCrossed(evBtnID);
        selectedEvidence.delete(evBtnText);
        crossedEvidence.add(evBtnText);
        setEvidenceLabelsNeutral(evBtnValue);

        // Call function to show/hide ghosts
        updateGhosts(evBtnText);

    }else if($(evBtnID).hasClass(evBtnClass_crossed)){
        // If button is crossed, change to neutral
        setEvidenceBtnNeutral(evBtnID);
        crossedEvidence.delete(evBtnText);
        
        // Call function to show/hide ghosts
        updateGhosts(evBtnText);
    }

    /*
    selectedEvidence.forEach(function(value){
        console.log("selectedEvidence: "+value);
    });

    crossedEvidence.forEach(function(value){
        console.log("crossedEvidence: "+value);
    });*/
}

// Reset button -----------------------------------------------------
function resetEvidence(){
    // revert all evidence buttons back to normal
    $('.evBTN').removeClass(evBtnClass_active);
    $('.evBTN').removeClass(evBtnClass_crossed);
    $('.evBTN').addClass(evBtnClass_neutral);
    $('.evBTN').prop( "disabled", false );

    // revert all evidence labels to normal
    $('th').removeClass("table-info");

    // show all ghosts
    for(var i=0; i < GHOSTS.length; i++){
        $("#"+GHOSTS[i]).show();
    }

    selectedEvidence.clear();
    crossedEvidence.clear();
    setPossibleEvidence();
}


// Change evidence button appearance -----------------------------------------------------

function setEvidenceBtnNeutral(evBtnID){
    // If evidence button is crossed, switch to neutral
    $(evBtnID).removeClass(evBtnClass_crossed);
    $(evBtnID).addClass(evBtnClass_neutral);
}

function setEvidenceBtnActive(evBtnID){
    // If evidence button is neutral, switch to active
    $(evBtnID).removeClass(evBtnClass_neutral);
    $(evBtnID).addClass(evBtnClass_active);
}

function setEvidenceBtnCrossed(evBtnID){
    // If evidence button is active, switch to crossed
    $(evBtnID).removeClass(evBtnClass_active);
    $(evBtnID).addClass(evBtnClass_crossed);
}

// Set evidence label (ghost) states -----------------------------------------------------

function setEvidenceLabelsFound(evBtnValue){
    // Change appearance of matching ghost traits to crossed
    $("th[value|="+evBtnValue+"]").addClass("table-info");
}

function setEvidenceLabelsNeutral(evBtnValue){
    // Change appearance of matching ghost traits to crossed
    $("th[value|="+evBtnValue+"]").removeClass("table-info");
}

// Set possible evidence -----------------------------------------------------
function setPossibleEvidence(){
    possibleEvidence.clear();
    for(var i=0; i < GHOSTS.length; i++){
        for(var j=0; j<EVIDENCE[i].length; j++){
            possibleEvidence.add(EVIDENCE[i][j]);
        }
    }
    console.log("possibleEvidence: "+possibleEvidence.size);
    possibleEvidence.forEach(function(value){
        console.log(value);
    });
}

// Set disabled evidence -----------------------------------------------------

function setEvidenceDisabled(){
    $(".evBtn").each(function(){
        if(possibleEvidence.has($(this).text)){
            console.log($(this).text+" exists!");
        }else{
            console.log($(this).text+" does not exists...");
        }
        console.log("DO YOU SEE ME TOO?");
    });

    /*
    if(possibleEvidence.has(evBtnValue)){
        $("button[value|="+evBtnValue+"]").prop( "disabled", false );
    }else{
        $("button[value|="+evBtnValue+"]").prop( "disabled", true );
    }*/
}

// Show/hide ghosts ----------------------------------------------------------

function updateGhosts(evBtnText){
    let evCounter = 0;
    let crossCounter = 0;

    // hide every ghost by default
    $('.ghostCard').hide();

    // cycle through each ghost
    for(var i=0; i < GHOSTS.length; i++){
        // see current status of each ghost matching
        //console.log(GHOSTS[i]+" | "+IS_MATCH.get(GHOSTS[i]));
        console.log(EVIDENCE[i]);

        let isMatch;
        let isCross;

        // see if ghost has current evidence
        selectedEvidence.forEach(function(value){
            for(var j=0; j<EVIDENCE[i].length; j++){
                isMatch = compareStrings(value, EVIDENCE[i][j]);
                
                if(isMatch === 0){
                    console.log("Match found");
                    console.log(GHOSTS[i]+" has a matching evidence of "+value+" | "+EVIDENCE[i][j]);
                    evCounter++;
                }
            }            
        });

        crossedEvidence.forEach(function(value){
            for(var k=0; k<EVIDENCE[i].length; k++){
                isCross = compareStrings(value, EVIDENCE[i][k]);

                if(isCross === 0){
                    crossCounter++;
                }
            }
        });

        if(evCounter === selectedEvidence.size){
            $("#"+GHOSTS[i]).show();
        }

        if(crossCounter !== 0){
            $("#"+GHOSTS[i]).hide();
        }
        console.log(GHOSTS[i]+" | evCounter: "+evCounter);
        console.log(GHOSTS[i]+" | crossCounter: "+crossCounter);
        evCounter = 0;
        crossCounter = 0;
    }

    console.log("THIS IS A TEST DO YOU SEE ME");

    setEvidenceDisabled();
}