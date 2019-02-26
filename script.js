var query = ""

// Example Orders
var orders = [
    { ref : 1021, town : "leeds", product : "sporty foot cover", cdd : "01/03/2019"},
    { ref : 1022, town : "Sheffield", product : "comfy foot glove", cdd : "28/02/2019"},
    { ref : 1023, town : "Manchester", product : "solid work foot protector", cdd : "02/03/2019"},
    { ref : 1024, town : "Cardiff", product : "golf foot aid", cdd : "28/02/2019"},
    { ref : 1025, town : "Harrogate", product : "yacht enthusiast foot wrap", cdd : "04/03/2019"},
    ];
    
function queryTest() {
    query = document.getElementById("query").value;
//    document.getElementById("query").value = "";
    searchFunc(query, orders)
}

function searchFunc(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].ref == nameKey) {
            provideDate(myArray[i].cdd);
        }
    }
}

function provideDate(x){
    var dateUpdate = document.getElementById("message_box");
    dateUpdate.innerHTML = "Thank you. Order ref " + query + " will be due " + x;
}

