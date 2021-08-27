var GHOSTS_URL = "ghost.json";

fetch("/ghost.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data[0].name);
        //var $ghostDiv = $("<div>", {id: data[0].name, "class": "ghostBox"});
        var ghostDiv = $("<div id="+data[0].name+" class='ghostBox'><h6>"+data[0].name+"</h6><p>"+data[0].desc+"</p><p>"+data[0].stren+"</p><p>"+data[0].weak+"</p><p>"+data[0].evidence+"</p></div>");
        $("#ghostList").append(ghostDiv);
    });