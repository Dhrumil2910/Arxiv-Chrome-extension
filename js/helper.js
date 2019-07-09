// Ajax function
$.ajaxCall = function(url, method, data, handleData) {
    var settings = {
        "async": false,
        "crossDomain": false,
        "url": url,
        "method": method,
        "contentType": "application/json",
        "dataType": "json",
        "data": JSON.stringify(data),
        success: function(response) {
            handleData({ "status": true, "output": response });
        },
        error: function(response) {
            handleData({ "status": false, "output": response });
        }
    };

    $.ajax(settings)
}

// URL scrapper
$.urlParam = function(name, url){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}