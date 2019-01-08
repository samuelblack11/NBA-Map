var theFile = document.getElementById("output.csv").files[0];

var myTable = document.getElementById("myTable");
 var headerLine = "";

 var myReader = new FileReader();

  myReader.onload = function(e) {
   var content = myReader.result;
   var lines = content.split("\r");
   for (var count = 0; count < lines.length; count++) {
     var row = document.createElement("tr");
     var rowContent = lines[count].split(",");
       for (var i = 0; i < rowContent.length; i++) {
         if (count == 0) {
           var cellElement = document.createElement("th");
         } else {
           var cellElement = document.createElement("td");
         }
         var cellContent = document.createTextNode(rowContent[i]);
         cellElement.appendChild(cellContent);
         row.appendChild(cellElement);
       }  //end rowContent for loop
       myTable.appendChild(row);
     } //end main for loop
   }  //end onload function 
   myReader.readAsText(theFile);
   //end if(theFile)