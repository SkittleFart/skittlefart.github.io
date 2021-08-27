var GHOSTS_URL = "ghost.json";

fetch("/ghost.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data);
    });
/*
window.onload = function(){
    var mydata = JSON.parse(GHOSTS_URL);

    //alert(mydata[0].name);
    console.log(mydata[0].name);
};
*/