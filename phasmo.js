var GHOSTS_URL = "ghost.json";

fetch("/ghost.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data[0].name);
        var $ghostDiv = $("<div>", {id: data[0].name, "class": "ghostBox"});
        $("#ghostList").append($ghostDiv);
    });