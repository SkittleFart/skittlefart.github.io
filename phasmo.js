var GHOSTS_URL = "ghost.json";

window.onload = function(){
    var mydata = JSON.parse(GHOSTS_URL);

    //alert(mydata[0].name);
    console.log(mydata[0].name);
}; 