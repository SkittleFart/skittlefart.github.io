var GHOSTS_URL = "ghost.json";

$(document).ready(function(){
    var mydata = JSON.parse(GHOSTS_URL);

    alert(mydata[0].name);
})