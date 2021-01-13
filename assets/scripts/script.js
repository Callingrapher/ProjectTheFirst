$(document).ready(function () {

    //  Store API key
    var storeKey = "T1peEznndyQicqT0mnuGmOLI0QxBfAV";

    // QueryURL
    var storeQueryURL = "https://api.tomtom.com/map/1/tile/basic/main/0/0/0.png?view=Unified" + storeKey;

    $.ajax({
        url: storeQueryURL,
        method: "GET"
    }).then(function (response) {
        
    });

    });