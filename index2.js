var xmlHttp = new XMLHttpRequest();
var url = "test.JSON";

xmlHttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200 ) {
        myFunction(this.responseText);
    }
}
xmlHttp.open("GET", url, true);
xmlHttp.send();

function myFunction(response){
    var arr = JSON.parse(response);
    var i;
    var out = "<table>";

    for(i=0; i < arr.length; i++) {
        out += "<tr><td>" + arr[i].Name + "<td><td>" + arr[i].Skill +
            "<td><td>" + arr[i].Country.Her + "<td><tr>";  
    }

    out += "<table>";
    document.getElementById("id1").innerHTML = out;
}