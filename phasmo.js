var GHOSTS_URL = "ghost.json";

fetch("/ghost.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        //console.log(data[0].name);

        for(var i=0; i<data.length; i++){
            var ghostDiv = $("<div id="+data[i].name+" class='ghostBox'><h6>"+data[i].name+"</h6><p>"+data[i].desc+"</p><p><strong>Strengths: </strong>"+data[i].stren+"</p><p><strong>Weaknesses: </strong>"+data[i].weak+"</p><p>"+data[i].evidence+"</p></div>");
            $("#ghostList").append(ghostDiv);
        }
        
    });

$('.evBTN').on('click', function(evt) {
    $(this).hide(); // does not run a DOM query
    //$('.class-name').hide() // runs a DOM query
}); 

function removeEvidence(){

}

function reset(){

}


