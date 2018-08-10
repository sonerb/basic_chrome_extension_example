var tabId = parseInt(window.location.search.substring(1));

window.addEventListener("load", function() {
    var btn = document.getElementById("stajyer");
    var result_div = document.getElementById("result");

    btn.addEventListener("click", function(){
        result_div.innerHTML += "Clicked!<br>";
    });

});

window.addEventListener("unload", function() {

});